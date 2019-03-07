import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch (action.type) {
    case 'HANDLE_FETCHING_POSTS':
      return action.payload.posts;
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'HANDLE_FETCHING_USER':
      return [...state, action.payload.user];
    default:
      return state;
  }
};

const reducers = combineReducers({ posts, users });
export default reducers;