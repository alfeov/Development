const url = 'https://jsonplaceholder.typicode.com/psts/1/comments'
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    if (response.status === 404) {
      throw new Error('Resource could not be found')
    }
    throw new Error('Response not ok)')
  })
  .then((json) => console.log(json[0]))
  .catch(console.err)
