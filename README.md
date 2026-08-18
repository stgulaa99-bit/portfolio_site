# Portfolio GitHub Pages

모바일 최적화 개인 포트폴리오 사이트입니다.

## 폴더 구조

```text
portfolio_site/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── profile.jpg
└── documents/
    ├── resume.pdf
    ├── portfolio-short.pdf
    └── portfolio-detail.pdf
```

## 수정할 부분

`index.html`에서 아래 내용을 본인 정보로 변경하세요.

- 홍길동
- Java ERP · 2년 9개월
- 전화번호
- 이메일
- 핵심역량 3개
- PDF 파일명

프로필 사진은 `assets/profile.jpg`로 넣으면 됩니다.

PDF 3개는 `documents` 폴더에 아래 이름으로 넣으면 다운로드 버튼과 바로 연결됩니다.

- `resume.pdf`
- `portfolio-short.pdf`
- `portfolio-detail.pdf`

## GitHub Pages

1. GitHub에서 새 Repository 생성
2. 이 폴더의 파일을 Repository에 업로드
3. Repository → Settings → Pages
4. Source를 `Deploy from a branch`로 선택
5. Branch는 `main`, Folder는 `/ (root)` 선택
6. Save
7. 생성된 GitHub Pages 주소로 접속

`index.html`이 Repository 최상위에 있기 때문에 별도의 빌드 과정이 필요하지 않습니다.
