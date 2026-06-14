import { Card } from '@/Components/Card/Card'
import { Cards } from '@/Components/Cards/Cards'

import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'

export function Home() {
  const { categories } = useLoaderData()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Await resolve={categories}>
        {(resolvedCategories) => (
          <Cards>
            {resolvedCategories.categories.map((category) => (
              <Card
                key={category.idCategory}
                id={category.idCategory}
                title={category.strCategory}
                image={category.strCategoryThumb}
                desc={category.strCategoryDescription}
                buttonText='category'
              />
            ))}
          </Cards>
        )}
      </Await>
    </Suspense>
  )
}
