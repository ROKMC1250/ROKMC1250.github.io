# Junhyuk Heo - Personal Website

딥러닝 연구자를 위한 개인 홈페이지입니다. GitHub Pages를 통해 호스팅되며, 반응형 디자인으로 모바일과 데스크톱 환경을 모두 지원합니다.

## 🚀 Live Demo

[https://jubhyukheo.github.io](https://jubhyukheo.github.io)

## ✨ 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 환경에서 최적화된 사용자 경험
- **다크 모드 지원**: 시스템 설정에 따른 자동 다크/라이트 모드 전환
- **부드러운 애니메이션**: 스크롤 기반 애니메이션과 부드러운 전환 효과
- **Publications 섹션**: 연구 논문을 시각적으로 표시
- **Interactive Timeline**: 학력 및 경력을 타임라인 형태로 표시
- **모던 UI/UX**: 깔끔하고 전문적인 디자인

## 📁 프로젝트 구조

```
JubhyukHeo.github.io/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 파일
├── data.js             # 데이터 파일 (논문, 경력 정보)
├── README.md           # 프로젝트 설명서
└── assets/             # 이미지 자료
    ├── publications/   # 논문 썸네일 이미지
    │   ├── S^4DM_thumbnail.png
    │   ├── Implisat_IGARSS_thumbnail.png
    │   ├── Implisat_thumbnail.png
    │   └── Fewshot_thumbnail.png
    └── vitae/          # 경력/학력 관련 이미지
        ├── telepix.png
        ├── rokmc.png
        └── konkuk.png
```

## 🛠️ 설정 방법

### 1. GitHub Repository 설정

1. 이 저장소를 fork하거나 다운로드합니다.
2. GitHub에서 새로운 repository를 `[username].github.io` 형태로 생성합니다.
3. 파일들을 업로드합니다.

### 2. GitHub Pages 활성화

1. Repository Settings → Pages로 이동
2. Source를 "Deploy from a branch"로 설정
3. Branch를 "main"으로 선택
4. 저장하면 몇 분 후 `https://[username].github.io`에서 접속 가능합니다.

### 3. 개인 정보 커스터마이징

#### `data.js` 파일 수정

**논문 정보 업데이트:**
```javascript
const publications = [
    {
        title: "논문 제목",
        authors: "저자 이름들",
        venue: "학회/저널 이름",
        year: "2024",
        image: "assets/publications/이미지파일.png",
        description: "논문 설명"
    }
    // 더 많은 논문들...
];
```

**경력/학력 정보 업데이트:**
```javascript
const vitaeData = [
    {
        period: "2024년 3월 - 현재",
        title: "회사/학교 이름",
        subtitle: "직책/학위",
        description: "상세 설명",
        image: "assets/vitae/이미지파일.png",
        type: "work" // 또는 "education", "military"
    }
    // 더 많은 경력들...
];
```

**연락처 정보 업데이트:**
```javascript
const contactInfo = {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    scholar: "https://scholar.google.com/citations?user=YOUR_ID",
    linkedin: "https://linkedin.com/in/yourprofile",
    orcid: "https://orcid.org/0000-0000-0000-0000"
};
```

#### `index.html` 파일 수정

**기본 정보 변경:**
- 제목, 설명글, 소개 문구를 개인에 맞게 수정
- 프로필 사진 추가 (hero section의 image-placeholder 부분)

#### 이미지 파일 교체

1. `assets/publications/` 폴더에 논문 썸네일 이미지 추가
2. `assets/vitae/` 폴더에 회사/학교 로고 이미지 추가
3. 프로필 사진을 `assets/` 폴더에 추가하고 HTML에서 경로 수정

## 🎨 커스터마이징

### 색상 테마 변경

`styles.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #3b82f6;      /* 주 색상 */
    --secondary-color: #6366f1;    /* 보조 색상 */
    --accent-color: #06b6d4;       /* 강조 색상 */
    /* 다른 색상들... */
}
```

### 폰트 변경

Google Fonts를 사용하여 폰트를 변경할 수 있습니다:

1. `index.html`의 `<head>` 섹션에서 Google Fonts 링크 수정
2. `styles.css`에서 `font-family` 속성 수정

### 섹션 추가/제거

새로운 섹션을 추가하려면:

1. `index.html`에 새로운 `<section>` 추가
2. `styles.css`에 해당 섹션의 스타일 추가
3. `script.js`에서 필요한 JavaScript 기능 구현
4. 네비게이션 메뉴에 링크 추가

## 📱 반응형 디자인

이 웹사이트는 다음 화면 크기에 최적화되어 있습니다:

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🌟 기능 설명

### 1. 네비게이션
- 고정된 상단 네비게이션 바
- 모바일에서 햄버거 메뉴
- 현재 섹션 강조 표시
- 부드러운 스크롤 이동

### 2. Hero 섹션
- 프로필 사진과 소개글
- 그라데이션 배경
- CTA 버튼들

### 3. Publications
- 그리드 레이아웃
- 논문 썸네일과 정보 표시
- 호버 효과

### 4. Timeline (Vitae)
- 좌우 교대로 배치되는 타임라인
- 회사/학교 로고
- 상세 정보 표시

### 5. Contact
- 소셜 미디어 링크
- 연락처 정보

## 🔧 개발 환경

이 프로젝트는 순수 HTML, CSS, JavaScript로 구성되어 있어 별도의 빌드 도구가 필요하지 않습니다.

### 로컬 개발

1. 프로젝트를 다운로드합니다
2. `index.html`을 웹 브라우저에서 열거나
3. Live Server 등의 로컬 서버를 사용합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

개선사항이나 버그 수정은 언제나 환영합니다. Issues나 Pull Requests를 자유롭게 제출해주세요.

## 📞 문의

질문이나 도움이 필요하시면 언제든 연락해주세요:
- Email: your.email@example.com
- GitHub: [@JubhyukHeo](https://github.com/JubhyukHeo) 