# Commit Reservation Web Project

---

## 프로젝트 계획 이유

다양한 RestAPI를 사용해보자는 취지에서 계획했습니다.

본 프로젝트는 1일 1커밋을 계획중인 개발자들이 커밋을 할 수 없는 상황이 생겼을때를 대비해서 미리 커밋을 생성하고 관리하고자 합니다.

## 프로젝트 기능 설명

로그인한 사용자의 커밋 일정, 깃허브 저장소 및 추가정보를 제공하고 특정 날짜에 커밋 예약 및 관리할 수 있습니다.

## CRW 페이지 구성

`login`
사용자가 로그인할 수 있는 페이지입니다.
github를 통해 사용자 인증을 할 수 있습니다.

`main`
사용자의 전체 커밋 일정, 깃허브 저장소 목록 및 추가정보를 제공하는 페이지입니다.

`repo`
선택된 저장소의 디렉터리, 파일 내용, 커밋 일정 등의 정보와, 커밋 일정 추가 및 제거기능을 제공합니다.

## 사용한 Tool 및 APIS

`Firebase`
(https://firebase.google.com/docs)

- auto
- real time database

`Github RESTAPIS`
(https://docs.github.com/en/rest)

- Blobs
- Commits
- References
- Tags
- Trees
- Repositories
- Language

[이건뭐]
