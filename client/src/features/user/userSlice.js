import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: true,
};

// Register
export const register = createAsyncThunk("user/register", async (userData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/register",
      userData
    );
    return await data.user;
  } catch (error) {
    console.log(error);
  }
});

// Login
export const login = createAsyncThunk("user/login", async (userData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/login",
      userData
    );
    return await data;
  } catch (error) {
    console.log(error);
  }
});

// Load User
// export const loadUser = createAsyncThunk("user/loadUser", async () => {
//   try {
//     const { data } = await axios.get("http://localhost:4000/api/v1/me");
//     return await data.user;
//   } catch (error) {
//     console.log(error);
//   }
// });

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.user = null;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.user = null;
      });
    // Load User
    // .addCase(loadUser.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(loadUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.isAuthenticated = true;
    //   state.user = action.payload;
    // })
    // .addCase(loadUser.rejected, (state) => {
    //   state.user = null;
    // });
  },
});

export default userSlice.reducer;
