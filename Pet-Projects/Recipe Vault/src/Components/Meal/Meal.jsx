import { useAsyncValue, useNavigate } from 'react-router'
import styles from './Meal.module.scss'

export function Meal() {
  const meal = useAsyncValue()
  const navigate = useNavigate()

  const {
    idMeal: id,
    strMeal: title,
    strCategory,
    strArea,
    strCountry,
    strTags,
    strInstructions,
    strMealThumb: image,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
  } = meal?.meals?.[0] || {}

  function goToCategory() {
    navigate(`/Category/${strCategory}`)
  }

  return (
    <div className={styles.meal}>
      <button className={styles.button} onClick={goToCategory}>
        Go to category
      </button>
      <div className={styles.stage}>
        <img src={image} alt={title} />
        <div className={styles.stage__text}>
          <h1 className={styles.title}>{title}</h1>
          <div>
            <h2>Info: </h2>
            <p>Category: {strCategory}</p>
            <p>Country: {strCountry}</p>
            {strArea && <p>Area: {strArea}</p>}
            {strTags && <p>Tags: {strTags}</p>}
          </div>
        </div>
      </div>
      <div>
        <h2>Instruction</h2>
        <p>{strInstructions}</p>
      </div>
      <div>
        <h2>Ingredients</h2>
        <div className={styles.ingredients}>
          <p>
            <strong>Ingredients</strong>
          </p>
          <p>
            <strong>Measure</strong>
          </p>
          {strIngredient1 && (
            <>
              <p>{strIngredient1}</p>
              <p>{strMeasure1}</p>
            </>
          )}
          {strIngredient2 && (
            <>
              <p>{strIngredient2}</p>
              <p>{strMeasure2}</p>
            </>
          )}
          {strIngredient3 && (
            <>
              <p>{strIngredient3}</p>
              <p>{strMeasure3}</p>
            </>
          )}
          {strIngredient4 && (
            <>
              <p>{strIngredient4}</p>
              <p>{strMeasure4}</p>
            </>
          )}
          {strIngredient5 && (
            <>
              <p>{strIngredient5}</p>
              <p>{strMeasure5}</p>
            </>
          )}
          {strIngredient6 && (
            <>
              <p>{strIngredient6}</p>
              <p>{strMeasure6}</p>
            </>
          )}
          {strIngredient7 && (
            <>
              <p>{strIngredient7}</p>
              <p>{strMeasure7}</p>
            </>
          )}
          {strIngredient8 && (
            <>
              <p>{strIngredient8}</p>
              <p>{strMeasure8}</p>
            </>
          )}
          {strIngredient9 && (
            <>
              <p>{strIngredient9}</p>
              <p>{strMeasure9}</p>
            </>
          )}
          {strIngredient10 && (
            <>
              <p>{strIngredient10}</p>
              <p>{strMeasure10}</p>
            </>
          )}
        </div>
      </div>
      {/* <iframe title={id} src={strYoutube}></iframe> */}
    </div>
  )
}
