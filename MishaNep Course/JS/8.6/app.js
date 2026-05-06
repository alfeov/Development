// ! POST

// const obj = {
// 	userId: 1,
//   title: 'Title',
//   body: 'Body Text',
// }
// const url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(obj),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     if (response.ok) return response.json()
//     throw new Error('Error in fetch')
//   })
//   .then(console.log)
//   .catch(console.error)

// ! PUT

// const obj = {
//   title: 'Title',
//   body: 'Body Text',
// }
// const url = 'https://jsonplaceholder.typicode.com/posts/1'
// fetch(url, {
//   method: 'PUT',
//   body: JSON.stringify(obj),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     if (response.ok) return response.json()
//     throw new Error('Error in fetch')
//   })
//   .then(console.log)
//   .catch(console.error)

// ! PATCH

// const obj = {
//   title: 'Title',
// }
// const url = 'https://jsonplaceholder.typicode.com/posts/1'
// fetch(url, {
//   method: 'PATCH',
//   body: JSON.stringify(obj),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     if (response.ok) return response.json()
//     throw new Error('Error in fetch')
//   })
//   .then(console.log)
//   .catch(console.error)

// ! DELETE

const obj = {
  title: 'Title',
}
const url = 'https://jsonplaceholder.typicode.com/posts/1'
fetch(url, {
  method: 'DELETE',
})
  .then((response) => {
    if (!response.ok) throw new Error('Error in fetch')
  })
  .catch(console.error)
