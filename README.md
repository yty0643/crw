# Commit Reservation Web Project

## <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"><img src="https://img.shields.io/badge/GitHubAPI-181717?style=flat&logo=GitHub&logoColor=white">

---

## 프로젝트 계획 이유

다양한 기능과 REST API를 경헙하고 학습하자는 취지에서 계획했습니다.

본 프로젝트는 1일 1커밋을 계획중인 개발자들이 커밋을 할 수 없는 상황이 생겼을때를 대비해서 미리 커밋을 생성하고 관리하고자 합니다.

## 프로젝트 기능 설명

로그인한 사용자의 커밋 일정, 깃허브 저장소 및 추가정보를 제공하고 특정 날짜에 커밋 예약 및 관리할 수 있습니다.

## CRW 페이지 구성

`login`
사용자가 로그인 및 토큰을 입력할 수 있는 페이지입니다.
github를 통해 사용자 인증을 할 수 있습니다.

`main`
사용자의 전체 커밋 일정, 깃허브 저장소 목록 및 추가정보를 제공하는 페이지입니다.

`repo`
선택된 저장소의 디렉터리, 파일 내용, 커밋 일정 등의 정보와, 커밋 일정 추가 및 제거기능을 제공합니다.

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
