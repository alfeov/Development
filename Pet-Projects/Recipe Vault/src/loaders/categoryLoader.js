async function getCategory(categoryName) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
    )
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Category ${categoryName} not found (404)`)
      } else {
        throw new Error('HTTP: ' + res.status)
      }
    }
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Something went wrong: ' + error.message, {
      cause: error,
    })
  }
}

export function categoryLoader({ params }) {
  return { category: getCategory(params.category) }
}
