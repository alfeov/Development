export const addPosts = (posts) => ({
  type: 'ADD_POSTS',
  payload: posts,
})

const url = 'https://jsonplaceholder.typicode.com/posts'

export const loadPosts = () => (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch(addPosts(data)))
}
