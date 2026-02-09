# n8n 워크플로우 전체 분석 리스트 (128개)

> 분석일: 2026-02-09
> 대상 폴더: `n8n workflow/`
> 총 파일 수: **128개** (제외 없이 전수 포함)

---

## #001
- **파일명:** `(실시간)상품이미지_나노바나나.json`
- **워크플로우 이름:** (실시간)상품이미지_나노바나나
- **노드 종류:** airtable, code, convertToFile, extractFromFile, googleDrive, googleSheets, httpRequest, if, manualTrigger, merge, set, slack, splitInBatches, stickyNote, wait, webhook
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 에어테이블 상품정보를 기반으로 나노바나나 AI API에 이미지 생성을 요청하고 결과를 구글 드라이브에 업로드 후 슬랙으로 결과를 알리는 메인 시스템

---

## #002
- **파일명:** `(실시간)상품이미지_나노바나나 (수동테스트용).json`
- **워크플로우 이름:** (실시간)상품이미지_나노바나나 (수동테스트용)
- **노드 종류:** airtable, code, convertToFile, extractFromFile, googleDrive, googleSheets, httpRequest, if, manualTrigger, merge, set, slack, splitInBatches, stickyNote, wait, webhook
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 에어테이블 상품정보를 기반으로 나노바나나 AI API에 이미지 생성을 요청하고 결과를 구글 드라이브에 업로드하는 수동 테스트용 상품 이미지 자동 생성 시스템

---

## #003
- **파일명:** `(실시간)상품이미지_나노바나나 test.json`
- **워크플로우 이름:** (실시간)상품이미지_나노바나나 test
- **노드 종류:** airtable, code, convertToFile, extractFromFile, googleDrive, googleSheets, httpRequest, if, manualTrigger, merge, set, slack, splitInBatches, stickyNote, wait, webhook
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 나노바나나 AI API를 활용한 상품 이미지 자동 생성 시스템의 테스트 버전

---

## #004
- **파일명:** `(실시간)상품이미지_나노바나나 test (1).json`
- **워크플로우 이름:** (실시간)상품이미지_나노바나나 test
- **노드 종류:** airtable, code, convertToFile, extractFromFile, googleDrive, googleSheets, httpRequest, if, manualTrigger, merge, set, slack, splitInBatches, stickyNote, wait, webhook
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 나노바나나 AI API를 활용한 상품 이미지 자동 생성 시스템의 테스트 복사본

---

## #005
- **파일명:** `[AIMIT]⚡[올인원 과정] AI 솔로프리너 비즈니스 스쿨(ASBS) 1기 멤버십_무료설명회 (참가신청서).json`
- **워크플로우 이름:** [AIMIT]⚡[올인원 과정] AI 솔로프리너 비즈니스 스쿨(ASBS) 1기 멤버십_무료설명회 (참가신청서)
- **노드 종류:** LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:openAi, LC:vectorStorePGVector, filter, httpRequest, if, n8n-nodes-tallyforms.tallyTrigger, noOp, postgres, set, stickyNote, telegram, wait
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 신청서 접수 시 AI가 응답을 분석하고 PGVector에 벡터 저장, PostgreSQL에 기록 후 텔레그램으로 알림을 발송하는 무료설명회 참가 관리 시스템

---

## #006
- **파일명:** `[WF-A] Gemini Batch_BANANA — Submit (JSON).json`
- **워크플로우 이름:** [WF-A] Gemini Batch_BANANA — Submit (JSON)
- **노드 종류:** code, convertToFile, googleCloudStorage, googleSheets, httpRequest, manualTrigger, set, slack, stickyNote
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 구글시트 상품정보를 JSONL로 변환하여 Gemini 배치 API에 대량 이미지 생성을 요청하고 GCS에 업로드 후 슬랙으로 결과 알림

---

## #007
- **파일명:** `[WF-A] Gemini Batch_BANANA — Submit (JSON) - test.json`
- **워크플로우 이름:** [WF-A] Gemini Batch_BANANA — Submit (JSON) - test
- **노드 종류:** code, convertToFile, googleCloudStorage, googleSheets, httpRequest, manualTrigger, set
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 구글시트 상품정보를 JSONL로 변환하여 Gemini 배치 API에 대량 이미지 생성을 요청하고 GCS에 업로드

---

## #008
- **파일명:** `[WF-B] Gemini Batch_BANANA — Collect.json`
- **워크플로우 이름:** [WF-B] Gemini Batch_BANANA — Collect
- **노드 종류:** code, cron, googleCloudStorage, googleDrive, googleSheets, httpRequest, if, loop, moveBinaryData
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** Gemini 배치 작업 완료를 10분마다 모니터링하고 생성된 이미지를 GCS에서 다운로드하여 구글 드라이브에 저장

---

## #009
- **파일명:** `0) Start Workflow (trigger).json`
- **워크플로우 이름:** 0) Start Workflow (trigger)
- **노드 종류:** LC:chatTrigger, formTrigger, googleSheets, httpRequest, manualTrigger, scheduleTrigger, set, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 다양한 트리거(수동/스케줄/폼/웹훅/챗)를 모아둔 범용 워크플로우 시작점 템플릿

---

## #010
- **파일명:** `0) Start Workflow (trigger) (1).json`
- **워크플로우 이름:** 0) Start Workflow (trigger)
- **노드 종류:** LC:chatTrigger, formTrigger, googleSheets, httpRequest, manualTrigger, scheduleTrigger, set, switch, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 다양한 트리거 유형을 모아둔 범용 워크플로우 시작점 템플릿 (switch 포함 버전)

---

## #011
- **파일명:** `0) Start Workflow (trigger) - AI강사양성.json`
- **워크플로우 이름:** 0) Start Workflow (trigger) - AI강사양성
- **노드 종류:** LC:chatTrigger, formTrigger, googleSheets, httpRequest, manualTrigger, scheduleTrigger, set, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** AI강사양성 과정용 다양한 트리거(수동/스케줄/폼/웹훅/챗)를 모아둔 워크플로우 시작점 템플릿

---

## #012
- **파일명:** `0단계) Start Workflow (trigger)_25.12.19.json`
- **워크플로우 이름:** 0단계) Start Workflow (trigger)_25.12.19
- **노드 종류:** LC:chatTrigger, formTrigger, googleSheets, httpRequest, manualTrigger, scheduleTrigger, set, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 뉴스레터 파이프라인의 0단계 트리거 모음으로 스케줄/웹훅/폼 등 다양한 시작점을 제공

---

## #013
- **파일명:** `1) 텔레그램 음성메모자산화.json`
- **워크플로우 이름:** 1) 텔레그램 음성메모자산화
- **노드 종류:** code, googleDrive, if, openAi, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 텔레그램으로 받은 음성 메시지를 Whisper로 텍스트 변환 후 AI가 내용을 정리하여 구글 드라이브에 자동 저장

---

## #014
- **파일명:** `1) ai-agent financial-advisor-test(텔레그램_주가분석).json`
- **워크플로우 이름:** 1) ai-agent financial-advisor-test(텔레그램_주가분석)
- **노드 종류:** LC:agent, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:openAi, LC:outputParserStructured, gmail, httpRequestTool, markdown, set, stickyNote, switch, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 텔레그램 음성/텍스트 입력으로 주가·재무제표(대차대조표/손익계산서/현금흐름)를 실시간 조회·분석하는 AI 금융 에이전트

---

## #015
- **파일명:** `1) task management agent (심플 챗봇) - AI강사양성.json`
- **워크플로우 이름:** 1) task management agent (심플 챗봇) - AI강사양성
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatOpenAi, LC:memoryBufferWindow, gmailTool, googleSheetsTool, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** AI 챗봇으로 구글시트 기반 태스크를 생성·조회·수정·삭제하고 Gmail로 알림을 발송하는 업무 관리 에이전트

---

## #016
- **파일명:** `11st 인증메일 슬랙전송.json`
- **워크플로우 이름:** 11st 인증메일 슬랙전송
- **노드 종류:** code, filter, gmailTrigger, slack, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** Gmail에서 11번가 인증메일을 자동 감지하여 슬랙 채널로 즉시 전달

---

## #017
- **파일명:** `1단계) RSS 데이터 수집 (오프라인 강의용1220).json`
- **워크플로우 이름:** 1단계) RSS 데이터 수집 (오프라인 강의용1220)
- **노드 종류:** LC:openAi, code, if, manualTrigger, rssFeedRead, splitInBatches, stickyNote, switch, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 다수 RSS 피드에서 24시간 이내 최신 글을 수집하고 GPT로 요약하여 텔레그램으로 전송하는 오프라인 강의용 버전

---

## #018
- **파일명:** `1단계) RSS 데이터 수집_25.12.20.json`
- **워크플로우 이름:** 1단계) RSS 데이터 수집_25.12.20
- **노드 종류:** LC:openAi, code, if, manualTrigger, rssFeedRead, splitInBatches, stickyNote, switch, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 다수 RSS 피드에서 24시간 이내 최신 글을 수집하고 GPT로 요약하여 텔레그램으로 전송하는 뉴스 수집 파이프라인

---

## #019
- **파일명:** `2) 견적서/계약서 자동 생성 메일발송.json`
- **워크플로우 이름:** 2) 견적서/계약서 자동 생성 메일발송
- **노드 종류:** code, convertToFile, formTrigger, gmail, googleDrive, html, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** 폼에 고객·상품 정보를 입력하면 견적서/계약서 HTML을 자동 생성하고 Gmail로 발송하는 문서 자동화 시스템

---

## #020
- **파일명:** `2) ai-agent financial-advisor-test(텔레그램_주가분석)-AI강사양성.json`
- **워크플로우 이름:** 2) ai-agent financial-advisor-test(텔레그램_주가분석)-AI강사양성
- **노드 종류:** LC:agent, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:openAi, LC:outputParserStructured, gmail, httpRequestTool, markdown, set, stickyNote, switch, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** AI강사양성 과정용 텔레그램 기반 AI 주가 분석 에이전트 (강의 버전)

---

## #021
- **파일명:** `2) task management agent (심플 챗봇) 수업용-미리방재.json`
- **워크플로우 이름:** 2) task management agent (심플 챗봇) 수업용-미리방재
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatOpenAi, LC:memoryBufferWindow, gmailTool, googleSheetsTool, slackTool, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** AI 챗봇으로 구글시트 태스크 관리 + Slack/Gmail 연동 업무 관리 에이전트 (수업용)

---

## #022
- **파일명:** `2) task management agent (심플 챗봇) 수업용-미리방재 (1).json`
- **워크플로우 이름:** 2) task management agent (심플 챗봇) 수업용-미리방재
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatOpenAi, LC:memoryBufferWindow, gmailTool, googleSheetsTool, slackTool, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** AI 챗봇으로 구글시트 태스크 관리 + Slack/Gmail 연동 업무 관리 에이전트 (수업용 복사본)

---

## #023
- **파일명:** `2단계) 뉴스레터 SNS 데이터 작성 (오프라인 강의용).json`
- **워크플로우 이름:** 2단계) 뉴스레터 SNS 데이터 작성 (오프라인 강의용)
- **노드 종류:** LC:openAi, code, gmail, html, htmlExtract, httpRequest, stickyNote, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 텔레그램으로 수집된 뉴스 링크를 스크래핑하고 GPT로 분석하여 뉴스레터/SNS 콘텐츠를 자동 작성하는 오프라인 강의용 버전

---

## #024
- **파일명:** `2단계) 뉴스레터 SNS 데이터 작성_25.12.20.json`
- **워크플로우 이름:** 2단계) 뉴스레터 SNS 데이터 작성_25.12.20
- **노드 종류:** LC:openAi, code, gmail, html, htmlExtract, httpRequest, stickyNote, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 텔레그램으로 수집된 뉴스 링크를 스크래핑하고 GPT로 분석하여 뉴스레터/SNS 콘텐츠를 자동 작성

---

## #025
- **파일명:** `2단계) 협업리포트 _슬랙용.json`
- **워크플로우 이름:** 2단계) 협업리포트 _슬랙용
- **노드 종류:** LC:agent, LC:lmChatOpenAi, airtable, code, filter, httpRequest, if, manualTrigger, merge, scheduleTrigger, set, stickyNote, switch, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Airtable 기반 팀 업무 데이터를 AI가 요약하여 슬랙으로 협업 리포트를 자동 발송 (83노드)

---

## #026
- **파일명:** `2단계) 협업리포트 _슬랙용(신규방_생존신고 메시지).json`
- **워크플로우 이름:** 2단계) 협업리포트 _슬랙용(신규방_생존신고 메시지)
- **노드 종류:** httpRequest, manualTrigger, scheduleTrigger, set
- **카테고리:** 업무자동화
- **핵심 기능:** 슬랙 신규방에 생존신고 메시지를 스케줄 또는 수동으로 자동 발송하는 협업 리포트 보조 워크플로우

---

## #027
- **파일명:** `2단계) 협업리포트 _슬랙용(AB조통합)_251117.json`
- **워크플로우 이름:** 2단계) 협업리포트 _슬랙용(AB조통합)_251117
- **노드 종류:** LC:agent, LC:lmChatOpenAi, airtable, code, filter, httpRequest, if, manualTrigger, merge, scheduleTrigger, set, stickyNote, switch, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Airtable 기반 A/B조 팀원의 업무 현황을 AI가 요약하여 슬랙으로 데일리 협업 리포트를 자동 발송하는 통합 시스템 (93노드)

---

## #028
- **파일명:** `2단계) 협업리포트 _잔디용.json`
- **워크플로우 이름:** 2단계) 협업리포트 _잔디용
- **노드 종류:** LC:agent, LC:lmChatOpenAi, airtable, code, filter, httpRequest, if, manualTrigger, merge, scheduleTrigger, set, stickyNote, switch, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Airtable 기반 팀 업무 데이터를 AI가 요약하여 잔디 메신저로 협업 리포트를 자동 발송 (62노드)

---

## #029
- **파일명:** `3) AIMIT) tally설문 분석발송_1220강의설문.json`
- **워크플로우 이름:** 3) AIMIT) tally설문 분석발송_1220강의설문
- **노드 종류:** LC:openAi, code, httpRequest, if, noOp, set, slack, stickyNote, wait, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 응답을 OpenAI가 분석하여 슬랙으로 자동 리포트를 발송하는 1220 강의 설문 분석 시스템

---

## #030
- **파일명:** `3) Denny) tally설문 분석발송 (신버전).json`
- **워크플로우 이름:** 3) Denny) tally설문 분석발송 (신버전)
- **노드 종류:** LC:chainLlm, LC:lmChatGroq, LC:openAi, code, discord, gmail, html, httpRequest, if, merge, noOp, notion, set, slack, stickyNote, wait, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 응답을 AI가 분석하여 맞춤 SMS/이메일/노션/슬랙으로 자동 리포트를 발송하는 설문 분석 시스템 (40노드)

---

## #031
- **파일명:** `3) Denny) tally설문 분석발송 (신버전) _강의본(AIMIT).json`
- **워크플로우 이름:** 3) Denny) tally설문 분석발송 (신버전) _강의본(AIMIT)
- **노드 종류:** LC:chainLlm, LC:lmChatGroq, LC:openAi, code, discord, gmail, html, httpRequest, if, merge, noOp, notion, set, slack, stickyNote, wait, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 응답을 AI(Groq/OpenAI)가 분석하여 맞춤 SMS/이메일/노션/슬랙으로 자동 리포트 발송하는 AIMIT 강의 버전

---

## #032
- **파일명:** `3) YouTube AI 분석기.json`
- **워크플로우 이름:** 3) YouTube AI 분석기
- **노드 종류:** @apify/n8n-nodes-apify.apify, form, formTrigger, openAi, stickyNote
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** YouTube URL을 폼에 입력하면 Apify로 영상 데이터를 크롤링하고 ChatGPT가 분석 리포트를 생성

---

## #033
- **파일명:** `4) tavily AGENT AI 개인비서.json`
- **워크플로우 이름:** 4) tavily AGENT AI 개인비서
- **노드 종류:** LC:agent, LC:chainLlm, LC:lmChatOpenAi, LC:memoryBufferWindow, code, github, gmail, googleDrive, html, httpRequestTool, notion, stickyNote, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 텔레그램으로 URL이나 질문을 보내면 Tavily로 웹 리서치 후 노션·구글드라이브·이메일로 자동 정리하는 AI 개인비서 에이전트

---

## #034
- **파일명:** `5) Tally 설문 sms (SOLAPI) 회신기.json`
- **워크플로우 이름:** 5) Tally 설문> sms (SOLAPI) 회신기
- **노드 종류:** code, httpRequest, openAi, stickyNote, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 응답자의 전화번호를 추출하고 GPT가 맞춤 감사 메시지를 작성하여 SOLAPI로 SMS 자동 회신

---

## #035
- **파일명:** `강의_1단계) RAG 초기데이터 적재.json`
- **워크플로우 이름:** 강의_1단계) RAG 초기데이터 적재
- **노드 종류:** LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:vectorStoreSupabase, manualTrigger, stickyNote, supabase
- **카테고리:** 업무자동화
- **핵심 기능:** Supabase에서 벡터화되지 않은 데이터를 찾아 OpenAI 임베딩으로 벡터스토어에 초기 적재

---

## #036
- **파일명:** `강의_1단계) RAG 초기데이터 적재 (1).json`
- **워크플로우 이름:** 강의_1단계) RAG 초기데이터 적재
- **노드 종류:** LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:vectorStoreSupabase, manualTrigger, stickyNote, supabase
- **카테고리:** 업무자동화
- **핵심 기능:** Supabase 벡터스토어에 OpenAI 임베딩으로 초기 데이터를 적재하는 RAG 구축 워크플로우 (복사본)

---

## #037
- **파일명:** `강의_2단계) RAG CS 워크플로우(벡터스토어).json`
- **워크플로우 이름:** 강의_2단계) RAG CS 워크플로우(벡터스토어)
- **노드 종류:** LC:agent, LC:chatTrigger, LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:lmChatGoogleGemini, LC:memoryBufferWindow, LC:toolVectorStore, LC:vectorStoreSupabase, formTrigger, googleSheets, if, set, stickyNote, supabase
- **카테고리:** 업무자동화
- **핵심 기능:** Supabase 벡터스토어와 Gemini AI를 활용하여 고객 문의에 자동 응답하는 RAG CS 챗봇 (벡터스토어 버전)

---

## #038
- **파일명:** `강의) tavily AGENT AI 개인비서.json`
- **워크플로우 이름:** 강의) tavily AGENT AI 개인비서
- **노드 종류:** LC:agent, LC:chainLlm, LC:lmChatOpenAi, LC:memoryBufferWindow, code, github, gmail, googleDrive, html, httpRequestTool, notion, stickyNote, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** Tavily 웹 검색 연동 AI 개인비서 에이전트의 강의용 버전

---

## #039
- **파일명:** `강의0단계) RAG CS 워크플로우(구글시트).json`
- **워크플로우 이름:** 강의0단계) RAG CS 워크플로우(구글시트)
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatOpenAi, LC:memoryBufferWindow, googleSheetsTool
- **카테고리:** 업무자동화
- **핵심 기능:** 구글시트 데이터를 기반으로 AI가 고객 문의에 응답하는 RAG CS 챗봇 (구글시트 버전)

---

## #040
- **파일명:** `강의0단계) RAG CS 워크플로우(구글시트) (1).json`
- **워크플로우 이름:** 강의0단계) RAG CS 워크플로우(구글시트)
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatOpenAi, LC:memoryBufferWindow, googleSheetsTool
- **카테고리:** 업무자동화
- **핵심 기능:** 구글시트 데이터를 기반으로 AI가 고객 문의에 응답하는 RAG CS 챗봇 (구글시트 버전, 복사본)

---

## #041
- **파일명:** `강의초안_완성안됨) firecrawl AI 개인비서 (무료 사용불가).json`
- **워크플로우 이름:** 강의초안_완성안됨) firecrawl AI 개인비서 (무료 사용불가)
- **노드 종류:** code, httpRequest, if, splitInBatches, stickyNote, telegram, telegramTrigger, wait
- **카테고리:** 업무자동화
- **핵심 기능:** Firecrawl API로 웹 리서치를 수행하여 보고서를 생성하는 AI 개인비서 (미완성/무료 사용 불가)

---

## #042
- **파일명:** `강의후_응용) RAG CS 워크플로우(벡터스토어) 웹훅연결(chatwood).json`
- **워크플로우 이름:** 강의후_응용) RAG CS 워크플로우(벡터스토어) 웹훅연결(chatwood)
- **노드 종류:** LC:agent, LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:toolVectorStore, LC:vectorStoreSupabase, code, formTrigger, googleSheets, httpRequest, if, set, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Supabase 벡터스토어 기반 RAG CS 챗봇에 Chatwoot 고객상담 시스템을 연동하여 실시간 대화 지원 (24노드)

---

## #043
- **파일명:** `강의fin) RAG CS 워크플로우(벡터스토어) 웹훅연결(typebot).json`
- **워크플로우 이름:** 강의fin) RAG CS 워크플로우(벡터스토어) 웹훅연결(typebot)
- **노드 종류:** LC:agent, LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:toolVectorStore, LC:vectorStoreSupabase, formTrigger, googleSheets, if, set, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Supabase 벡터스토어 기반 RAG로 고객 문의에 자동 응답하고 미답변 건을 구글시트에 기록·담당자에게 전달하는 CS 챗봇 (18노드)

---

## #044
- **파일명:** `강의fin) RAG CS 워크플로우(벡터스토어) 웹훅연결(typebot) (1).json`
- **워크플로우 이름:** 강의fin) RAG CS 워크플로우(벡터스토어) 웹훅연결(typebot)
- **노드 종류:** LC:agent, LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:toolVectorStore, LC:vectorStoreSupabase, formTrigger, googleSheets, if, set, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Supabase 벡터스토어 기반 RAG로 고객 문의에 자동 응답하고 미답변은 담당자에게 전달하는 CS 챗봇 (복사본)

---

## #045
- **파일명:** `강제 에러 테스트용2.json`
- **워크플로우 이름:** 강제 에러 테스트용2
- **노드 종류:** code, scheduleTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 스케줄에 따라 의도적으로 에러를 발생시켜 에러 알림 시스템을 테스트하는 유틸리티 (버전 2)

---

## #046
- **파일명:** `강제에러생성.json`
- **워크플로우 이름:** 강제에러생성
- **노드 종류:** code, scheduleTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 스케줄에 따라 의도적으로 에러를 발생시켜 에러 알림 시스템을 테스트하는 유틸리티

---

## #047
- **파일명:** `견적서/계약서 자동 생성 시스템.json`
- **워크플로우 이름:** 견적서/계약서 자동 생성 시스템
- **노드 종류:** code, convertToFile, formTrigger, gmail, googleDrive, html
- **카테고리:** 업무자동화
- **핵심 기능:** 폼에 고객·상품 정보를 입력하면 금액을 자동 계산하고 견적서/계약서 HTML을 생성하여 구글 드라이브에 저장 후 Gmail로 발송

---

## #048
- **파일명:** `뉴스레터 자동화.json`
- **워크플로우 이름:** 뉴스레터 자동화
- **노드 종류:** LC:agent, LC:agentTool, LC:lmChatGoogleGemini, LC:outputParserStructured, LC:toolThink, convertToFile, gmail, httpRequest, limit, manualTrigger, markdown, perplexityTool, rssFeedRead, twitter
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** RSS 피드와 Perplexity AI로 뉴스를 수집·분석하고 Gemini가 뉴스레터를 자동 작성하여 Gmail 발송 및 트위터에 게시하는 멀티채널 뉴스레터 시스템

---

## #049
- **파일명:** `뉴스레터원문생성 and SNS발행 (실행단계).json`
- **워크플로우 이름:** 뉴스레터원문생성 and SNS발행 (실행단계)
- **노드 종류:** LC:anthropic, LC:googleGemini, LC:openAi, code, github, googleDrive, htmlExtract, httpRequest, stickyNote, stopAndError, switch, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 텔레그램 뉴스 데이터를 3종 AI(GPT·Gemini·Claude)로 병렬 처리하여 뉴스레터 원문을 생성하고 GitHub/구글 드라이브에 저장·SNS 발행 (29노드)

---

## #050
- **파일명:** `뉴스레터원문생성 and SNS발행 (실행단계) SNS연동완료.json`
- **워크플로우 이름:** 뉴스레터원문생성 and SNS발행 (실행단계) SNS연동완료
- **노드 종류:** LC:anthropic, LC:googleGemini, LC:openAi, code, github, googleDrive, htmlExtract, httpRequest, stickyNote, stopAndError, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 3종 AI로 뉴스레터 원문을 생성하고 GitHub/구글 드라이브 저장 후 SNS 연동까지 완료된 최종 버전 (24노드)

---

## #051
- **파일명:** `다이나믹 웹사이트 초안 만들기.json`
- **워크플로우 이름:** 다이나믹 웹사이트 초안 만들기
- **노드 종류:** LC:agent, LC:agentTool, LC:lmChatGoogleGemini, LC:lmChatOpenAi, LC:outputParserStructured, LC:toolThink, dateTimeTool, googleDrive, googleSheets, html, if, limit, manualTrigger, perplexityTool, reddit
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** Reddit 트렌드와 Perplexity 리서치를 기반으로 멀티 AI 에이전트가 다이나믹 웹사이트 초안을 자동 생성하여 구글 드라이브에 저장

---

## #052
- **파일명:** `대량 문자발송(발송 준비 및 승인 요청).json`
- **워크플로우 이름:** 대량 문자발송(발송 준비 및 승인 요청)
- **노드 종류:** aggregate, form, formTrigger, if, postgres, switch, telegram
- **카테고리:** 마케팅자동화
- **핵심 기능:** 폼에서 대상 그룹(전체/유료/미결제)을 선택하고 암호 확인 후 텔레그램으로 발송 승인을 요청하는 SMS 제어 패널

---

## #053
- **파일명:** `대량 문자발송(실발송).json`
- **워크플로우 이름:** 대량 문자발송(실발송)
- **노드 종류:** httpRequest, if, noOp, postgres, set, splitInBatches, stickyNote, switch, telegram, telegramTrigger, wait
- **카테고리:** 마케팅자동화
- **핵심 기능:** 텔레그램 승인 후 SOLAPI를 통해 대량 SMS를 실제 발송하고 잔액·성공·실패를 추적하여 결과를 보고 (38노드)

---

## #054
- **파일명:** `매일 아침 날씨 알림 (Slack).json`
- **워크플로우 이름:** 매일 아침 날씨 알림 (Slack)
- **노드 종류:** openWeatherMap, scheduleTrigger, slack
- **카테고리:** 업무자동화
- **핵심 기능:** 매일 아침 9시 OpenWeatherMap API로 현재 날씨를 가져와 슬랙 채널로 자동 전달

---

## #055
- **파일명:** `미리방재 심플2.json`
- **워크플로우 이름:** 미리방재 심플2
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatOpenAi, LC:memoryBufferWindow, slack
- **카테고리:** 업무자동화
- **핵심 기능:** OpenAI 기반 AI 챗봇이 대화 후 슬랙으로 메시지를 전송하는 간단한 챗봇

---

## #056
- **파일명:** `배포_0826) 한국는지금 _윤형선님(최종).json`
- **워크플로우 이름:** 배포_0826) 한국는지금 _윤형선님(최종)
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, googleSheets, httpRequest, if, merge, rssFeedRead, splitInBatches, stickyNote, stopAndError, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** RSS 한국 뉴스를 수집하고 AI가 이미지(OpenAI)·음성(ElevenLabs)·립싱크 비디오를 자동 생성하는 뉴스 콘텐츠 파이프라인 (58노드)

---

## #057
- **파일명:** `배포_0830) 라솔파미_세계는지금 (유튭자동업로드) _최종 (윤형선님).json`
- **워크플로우 이름:** 배포_0830) 라솔파미_세계는지금 (유튭자동업로드) _최종 (윤형선님)
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, googleSheets, httpRequest, if, merge, rssFeedRead, splitInBatches, stickyNote, stopAndError, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 해외 뉴스 RSS를 수집하여 AI 이미지·음성·비디오를 자동 생성하고 유튜브에 자동 업로드하는 글로벌 뉴스 파이프라인 (56노드)

---

## #058
- **파일명:** `삼성헬스_인바디 데이터파싱.json`
- **워크플로우 이름:** 삼성헬스_인바디 데이터파싱
- **노드 종류:** LC:openAi, code, extractFromFile, formTrigger, googleDrive, httpRequest, if, noOp, slack, splitInBatches, switch, wait
- **카테고리:** 업무자동화
- **핵심 기능:** 삼성헬스/인바디 캡처 이미지를 Gemini Vision AI로 파싱하여 구조화된 건강 데이터로 변환·구글 드라이브에 저장 (32노드)

---

## #059
- **파일명:** `상주)_Draft4) 3_Benchmarking_Report_Tavily.json`
- **워크플로우 이름:** 상주)_Draft4) 3_Benchmarking_Report_Tavily
- **노드 종류:** code, gmail, httpRequest, manualTrigger, openAi, telegram
- **카테고리:** 업무자동화
- **핵심 기능:** Tavily API로 벤치마킹 데이터를 수집하고 OpenAI가 분석 리포트를 생성하여 Gmail/텔레그램으로 발송하는 상주교육 초안

---

## #060
- **파일명:** `상주)Day3 5실습 음성메모자산화.json`
- **워크플로우 이름:** 상주)Day3 5실습 음성메모자산화
- **노드 종류:** code, googleDrive, if, openAi, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 텔레그램 음성 메시지를 Whisper로 텍스트 변환 후 AI가 정리하여 구글 드라이브에 저장하는 상주교육 실습 버전

---

## #061
- **파일명:** `상주1)_보도자료_카드뉴스_초안생성기(강의전).json`
- **워크플로우 이름:** 상주1)_보도자료_카드뉴스_초안생성기(강의전)
- **노드 종류:** code, formTrigger, googleDrive, openAi, telegram
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 폼에 입력한 내용을 AI가 보도자료와 카드뉴스 초안으로 자동 생성하여 구글 드라이브에 저장·텔레그램으로 전달

---

## #062
- **파일명:** `상주2) 지역뉴스 데일리 브리핑 (RSS).json`
- **워크플로우 이름:** 상주2) 지역뉴스 데일리 브리핑 (RSS)
- **노드 종류:** LC:openAi, code, if, manualTrigger, rssFeedRead, scheduleTrigger, splitInBatches, telegram
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 지역 뉴스 RSS 피드를 수집하고 OpenAI가 요약하여 텔레그램으로 데일리 브리핑을 자동 발송

---

## #063
- **파일명:** `상주3)Draft 네이버API 1_Sangju_Risk_Alert_System.json`
- **워크플로우 이름:** 상주3)Draft 네이버API 1_Sangju_Risk_Alert_System
- **노드 종류:** httpRequest, if, openAi, scheduleTrigger, telegram
- **카테고리:** 업무자동화
- **핵심 기능:** 네이버 블로그를 주기적으로 검색하여 AI가 지역(상주) 위험정보를 감지하고 텔레그램으로 알림 발송

---

## #064
- **파일명:** `상주3일차) 실습6 RAG CS 워크플로우(구글시트).json`
- **워크플로우 이름:** 상주3일차) 실습6 RAG CS 워크플로우(구글시트)
- **노드 종류:** LC:agent, LC:lmChatOpenAi, LC:memoryBufferWindow, googleSheetsTool, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 웹훅으로 질문을 받아 구글시트 데이터 기반 AI가 고객 문의에 응답하는 RAG CS 챗봇 (상주교육 실습)

---

## #065
- **파일명:** `상품이미지_Google IMAGEN3 테스트_ (나노바나나로 고고).json`
- **워크플로우 이름:** 상품이미지_Google IMAGEN3 테스트_ (나노바나나로 고고)
- **노드 종류:** code, convertToFile, extractFromFile, googleDrive, googleSheets, httpRequest, manualTrigger, slack, splitInBatches, wait
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 구글시트 상품정보를 기반으로 Google IMAGEN3 API로 상품 이미지를 배치 생성하여 구글 드라이브에 저장

---

## #066
- **파일명:** `시연용) tavily AGENT AI 개인비서.json`
- **워크플로우 이름:** 시연용) tavily AGENT AI 개인비서
- **노드 종류:** LC:agent, LC:chainLlm, LC:lmChatOpenAi, LC:memoryBufferWindow, code, github, gmail, googleDrive, html, httpRequestTool, notion, stickyNote, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** Tavily 웹 검색 연동 AI 개인비서 에이전트의 시연용 버전

---

## #067
- **파일명:** `실시간 나노바나나 (웹훅 스타터) - railway.json`
- **워크플로우 이름:** 실시간 나노바나나 (웹훅 스타터) - railway
- **노드 종류:** httpRequest, manualTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 나노바나나 이미지 생성 시스템의 Requeue 프로세스를 시작하는 Railway 환경 웹훅 런처

---

## #068
- **파일명:** `실시간 나노바나나 (웹훅 스타터) - rediace.json`
- **워크플로우 이름:** 실시간 나노바나나 (웹훅 스타터) - rediace
- **노드 종류:** httpRequest, manualTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 나노바나나 이미지 생성 시스템의 Requeue 프로세스를 시작하는 Rediace 환경 웹훅 런처

---

## #069
- **파일명:** `업무자동화) 뉴스레터 구독자 e-book발송(추후연동자동화유료).json`
- **워크플로우 이름:** 업무자동화) 뉴스레터 구독자 e-book발송(추후연동자동화유료)
- **노드 종류:** httpRequest, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** 뉴스레터 구독 웹훅을 수신하여 구독자에게 e-book 파일을 HTTP로 자동 발송하는 리드 마그넷 시스템

---

## #070
- **파일명:** `영수증 입력기 (Denny).json`
- **워크플로우 이름:** 영수증 입력기 (Denny)
- **노드 종류:** LC:openAi, code, extractFromFile, formTrigger, googleDrive, googleSheets, httpRequest, noOp, splitInBatches, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Gemini Vision AI로 영수증 이미지를 OCR 파싱하여 결제 이력/상세 내역을 구글시트에 자동 입력 (22노드)

---

## #071
- **파일명:** `영수증 입력기 (Denny) (1).json`
- **워크플로우 이름:** 영수증 입력기 (Denny)
- **노드 종류:** LC:openAi, code, extractFromFile, formTrigger, googleDrive, googleSheets, httpRequest, noOp, splitInBatches, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Gemini Vision AI로 영수증 이미지를 OCR 파싱하여 결제 이력을 구글시트에 자동 입력하는 도구 (복사본)

---

## #072
- **파일명:** `영수증 입력기 (n8n커뮤니티)__ 확인필요.json`
- **워크플로우 이름:** 영수증 입력기 (n8n커뮤니티)__ 확인필요
- **노드 종류:** LC:openAi, code, extractFromFile, formTrigger, googleDrive, googleSheets, httpRequest, noOp, splitInBatches, stickyNote, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** n8n 커뮤니티 공유용 영수증 OCR 파싱 및 구글시트 자동 입력 워크플로우 (확인 필요)

---

## #073
- **파일명:** `옵시디언 원문생성 (A단계).json`
- **워크플로우 이름:** 옵시디언 원문생성 (A단계)
- **노드 종류:** LC:anthropic, LC:googleGemini, LC:openAi, code, github, googleDrive, htmlExtract, httpRequest, telegram, telegramTrigger
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 뉴스 링크를 스크래핑하고 3종 AI(GPT·Gemini·Claude)로 원문을 생성하여 옵시디언 호환 마크다운으로 저장

---

## #074
- **파일명:** `워크플로우에러_텔레그램_알림.json`
- **워크플로우 이름:** 워크플로우에러_텔레그램_알림
- **노드 종류:** errorTrigger, telegram
- **카테고리:** 업무자동화
- **핵심 기능:** n8n 워크플로우에서 에러 발생 시 Error Trigger를 감지하여 텔레그램으로 즉시 알림 전송

---

## #075
- **파일명:** `웹훅 러버블 연동테스트.json`
- **워크플로우 이름:** 웹훅 러버블 연동테스트
- **노드 종류:** slack, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** Bubble 웹훅을 수신하여 슬랙으로 전달하는 연동 테스트 워크플로우

---

## #076
- **파일명:** `이메일 정리 일간 메일 리포트.json`
- **워크플로우 이름:** 이메일 정리 일간 메일 리포트
- **노드 종류:** code, gmail, manualTrigger, scheduleTrigger, slack
- **카테고리:** 업무자동화
- **핵심 기능:** Gmail의 스스라벨/쿠팡라벨 이메일을 매일 수집·요약하여 슬랙으로 일간 이메일 리포트 발송

---

## #077
- **파일명:** `ㅈㅈ.json`
- **워크플로우 이름:** ㅈㅈ
- **노드 종류:** executeWorkflowTrigger, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** 서브 워크플로우 트리거만 포함된 빈 테스트 워크플로우

---

## #078
- **파일명:** `제니) 뉴스레터발송_draft 작업중.json`
- **워크플로우 이름:** 제니) 뉴스레터발송_draft 작업중
- **노드 종류:** LC:openAi, code, merge, rssFeedRead, set, splitOut, switch, webhook
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 18개 카테고리(AI자동화/ChatGPT/디지털마케팅/커뮤니티/그로스 등)별 한/영 RSS를 수집·AI 요약하여 뉴스레터 자동 작성 (97노드)

---

## #079
- **파일명:** `제니) 뉴스레터발송_draft 작업중 (1).json`
- **워크플로우 이름:** 제니) 뉴스레터발송_draft 작업중
- **노드 종류:** LC:openAi, code, merge, rssFeedRead, set, splitOut, switch, webhook
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 18개 카테고리별 한/영 RSS를 수집하고 AI로 요약하여 뉴스레터를 자동 작성하는 대규모 시스템 (97노드, 복사본)

---

## #080
- **파일명:** `주식분석_FC기반내용.json`
- **워크플로우 이름:** 주식분석_FC기반내용
- **노드 종류:** LC:chainLlm, LC:lmChatGroq, LC:lmChatOpenAi, aggregate, code, convertToFile, discord, dropbox, formTrigger, gmail, html, if, merge, noOp, perplexity, rssFeedRead, set, switch
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** TSLA/NVDA/AAPL 주식 뉴스를 RSS로 수집하고 Perplexity/Groq/OpenAI로 분석하여 투자 리포트를 자동 생성 (30노드)

---

## #081
- **파일명:** `쿠팡 메일정리 (draft).json`
- **워크플로우 이름:** 쿠팡 메일정리 (draft)
- **노드 종류:** code, gmail, if, manualTrigger, noOp, openAi, scheduleTrigger, set, slack
- **카테고리:** 업무자동화
- **핵심 기능:** 쿠팡 관련 이메일을 정기적으로 수집하고 OpenAI로 내용을 분류·정리하여 슬랙으로 요약 보고

---

## #082
- **파일명:** `협업) 1단계 업무등록 - 슬랙용.json`
- **워크플로우 이름:** 협업) 1단계 업무등록 - 슬랙용
- **노드 종류:** airtable, code, httpRequest, if, set, splitOut, switch, wait, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 슬랙 웹훅으로 팀 업무를 에어테이블에 등록하고 미제출자를 자동 추적·알림하는 협업 업무 등록 시스템 (68노드)

---

## #083
- **파일명:** `협업) 1단계 업무등록 - 잔디용.json`
- **워크플로우 이름:** 협업) 1단계 업무등록 - 잔디용
- **노드 종류:** airtable, code, httpRequest, if, switch, wait, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 잔디 웹훅으로 팀 업무를 에어테이블에 등록하고 미제출자를 자동 추적·알림하는 협업 업무 등록 시스템 (44노드)

---

## #084
- **파일명:** `협업)챗봇 채팅응답 _ 텔레그램.json`
- **워크플로우 이름:** 협업)챗봇 채팅응답 _ 텔레그램
- **노드 종류:** LC:agent, LC:lmChatOpenAi, LC:memoryBufferWindow, airtableTool, switch, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 텔레그램 메시지를 AI 에이전트가 분석하여 에어테이블 협업 데이터를 자연어로 조회·응답하는 챗봇

---

## #085
- **파일명:** `AI Image Editor 25 Oct (SK강의) - Agent 기능.json`
- **워크플로우 이름:** AI Image Editor 25 Oct (SK강의) - Agent 기능
- **노드 종류:** LC:openAi, code, convertToFile, extractFromFile, formTrigger, googleDrive, httpRequest, merge, set
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 참조 이미지와 원본을 업로드하면 GPT-4가 프롬프트를 생성하고 나노바나나 API로 AI 이미지 편집을 수행

---

## #086
- **파일명:** `ai-agent financial-advisor-test(텔레그램_주가분석).json`
- **워크플로우 이름:** ai-agent financial-advisor-test(텔레그램_주가분석)
- **노드 종류:** LC:agent, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:openAi, LC:outputParserStructured, gmail, httpRequestTool, markdown, set, stickyNote, switch, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 텔레그램 기반 AI 주가 분석 에이전트 (번호 없는 원본 버전)

---

## #087
- **파일명:** `baby podcasts (0920 버전_지은길드장).json`
- **워크플로우 이름:** baby podcasts (0920 버전_지은길드장)
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, httpRequest, merge, stickyNote, switch, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 폼 입력으로 AI 아기 캐릭터 팟캐스트 비디오를 자동 생성하여 유튜브에 업로드하는 콘텐츠 파이프라인 (33노드)

---

## #088
- **파일명:** `brain impact (고객정보 Sheet동기화).json`
- **워크플로우 이름:** brain impact (고객정보 Sheet동기화)
- **노드 종류:** googleSheets, postgres, scheduleTrigger, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** PostgreSQL 고객정보를 구글시트로 주기적으로 자동 동기화하여 최신 데이터를 유지

---

## #089
- **파일명:** `brain impact (보고서_viewtable _ DB-Sheet).json`
- **워크플로우 이름:** brain impact (보고서_viewtable _ DB-Sheet)
- **노드 종류:** googleSheets, postgres, scheduleTrigger, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** PostgreSQL DB의 뷰 테이블 5종을 구글시트 보고서로 자동 변환·동기화하는 데이터 파이프라인 (21노드)

---

## #090
- **파일명:** `brainimpact _shlink tracking.json`
- **워크플로우 이름:** brainimpact _shlink tracking
- **노드 종류:** code, googleSheets, httpRequest, scheduleTrigger
- **카테고리:** 마케팅자동화
- **핵심 기능:** Shlink 단축 URL의 클릭 통계 데이터를 주기적으로 API 호출하여 구글시트에 자동 기록

---

## #091
- **파일명:** `brainimpact 고객정보 내부챗봇 (실무적용중).json`
- **워크플로우 이름:** brainimpact 고객정보 내부챗봇 (실무적용중)
- **노드 종류:** LC:agent, LC:chatTrigger, LC:embeddingsOpenAi, LC:lmChatOpenAi, LC:memoryBufferWindow, LC:outputParserStructured, LC:toolVectorStore, LC:vectorStorePGVector, postgresTool, set, switch
- **카테고리:** 업무자동화
- **핵심 기능:** PGVector 벡터DB와 PostgreSQL SQL을 하이브리드로 활용하여 고객정보를 자연어로 조회하는 실무 내부 RAG 챗봇

---

## #092
- **파일명:** `brainimpact Class DB.json`
- **워크플로우 이름:** brainimpact Class DB
- **노드 종류:** LC:openAi, formTrigger, postgres
- **카테고리:** 업무자동화
- **핵심 기능:** 폼으로 입력받은 강의정보를 OpenAI가 분석한 뒤 PostgreSQL classes 테이블에 자동 저장

---

## #093
- **파일명:** `brainimpact CS DB (user만_라클데이터입력).json`
- **워크플로우 이름:** brainimpact CS DB (user만_라클데이터입력)
- **노드 종류:** filter, googleSheets, manualTrigger, postgres, set
- **카테고리:** 업무자동화
- **핵심 기능:** 라클 설문 데이터에서 전화번호를 10~11자리로 표준화하여 PostgreSQL CS용 user 테이블에 입력

---

## #094
- **파일명:** `brainimpact survey DB.json`
- **워크플로우 이름:** brainimpact survey DB
- **노드 종류:** LC:documentDefaultDataLoader, LC:embeddingsOpenAi, LC:openAi, LC:vectorStorePGVector, filter, googleSheets, manualTrigger, postgres, set, splitInBatches, stickyNote
- **카테고리:** 마케팅자동화
- **핵심 기능:** 설문 데이터를 PostgreSQL에 저장하고 OpenAI 임베딩으로 PGVector에 벡터화하여 RAG 검색이 가능하도록 구축 (17노드)

---

## #095
- **파일명:** `brainimpact user_events DB_밀어넣기(라클데이터).json`
- **워크플로우 이름:** brainimpact user_events DB_밀어넣기(라클데이터)
- **노드 종류:** code, googleSheets, manualTrigger, postgres
- **카테고리:** 업무자동화
- **핵심 기능:** 구글시트의 라클 이벤트 데이터를 JavaScript로 파싱하여 PostgreSQL user_events 테이블에 일괄 입력

---

## #096
- **파일명:** `Denny) tally 완료 웹훅 redirect page.json`
- **워크플로우 이름:** Denny) tally 완료 웹훅 redirect page
- **노드 종류:** respondToWebhook, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 완료 시 웹훅을 수신하여 리다이렉트 페이지를 응답하는 설문 완료 처리 워크플로우

---

## #097
- **파일명:** `Denny) tally설문 문자발송 (구버전).json`
- **워크플로우 이름:** Denny) tally설문 문자발송 (구버전)
- **노드 종류:** LC:chainLlm, LC:lmChatGroq, LC:openAi, code, gmail, html, httpRequest, if, merge, noOp, notion, set, slack, stickyNote, wait, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 응답을 AI가 분석하여 SMS/이메일/노션/슬랙으로 자동 발송하는 설문 문자발송 시스템 (구버전, 38노드)

---

## #098
- **파일명:** `Denny) tally설문 분석발송 (신버전).json`
- **워크플로우 이름:** Denny) tally설문 분석발송 (신버전)
- **노드 종류:** LC:chainLlm, LC:lmChatGroq, LC:openAi, code, discord, gmail, html, httpRequest, if, merge, noOp, notion, set, slack, stickyNote, wait, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 응답을 AI가 분석하여 SMS/이메일/노션/슬랙으로 자동 발송하는 설문 분석 시스템 (번호 없는 원본)

---

## #099
- **파일명:** `email 자동화.json`
- **워크플로우 이름:** email 자동화
- **노드 종류:** LC:openAi, gmail, gmailTrigger, googleCalendar, googleSheets, set, slack, switch, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 수신 이메일을 AI가 자동 분류하고 구글시트에 기록, 슬랙 알림, 캘린더 연동, 원클릭 자동 회신까지 처리하는 이메일 자동화 시스템

---

## #100
- **파일명:** `ESM 인증메일 슬랙전송.json`
- **워크플로우 이름:** ESM 인증메일 슬랙전송
- **노드 종류:** code, filter, gmailTrigger, slack
- **카테고리:** 업무자동화
- **핵심 기능:** Gmail에서 ESM 인증메일을 자동 감지하여 슬랙 채널로 즉시 전달

---

## #101
- **파일명:** `ESM 인증메일 슬랙전송_copy.json`
- **워크플로우 이름:** ESM 인증메일 슬랙전송_copy
- **노드 종류:** code, filter, gmailTrigger, slack
- **카테고리:** 업무자동화
- **핵심 기능:** ESM 인증메일 슬랙전송 워크플로우의 복사본

---

## #102
- **파일명:** `FC) 데모단_네이버 키워드 트렌드 AI 분석기.json`
- **워크플로우 이름:** FC) 데모단_네이버 키워드 트렌드 AI 분석기
- **노드 종류:** LC:agent, LC:chatTrigger, LC:lmChatGoogleGemini, LC:outputParserStructured, code, dateTimeTool, httpRequest, if, slack, stickyNote
- **카테고리:** 마케팅자동화
- **핵심 기능:** 네이버 키워드 트렌드 API 데이터를 Gemini AI가 분석하여 경쟁력 인사이트 리포트를 생성하고 슬랙으로 전달

---

## #103
- **파일명:** `FC)데모단_PRD 자동화.json`
- **워크플로우 이름:** FC)데모단_PRD 자동화
- **노드 종류:** LC:agent, LC:agentTool, LC:lmChatGoogleGemini, LC:outputParserStructured, LC:toolThink, dateTimeTool, googleDrive, googleSheets, if, limit, manualTrigger, perplexityTool, reddit
- **카테고리:** 업무자동화
- **핵심 기능:** Reddit 트렌드를 분석하고 멀티 AI 에이전트 체인(Goal/Idea/Persona/PRD)으로 PRD 문서를 자동 생성 (22노드)

---

## #104
- **파일명:** `FC)설문 문자발송.json`
- **워크플로우 이름:** FC)설문 문자발송
- **노드 종류:** LC:openAi, code, gmail, googleSheetsTrigger, httpRequest, if, noOp, notion, set, slack, stickyNote, wait
- **카테고리:** 마케팅자동화
- **핵심 기능:** 구글 폼 설문 응답에 따라 서술형 답변자에게는 30% 할인, 미답변자에게는 15% 할인 쿠폰을 SMS/이메일로 자동 발송 (69노드)

---

## #105
- **파일명:** `maily 수신확인 webhook.json`
- **워크플로우 이름:** maily 수신확인 webhook
- **노드 종류:** googleSheets, respondToWebhook, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** 이메일 수신확인(open tracking) 웹훅을 수신하여 구글시트에 열람 기록을 자동 저장

---

## #106
- **파일명:** `MCP로 n8n을 더 똑똑하게.json`
- **워크플로우 이름:** MCP로 n8n을 더 똑똑하게
- **노드 종류:** LC:mcpTrigger, httpRequestTool, stickyNote
- **카테고리:** 업무자동화
- **핵심 기능:** MCP(Model Context Protocol) 서버 트리거를 통해 n8n을 외부 AI 에이전트의 도구로 연결하는 브릿지

---

## #107
- **파일명:** `My workflow.json`
- **워크플로우 이름:** My workflow
- **노드 종류:** code, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 웹훅 수신 후 JavaScript 코드를 실행하는 기본 테스트 워크플로우

---

## #108
- **파일명:** `My workflow 2.json`
- **워크플로우 이름:** My workflow 2
- **노드 종류:** formTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 폼 트리거만 포함된 빈 테스트 워크플로우

---

## #109
- **파일명:** `My workflow 3.json`
- **워크플로우 이름:** My workflow 3
- **노드 종류:** formTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 폼 트리거만 포함된 빈 테스트 워크플로우

---

## #110
- **파일명:** `My workflow 4.json`
- **워크플로우 이름:** My workflow 4
- **노드 종류:** manualTrigger, postgres
- **카테고리:** 업무자동화
- **핵심 기능:** PostgreSQL SQL 쿼리를 수동 실행하는 테스트 워크플로우

---

## #111
- **파일명:** `My workflow 5.json`
- **워크플로우 이름:** My workflow 5
- **노드 종류:** formTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 견적서/계약서 입력 폼만 포함된 테스트 워크플로우

---

## #112
- **파일명:** `My workflow 6.json`
- **워크플로우 이름:** My workflow 6
- **노드 종류:** LC:openAi, code, httpRequest, if, merge, rssFeedRead, scheduleTrigger, splitInBatches, telegram
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** RSS 피드와 요즘IT 크롤링을 통합하여 GPT로 요약 후 텔레그램으로 전송하는 뉴스 큐레이션 시스템 (20노드)

---

## #113
- **파일명:** `My workflow 7.json`
- **워크플로우 이름:** My workflow 7
- **노드 종류:** manualTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 수동 트리거만 포함된 빈 테스트 워크플로우

---

## #114
- **파일명:** `MyTally.json`
- **워크플로우 이름:** MyTally
- **노드 종류:** code, webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 웹훅을 수신하여 JavaScript로 데이터를 처리하는 테스트 워크플로우

---

## #115
- **파일명:** `n8n Workflow 백업.json`
- **워크플로우 이름:** n8n Workflow 백업
- **노드 종류:** code, discord, function, googleDrive, googleSheets, httpRequest, if, manualTrigger, scheduleTrigger, set, slack, splitInBatches
- **카테고리:** 업무자동화
- **핵심 기능:** n8n API로 모든 워크플로우를 추출하여 구글 드라이브에 JSON 백업, 구글시트에 목록 기록, 슬랙/디스코드로 결과 알림 (22노드)

---

## #116
- **파일명:** `Part5. Youtube & Telgram (FC 에이전트).json`
- **워크플로우 이름:** Part5. Youtube & Telgram (FC 에이전트)
- **노드 종류:** @apify/n8n-nodes-apify.apifyTool, LC:agent, LC:chainLlm, LC:lmChatGoogleGemini, LC:lmChatOpenAi, LC:memoryPostgresChat, LC:outputParserStructured, LC:toolWorkflow, googleSheets, googleSheetsTool, if, noOp, set, stickyNote, switch, telegram, telegramTrigger, youTube, youTubeTool
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 텔레그램으로 YouTube 영상 URL을 전송하면 Apify 크롤링 + 멀티 AI 에이전트가 분석·요약하여 구글시트에 기록하고 텔레그램으로 응답하는 YouTube 분석 에이전트 (47노드)

---

## #117
- **파일명:** `Start Workflow (trigger).json`
- **워크플로우 이름:** Start Workflow (trigger)
- **노드 종류:** LC:chatTrigger, formTrigger, googleSheets, httpRequest, manualTrigger, scheduleTrigger, set, webhook
- **카테고리:** 업무자동화
- **핵심 기능:** 다양한 트리거(수동/스케줄/폼/웹훅/챗) 유형을 모아둔 범용 워크플로우 시작점 템플릿

---

## #118
- **파일명:** `Talking Animal.json`
- **워크플로우 이름:** Talking Animal
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, httpRequest, merge, stickyNote, switch, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 폼 입력으로 AI 이미지·음성·립싱크를 생성하여 말하는 동물 캐릭터 비디오를 자동 제작하고 유튜브에 업로드 (33노드)

---

## #119
- **파일명:** `Talking Animal_2.json`
- **워크플로우 이름:** Talking Animal_2
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, httpRequest, merge, stickyNote, switch, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 폼 입력으로 AI 이미지·음성·립싱크를 생성하여 말하는 동물 캐릭터 비디오를 자동 제작하고 유튜브에 업로드 (33노드, 버전 2)

---

## #120
- **파일명:** `Talking Baby (원본).json`
- **워크플로우 이름:** Talking Baby (원본)
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, httpRequest, merge, stickyNote, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 폼 입력으로 AI 아기 이미지·음성을 생성하고 립싱크 비디오를 자동 제작하여 유튜브에 업로드하는 원본 시스템 (28노드)

---

## #121
- **파일명:** `Talking Pet(지은길드장).json`
- **워크플로우 이름:** Talking Pet(지은길드장)
- **노드 종류:** LC:openAi, code, convertToFile, formTrigger, googleDrive, httpRequest, merge, stickyNote, switch, wait, youTube
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 반려동물 사진에 AI 음성을 합성하여 말하는 펫 비디오를 자동 제작하고 유튜브에 업로드 (33노드)

---

## #122
- **파일명:** `Tally_Jenny.json`
- **워크플로우 이름:** Tally_Jenny
- **노드 종류:** webhook
- **카테고리:** 마케팅자동화
- **핵심 기능:** Tally 설문 웹훅을 수신하는 기본 테스트 워크플로우

---

## #123
- **파일명:** `Telegram AI Calendar EX (FC 에이전트 - pt5).json`
- **워크플로우 이름:** Telegram AI Calendar EX (FC 에이전트 - pt5)
- **노드 종류:** LC:agent, LC:googleGemini, LC:lmChatGoogleGemini, LC:lmChatOpenAi, LC:memoryBufferWindow, googleCalendarTool, set, switch, telegram, telegramTrigger
- **카테고리:** 업무자동화
- **핵심 기능:** 텔레그램 음성/텍스트로 구글 캘린더 일정을 생성·조회·수정·삭제하는 AI 캘린더 관리 에이전트

---

## #124
- **파일명:** `Telegram RSS 리더 수집(0단계) _ 업그레이드중 RSS subWF.json`
- **워크플로우 이름:** Telegram RSS 리더 수집(0단계) _ 업그레이드중 RSS subWF
- **노드 종류:** LC:openAi, code, executeWorkflowTrigger, if, rssFeedRead
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 다른 워크플로우에서 호출되어 RSS 피드를 읽고 24시간 이내 글을 GPT로 요약하는 서브 워크플로우

---

## #125
- **파일명:** `Telegram RSS 리더 수집(0단계)_RSS만 (ver.1).json`
- **워크플로우 이름:** Telegram RSS 리더 수집(0단계)_RSS만 (ver.1)
- **노드 종류:** LC:openAi, code, if, manualTrigger, rssFeedRead, scheduleTrigger, splitInBatches, telegram
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** 다수 RSS 피드에서 최신 글을 수집하고 GPT로 요약하여 텔레그램으로 전송하는 뉴스 수집 봇 (RSS 전용 ver.1)

---

## #126
- **파일명:** `Telegram RSS 리더 수집(0단계)_Tavily연동 (ver.2).json`
- **워크플로우 이름:** Telegram RSS 리더 수집(0단계)_Tavily연동 (ver.2)
- **노드 종류:** LC:openAi, code, httpRequest, if, manualTrigger, rssFeedRead, scheduleTrigger, set, splitInBatches, switch, telegram
- **카테고리:** 컨텐츠자동화
- **핵심 기능:** RSS 피드와 Tavily 웹 검색(요즘IT)을 결합하여 최신 뉴스를 수집·GPT 요약 후 텔레그램으로 전송하는 큐레이션 봇

---

## #127
- **파일명:** `UTM builder (s.brainimpact).json`
- **워크플로우 이름:** UTM builder (s.brainimpact)
- **노드 종류:** airtable, airtableTrigger, httpRequest
- **카테고리:** 마케팅자동화
- **핵심 기능:** 에어테이블에 UTM 파라미터 입력 시 Shlink API로 단축 URL을 자동 생성하여 레코드를 업데이트

---

## #128
- **파일명:** `UTM Clicks Tracker.json`
- **워크플로우 이름:** UTM Clicks Tracker
- **노드 종류:** airtable, googleSheets, httpRequest, scheduleTrigger
- **카테고리:** 마케팅자동화
- **핵심 기능:** 에어테이블의 UTM 단축 링크(dub.co) 클릭 데이터를 주기적으로 수집하여 구글시트에 자동 기록

---

## 카테고리별 요약 통계

| 카테고리 | 수량 | 비율 |
|---------|------|------|
| **업무자동화** | 68개 | 53.1% |
| **컨텐츠자동화** | 40개 | 31.3% |
| **마케팅자동화** | 20개 | 15.6% |
| **합계** | **128개** | 100% |

### 주요 기술 스택 요약
- **AI 모델:** OpenAI GPT-4, Google Gemini, Anthropic Claude, Groq, Perplexity, Whisper
- **메시징:** Telegram, Slack, 잔디, Discord
- **데이터베이스:** PostgreSQL + PGVector, Supabase, Airtable
- **이미지 생성:** 나노바나나 API, Google IMAGEN3, Hedra (립싱크)
- **외부 서비스:** SOLAPI(SMS), Shlink/dub.co(UTM), Tavily, Apify, Notion, GitHub, Twitter
- **저장소:** Google Drive, Google Sheets, Google Cloud Storage, Dropbox
