# n8n Portfolio Project

## 프로젝트 개요
에이아이밋(AIMIT)의 n8n 워크플로우 포트폴리오 사이트.
아임웹 코드 위젯에 삽입하는 단일 HTML 파일 구조.

## 파일 구조
- `index.html` — 메인 포트폴리오 (100개 워크플로우, Tailwind CSS)
- `work_automation.html` — 업무자동화 카테고리 페이지
- `marketing_automation.html` — 마케팅자동화 카테고리 페이지
- `content_automation.html` — 컨텐츠자동화 카테고리 페이지
- `automation_branding.html` — 브랜딩 페이지
- `n8n workflow/` — 100개 n8n JSON 파일 (gitignored, 시크릿 포함)
- `assets/videos/` — 워크플로우 데모 영상

## 카테고리 색상 시스템
- 업무자동화: `#a78fcf` (purple), `rgba(108,83,159,*)`
- 마케팅자동화: `#f3886c` (orange), `rgba(243,136,108,*)`
- 컨텐츠자동화: `#34d399` (emerald), `rgba(52,211,153,*)`

## 핵심 규칙
- 모든 외부 링크에 `target="_top"` 필수 (아임웹 iframe 환경)
- 카테고리 페이지: vanilla CSS + Pretendard 폰트
- index.html: Tailwind CDN + Inter 폰트
- 커밋 메시지: 한국어, imperative 형태

## 주요 URL
- n8n 서버: `https://n8n.rediace.com`
- 워크플로우 직접 링크: `https://n8n.rediace.com/workflow/{n8nId}`
- 포트폴리오 (아임웹): `https://brainimpactai.imweb.me/32`
- GitHub: `https://github.com/SunWooBaek0326/aimit-n8n-portfolio`
