# ubuntu-edu 공식이미지 다운로드 : 도커(설치)
# ---------- 도커 명령어 ----------
# 리눅스 : (윈도우: OS(운영체제))
# 종류 : 우분투(ubuntu:무료), 레드헷(상용)

# 리눅스 컨테이너 실행(프로그램 실행)
# 관리자 명령프롬프트
docker run -it --name ubuntu-edu kangtaegyung/ubuntu-edu:latest

# ---------- 리눅스 명령어 ----------
# root : 최상위 관리자 계정

# 리눅스 계정 생성 : 일반 계정(그룹)
# 권한관리 : 그룹(권한) -> 계정(권한)
# dba 그룹 생성
groupadd dba

# 일반 유저 생성 : oracle
useradd oracle -s /bin/bash -m -d /home/oracle -g dba

# sudo : root 계정 권한을 대행해서 실행하기
usermod -aG sudo oracle

# oracle 유저로 로그인하기
su - oracle

# 참고) 도커 명령어 : ubuntu-edu 여기로 접속하기
docker attach ubuntu-edu