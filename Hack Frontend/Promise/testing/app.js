// function fn(array) {
//   if (!array.length) console.log('error')
// }

// fn(123)

// Запрос списка; `fetch` возвращает промис
// fetch('https://www.anapioficeandfire.com/api/houses')
//   .then((response) => response.json())
//   .then((houses) => {
//     // Запрашиваем дополнительные данные
//     return fetch(houses[0].overlord)
//   })
//   .then((response) => {
//     // Выполнится, когда придёт ответ
//     return response.json()
//   })
//   .then(function (overlord) {
//     console.log(overlord.name)
//   })

async function getBookNameFromBook(id) {
  const bookResponse = await fetch(
    `https://www.anapioficeandfire.com/api/books/${id}`,
  )
  if (!bookResponse.ok)
    throw new Error('Response status is ' + bookResponse.status)
  const book = await bookResponse.json()
  const bookName = book.name
  return bookName
}

getBookNameFromBook(555)
  .then(console.log)
  .catch((error) => console.error(error.message))
