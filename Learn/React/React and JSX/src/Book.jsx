const Book = ({ name, year, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{year}</p>
      <p>{price}</p>
    </div>
  )
}

export default Book
