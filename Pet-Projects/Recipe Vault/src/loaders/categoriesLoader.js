async function getCategories() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    )
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Page not found (404)')
      } else {
        throw new Error('HTTP: ' + res.status)
      }
    }
    const categories = await res.json()
    return categories
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Check Ethernet connection: ' + error.message, {
        cause: error,
      })
    }
    throw error
  }
}

export function categoriesLoader() {
  return { categories: getCategories() }
}
