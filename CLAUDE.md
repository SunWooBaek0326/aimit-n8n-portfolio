# n8n Portfolio Project

## 프로젝트 개요
에이아이밋(AIMIT)의 n8n 워크플로우 포트폴리오 사이트.
아임웹 코드 위젯에 삽입하는 단일 HTML 파일 구조.

## 배포 아키텍처 (중요!)
- **이 프로젝트(`D:\8. claude code\project\`)가 Vercel에 배포되는 본체.**
- Vercel 프로젝트명: `aimit-n8n-portfolio`
- 배포 URL: `https://aimit-n8n-portfolio.vercel.app`
- Framework: **Other** (정적 HTML 사이트). **절대로 Next.js로 변경 금지.**
- 아임웹에서 `<iframe src="https://aimit-n8n-portfolio.vercel.app/">` 으로 임베딩.
- **배포 시 반드시 `D:\8. claude code\project\` 디렉토리에서 `npx vercel --prod` 실행.**
- `n8n-dashboard` 폴더는 별도 로컬 프로젝트이며, 이 Vercel 프로젝트와 무관. 혼동 금지.
- **새로운 Vercel 프로젝트 생성 금지.** 기존 `aimit-n8n-portfolio`에만 배포할 것.

## 계정 전환 및 세션 관리 (Multi-Account Protocol)
- 본 프로젝트는 Claude Max와 Pro 계정을 전환하며 작업함.
- **작업 시작 전:** 반드시 `SESSION_STATE.md`를 읽어 이전 계정의 진행 상황을 파악할 것.
- **작업 종료 전:** 현재까지의 변경 사항과 다음 계정이 이어받을 Task를 `SESSION_STATE.md`에 상세히 기록할 것.
- **맥락 유지:** 계정이 바뀌더라도 파일 시스템 기반으로 작업하므로, `SESSION_STATE.md`에 명시된 지침을 최우선으로 따를 것.

## 토큰 최적화 지침 (Token Optimization)
- **대형 파일 참조 주의:** `full_n8n_list.md`(72KB)는 전체 분석이 필요할 때만 명시적으로 읽을 것.
- **요약본 활용:** 워크플로우 식별이 목적이라면 `SUMMARY_LIST.md`를 우선 참조할 것.
- **부분 업데이트:** 코드 수정 시 전체 파일을 다시 쓰지 말고, 변경이 필요한 부분(Diff) 위주로 응답하여 출력 토큰을 절약할 것.

## 파일 구조
- `index.html` — 엔진룸 (Tailwind CSS, **Supabase 동적 렌더링** — 하드코딩 배열 제거됨)
- `work_automation.html` — 업무자동화 카테고리 페이지
- `marketing_automation.html` — 마케팅자동화 카테고리 페이지
- `content_automation.html` — 컨텐츠자동화 카테고리 페이지
- `automation_branding.html` — 브랜딩 페이지
- `assets/img/` — 워크플로우 캡처 이미지 (`workflow_{n8nId}.jpg` 형식)
- `assets/videos/` — 워크플로우 데모 영상
- `assets/js/lightbox.js` — 비디오 라이트박스 (이미지 라이트박스는 index.html 내 인라인)
- `scripts/sync_to_supabase.js` — category/summary 일괄 마이그레이션 스크립트
- `scripts/workflow_data.json` — 기존 하드코딩 데이터 백업 (마이그레이션 원본)
- `SESSION_STATE.md` — 계정 간 작업 인계용 상태 관리 파일
- `SUMMARY_LIST.md` — 토큰 절약용 워크플로우 요약 인덱스
- `full_n8n_list.md` — 전체 워크플로우 상세 정보

## 데이터 아키텍처
- **index.html(엔진룸)**: 페이지 로드 시 Supabase REST API에서 전체 워크플로우를 fetch하여 렌더링
- **n8n 동기화**: n8n 워크플로우가 Supabase `n8n_workflows` 테이블에 자동 동기화
- **카테고리/요약**: n8n 동기화 시 AI가 자동 분류 (사용자 구현 중)
- **이미지**: Supabase `image_url` 필드 → `/assets/img/workflow_{id}.jpg`
- **정리대기**: `is_active_in_n8n=false` 항목 → 엔진룸 하단 접힌 섹션으로 표시
- **마이그레이션 복원**: `node scripts/sync_to_supabase.js` (SUPABASE_SERVICE_KEY 환경변수 필요)

## Supabase 스키마 (`n8n_workflows`)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| `id` | text PK | n8n 워크플로우 ID |
| `name` | text | 워크플로우 이름 |
| `category` | text | 업무자동화/마케팅자동화/컨텐츠자동화/미분류 |
| `summary` | text | 워크플로우 설명 |
| `node_count` | int4 | 노드 수 |
| `nodes` | jsonb | 전체 노드 객체 배열 |
| `image_url` | text | 이미지 경로 |
| `publish_bool` | bool | n8n 활성 상태 |
| `is_active_in_n8n` | bool | n8n 서버 존재 여부 |
| `last_synced_at` | timestamp | 마지막 동기화 시점 |
| `updated_at` | timestamp | 최종 수정일 |

## 카테고리 색상 시스템
- 업무자동화: `#a78fcf` (purple), `rgba(108,83,159,*)`
- 마케팅자동화: `#f3886c` (orange), `rgba(243,136,108,*)`
- 컨텐츠자동화: `#34d399` (emerald), `rgba(52,211,153,*)`

## 핵심 규칙
- 모든 외부 링크에 `target="_top"` 필수 (아임웹 iframe 환경)
- 카테고리 페이지: vanilla CSS + Pretendard 폰트
- index.html: Tailwind CDN + Pretendard 폰트
- 커밋 메시지: 한국어, imperative 형태
- 이미지 미리보기: `object-contain` (원본 비율 유지, 전체 레이아웃 보이도록)

## Supabase 연동
- URL: `https://jorrpxxxreisknvinsxg.supabase.co`
- Anon Key: `sb_publishable_T8RSfYdBZ0d2sROMQeHQWA_Qs6ztL4b`
- index.html: Supabase에서 전체 데이터 fetch → 렌더링 (하드코딩 없음)
- 카운터/필터: fetch된 데이터 기준 자동 계산

## 주요 URL
- n8n 서버: `https://n8n.rediace.com`
- 워크플로우 직접 링크: `https://n8n.rediace.com/workflow/{n8nId}`
- 아임웹 엔진룸: `https://brainimpactai.imweb.me/automation_engineroom`
- 아임웹 업무자동화: `https://brainimpactai.imweb.me/work_automation`
- 아임웹 마케팅자동화: `https://brainimpactai.imweb.me/marketing_automation`
- 아임웹 컨텐츠자동화: `https://brainimpactai.imweb.me/contents_automation`
- Vercel 배포: `https://aimit-n8n-portfolio.vercel.app`
- GitHub: `https://github.com/SunWooBaek0326/aimit-n8n-portfolio`
