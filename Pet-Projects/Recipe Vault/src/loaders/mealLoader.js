async function getMeal(mealId) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    )
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Meal with id ${mealId} not found`)
      } else {
        throw new Error(`HTTP: ${res.status}`)
      }
    }
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Something went wrong' + error.message, {
      cause: error,
    })
  }
}

export function mealLoader({ params }) {
  return { meal: getMeal(params.mealId) }
}
