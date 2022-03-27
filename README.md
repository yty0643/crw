# Commit Reservation Web Project

## <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"><img src="https://img.shields.io/badge/GitHubAPI-181717?style=flat&logo=GitHub&logoColor=white">

---

## 프로젝트 계획 이유

다양한 기능과 REST API를 경헙하고 학습하자는 취지에서 계획했습니다.

본 프로젝트는 1일 1커밋을 계획중인 개발자들이 커밋을 할 수 없는 상황이 생겼을때를 대비해서 미리 커밋을 생성하고 관리하고자 합니다.

---

## 프로젝트 기능 설명

로그인한 사용자의 커밋 일정, 깃허브 저장소 및 추가정보를 제공하고 특정 날짜에 커밋 예약 및 관리할 수 있습니다.

---

## CRW 페이지 구성

- login
- main
- repo

---

### login page

- 웹 실행시 첫 페이지
- Firebase Auth를 활용한 `GitHub login popup` 구현
- Firebase Realtime-Database 를 활용한 누적되는 '좋아요'버튼 구현
- GitHub API를 통한 사용자 저장소에 접근하기 위해 Personal Access Token 입력 `Token`컴포넌트 구현

`Login`

<img width="50%" src="https://user-images.githubusercontent.com/80657819/159114950-a5cd27c4-8aba-4d86-b03a-3a0a16c723b2.png">

`Login / popup`

<img width="50%" alt="githublogin" src="https://user-images.githubusercontent.com/80657819/160287290-bba1f7a0-64f8-4464-89d7-945b1453b473.PNG">

`Token`

<img width="50%" src="https://user-images.githubusercontent.com/80657819/160290472-4adf9f3d-5c9f-46c8-a8f6-aa29262072ff.png">

---

### main page

- 사용자 인증 및 토큰 인증 완료 시 이동하는 페이지
- 로그인된 사용자의 Firebase Realtime-Database에 등록된 커밋 일정을 읽고, 1주일 커밋 일정을 보여주는 `Schedule`컴포넌트 구현
- GitHub API를 통해 읽어온 사용자의 깃허브 저장소 및 추가 정보를 보여주는 `RepoList`컴포넌트 구현

`Main`

<img width="50%" src="https://user-images.githubusercontent.com/80657819/159115009-e0112c2a-e188-46dd-a551-7b67db296454.png">

---

### repo page

- main page에서 저장소 컴포넌트 선택 시 이동하는 페이지
- Firebase Realtime-Database에 등록된 저장소의 커밋일정을 보여주는 `RegList`컴포넌트 구현
- Firebase Realtime-Database에 커밋 일정 추가 및 제거 `RegAddForm`컴포넌트 구현
- 선택된 저장소의 디렉터리 구조를 react-simple-tree-menu 라이브러리를 활용하여 `PreviewRepo`컴포넌트 구현
- TreeMenu에 있는 파일 클릭 시 해당 파일 내용 미리보기 `PreviewFile`컴포넌트 구현

`Repo`

<img width="50%" src="https://user-images.githubusercontent.com/80657819/159115047-c2acfb8f-71ee-41bc-9f68-5cdca4e366af.png">

---

### Header

- main page 및 repo page에서 화면 상단에 고정된 Header 컴포넌트
- CRW 로고 버튼 클릭시 main page로 이동
- 사용자 버튼 클릭시 저장소 이동, 로그아웃, 등록된 토큰 제거 기능을 가진 `UserInfo`컴포넌트 생성
- 메세지 버튼 클릭시 개발자에게 코맨트를 작성할 수 있는 `Comment`컴포넌트 생성

`Header`

<img width="949" alt="header" src="https://user-images.githubusercontent.com/80657819/160288895-69074976-167e-42b6-aeec-2a52047b0b2c.PNG">

`UserInfo`

<img width="131" alt="userinfo" src="https://user-images.githubusercontent.com/80657819/159115077-2a130906-5e9c-48a5-a197-dff359a7c1df.PNG">

`Comment`

<img width="131" alt="2" src="https://user-images.githubusercontent.com/80657819/159115079-a96eff79-0b6f-4dc5-88b9-3bdb8f413f6d.PNG">

---

## 사용한 툴

`react`

`Firebase API`
(https://firebase.google.com/docs)

- auth
- real time database

`Github API`
(https://docs.github.com/en/rest)

- Blobs
- Commits
- References
- Tags
- Trees
- Repositories
- Language

---
