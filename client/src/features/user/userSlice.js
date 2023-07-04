import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: true,
};

// Register
export const register = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/register",
        userData,
        { withCredentials: true }
      );
      return await data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Login
export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/login",
        userData,
        { withCredentials: true }
      );
      return await data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Load User
export const loadUser = createAsyncThunk("user/loadUser", async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/api/v1/me", {
      withCredentials: true,
    });
    return await data.user;
  } catch (error) {
    throw new Error("User Not logged in");
  }
});

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
      })
      // Load User
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state) => {
        state.user = null;
      });
  },
});

export default userSlice.reducer;
