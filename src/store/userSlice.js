import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  about: {},
  _id:"",
  username: "",
  email:"",
  role:"",
  timeline:[],
  skills:[],
  youtube:[],
  projects:[],
  social_handles:[],
  services:[],
  testimonials:[],
  createdAt:"",
  updatedAt:"",
  loading: false,
  error: null,
  mode: localStorage.getItem('mode') || "dark",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('mode', action.payload);
    },
  },
});

export const { setUserData, setLoading, setError, setMode } = userSlice.actions;

// Exporting selectors
export const UserData = state => state.user;
export const about = state => state.user.about;
export const username = state => state.user.username;
export const email = state => state.user.email;
export const role = state => state.user.role;
export const timeline = state => state.user.timeline;
export const skills = state => state.user.skills;
export const youtube = state => state.user.youtube;
export const projects = state => state.user.projects;
export const socialHandles = state => state.user.social_handles;
export const services = state => state.user.services;
export const testimonials = state => state.user.testimonials;
export const createdAt = state => state.user.createdAt;
export const updatedAt = state => state.user.updatedAt;
export const loading = state => state.user.loading;
export const error = state => state.user.error;
export const mode = state => state.user.mode;

export default userSlice.reducer;
