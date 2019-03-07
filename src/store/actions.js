import jsonPlaceholder from '../api/jsonPlaceholder';
import { 
  map as _map,
  uniq as _uniq,
} from 'lodash';

const fetchPosts = () => async (dispatch) => {
  const postsResponse = await jsonPlaceholder.get('/posts');
  const { data: posts } = postsResponse;
  dispatch({
    type: 'HANDLE_FETCHING_POSTS',
    payload: { posts },
  });
};

const fetchUser = (id) => async (dispatch) => {
  const userResponse = await jsonPlaceholder.get(`/users/${id}`);
  const { data: user } = userResponse;
  dispatch({
    type: 'HANDLE_FETCHING_USER',
    payload: { user },
  });
};

export const handleFetchingPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const allUserIds = _map(getState().posts, 'userId');
  const allUniqueUserIds = _uniq(allUserIds);
  allUniqueUserIds.forEach(id => dispatch(fetchUser(id)));
};
