async function getPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const response = await fetch(url)
  const data = await response.json()

  return data
}
async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  const data = await response.json()

  return data
}
async function getComments() {
  const url = 'https://jsonplaceholder.typicode.com/comments'
  const response = await fetch(url)
  const data = await response.json()
  throw new Error('Error in getComments data')
  return data
}

// Promise.all([getPosts(), getUsers(), getComments()])
//   .then((data) => {
//     const [posts, users, comments] = data
//     console.log(posts[0], users[0], comments[0])
//   })
//   .catch((error) => console.error(error.message))

Promise.race([getPosts(), getUsers(), getComments()])
  .then((data) => {
    console.log(data[0])
  })
  .catch((error) => console.error(error.message))
