/**
 * Supabase 마이그레이션 스크립트 (일회성)
 *
 * workflow_data.json에서 category, summary 데이터를 읽어
 * Supabase n8n_workflows 테이블의 기존 행을 업데이트합니다.
 *
 * 사전 조건:
 *   - Supabase 대시보드에서 summary (text) 컬럼 추가 완료
 *
 * 사용법:
 *   set SUPABASE_SERVICE_KEY=your_service_role_key
 *   node scripts/sync_to_supabase.js
 */

const path = require('path');

const SUPABASE_URL = 'https://jorrpxxxreisknvinsxg.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_KEY) {
  console.error('ERROR: SUPABASE_SERVICE_KEY 환경변수를 설정하세요.');
  console.error('  set SUPABASE_SERVICE_KEY=your_service_role_key');
  process.exit(1);
}

async function main() {
  console.log('=== Supabase 마이그레이션 스크립트 ===\n');

  // workflow_data.json에서 데이터 로드
  const dataPath = path.join(__dirname, 'workflow_data.json');
  const workflows = require(dataPath);
  console.log(`1. ${workflows.length}개 워크플로우 데이터 로드 완료\n`);

  // 카테고리 통계
  const cats = {};
  workflows.forEach(w => { cats[w.category] = (cats[w.category] || 0) + 1; });
  console.log('   카테고리 분포:');
  Object.entries(cats).forEach(([k, v]) => console.log(`     ${k}: ${v}개`));
  console.log('');

  // Supabase에 기존 행 확인
  console.log('2. Supabase 기존 데이터 확인 중...');
  const checkRes = await fetch(
    `${SUPABASE_URL}/rest/v1/n8n_workflows?select=id&limit=0`,
    {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'count=exact'
      }
    }
  );
  const range = checkRes.headers.get('content-range');
  const dbCount = range ? parseInt(range.split('/')[1]) : '?';
  console.log(`   Supabase 행 수: ${dbCount}\n`);

  // 개별 PATCH로 category, summary 업데이트
  console.log('3. category, summary 업데이트 중...');
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < workflows.length; i++) {
    const w = workflows[i];
    const n8nId = w.n8nId;
    if (!n8nId) { skipped++; continue; }

    const patchData = {
      category: w.category || '미분류',
      summary: w.summary || ''
    };

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/n8n_workflows?id=eq.${encodeURIComponent(n8nId)}`,
      {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(patchData)
      }
    );

    if (res.ok) {
      updated++;
    } else {
      const errText = await res.text();
      console.error(`  PATCH 실패 [${n8nId}]: ${res.status} ${errText}`);
      errors++;
    }

    // 진행률 (25개마다)
    if ((i + 1) % 25 === 0 || i === workflows.length - 1) {
      console.log(`  진행: ${i + 1}/${workflows.length}`);
    }
  }

  console.log(`\n=== 완료 ===`);
  console.log(`  성공: ${updated}개`);
  console.log(`  건너뜀: ${skipped}개`);
  console.log(`  실패: ${errors}개`);

  if (errors > 0) {
    console.log('\n⚠ 실패 항목이 있습니다. summary 컬럼이 추가되었는지 확인하세요.');
  }
}

main().catch(err => {
  console.error('스크립트 오류:', err);
  process.exit(1);
});
