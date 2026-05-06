async function getData() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data[0])
    throw new Error('error in get data fn')
  } catch (error) {
    console.error(error.message)
  }
}
getData()
