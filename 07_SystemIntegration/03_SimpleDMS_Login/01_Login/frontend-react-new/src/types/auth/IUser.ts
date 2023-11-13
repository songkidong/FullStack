// IUser.ts : 인터페이스
// TB_USER 테이블 보고 작성
// EMAIL       VARCHAR2(1000)   -- id (email)
// PASSWORD    VARCHAR2(1000),  -- 암호
// USERNAME    VARCHAR2(1000),  -- 유저명
// CODE_NAME   VARCHAR2(1000),  -- 권한코드명(ROLE_USER, ROLE_ADMIN)
export default interface IUser {
    email?: string | null,
    password: string,
    username: string,
    codeName: string,
}