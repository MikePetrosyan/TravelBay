import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  blogPosts: [],
  blogPost: null,
  loading: false,
  error: null,
  pageitems: 0,
  status: 200,
  updateButtonLoading: false,
  blogPostCreated: false,
  blogPostUpdated: false,
  blogPostRemoved: false,
};

export const blogPostSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setBlogPostByCategory: (state, { payload }) => {
      state.blogPosts = payload;
      state.loading = false;
      state.error = null;
    },
    setBlogPost: (state, { payload }) => {
      state.blogPost = payload;
      state.loading = false;
      state.error = null;
    },
    blogPostUpdated: (state, { payload }) => {
      state.blogPostUpdated = payload;
      state.loading = false;
      state.error = null;
    },
    blogPostCreated: (state, { payload }) => {
      state.blogPostCreated = payload;
      state.updateButtonLoading = false;
      state.loading = false;
      state.error = null;
    },
    blogPostRemoved: (state, { payload }) => {
      state.blogPostRemoved = payload;
      state.loading = false;
      state.error = null;
    },
    setUpdateButtonLoading: (state, { payload }) => {
      state.updateButtonLoading = payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.buttonLoading = false;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setNextPage: (state, { payload }) => {
      state.pageItems = payload;
    },
    setPreviousPage: (state, { payload }) => {
      state.pageItems = payload;
    },
  },
});

export const { setLoading, setBlogPost, setBlogPostByCategory, setError, blogPostUpdated, blogPostCreated } =
  blogPostSlice.actions;
export default blogPostSlice.reducer;

export const blogPostSelector = (state) => state.blogPosts;
