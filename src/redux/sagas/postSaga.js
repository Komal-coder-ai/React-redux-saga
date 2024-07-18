import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../types';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}

function* postSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default postSaga;
