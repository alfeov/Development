const addPosts = (posts) => ({
  type: 'ADD_POSTS',
  payload: posts,
})

const setPostsFetching = {
  type: 'SET_POST_FETCHING',
}

const setPostsError = (error) => ({
  type: 'SET_POST_ERROR',
  payload: error,
})

export const loadPosts = () => (dispatch, _, api) => {
  dispatch(setPostsFetching)
  api
    .get('/posts')
    .then((data) => dispatch(addPosts(data)))
    .catch((error) => dispatch(setPostsError(error)))
}
