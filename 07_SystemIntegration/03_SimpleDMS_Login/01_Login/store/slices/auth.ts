import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IUser from "../../types/auth/IUser";
import authService from "../../services/auth/authService";
import IAuth from "../../types/auth/IAuth";

// user 키가 없으면 null 이 저장됨
const user = JSON.parse(localStorage.getItem("user")||"null");

// 비동기 회원가입 함수 : createAsyncThunk((변수명, thunkAPI) => {실행문})
// 에러처리 : thunkAPI.rejectWithValue(에러메세지)
// async () => { await 실행함수 } :  Promise 와 유사 
export const register = createAsyncThunk(
  "auth/register",
  async (user:IUser, thunkAPI) => {
    try {
      const response = await authService.register(user);
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 비동기 로그인 함수 : createAsyncThunk(함수명, 화살표함수)
// 에러처리 : thunkAPI.rejectWithValue(에러메세지)
// async () => { await 실행함수 } :  Promise 와 유사 
export const login = createAsyncThunk(
  "auth/login",
  async (user:IUser, thunkAPI) => {
    try {
      const data = await authService.login(user);
      return { user: data };
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 비동기 로그아웃 함수
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// 공유저장소 초기객체 : { isLoggedIn: true, user:null(user) }
const initialState: IAuth = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// 리듀서 : 공유저장소
// name : 공유저장소명 (auth)
// initialState : 초기 객체
// reducers : 동기 함수에 실행에 대한 상태값 정의
// extraReducers : 비동기 함수 실행에 대한 상태값 정의
// builder.addCase(비동기함수.fulfilled, 실행함수) : 비동기함수 성공시 실행함수 실행
// builder.addCase(비동기함수.rejected, 실행함수) : 비동기함수 실패시 실행함수 실행
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},                  // 동기로 실행 시
  extraReducers: (builder) => {  // 비동기로 함수 실행 시 : register, login, logout 은 모두 비동기 함수임 
    builder
    // 회원가입 성공시
      .addCase(register.fulfilled, (state) => {
        state.isLoggedIn = false;
      })
      // 회원가입 실패시
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = false;
      })
      // 로그인 성공시
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      // 로그인 실패시
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      // 로그아웃 성공시
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
