import Axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const loginUser = (userInformation) => async (dispatch) => {
  try {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await Axios.post(
      'http://localhost:3001/api/v1/user/login',
      userInformation,
      axiosConfig
    );

    if (response.status === 200) {
      const token = response.data.body.token;

      localStorage.setItem('token', token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: token });

      return { payload: token };
    } 
  } catch (error) {
    console.error(error);
  }
};


// Action pour l'inscription
export const signupUser = (userData) => async (dispatch) => {
  try {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await Axios.post(
      'http://localhost:3001/api/v1/user/signup',
      userData,
      axiosConfig
    );

    if (response.status === 200) {
      const token = response.data.token;

      localStorage.setItem('token', token);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: token });

      return { payload: token };
    }
  } catch (error) {
    console.error(error);
  }
};


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;



