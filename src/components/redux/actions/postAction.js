import { FETCH_POSTS_FAILURE } from "../types";
import { FETCH_POSTS_SUCCESS } from "../types";
import { FETCH_POSTS_REQUEST } from "../types";


export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
