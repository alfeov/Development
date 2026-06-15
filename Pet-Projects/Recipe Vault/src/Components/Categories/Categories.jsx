import { useState } from 'react'
import { useAsyncValue, useNavigate } from 'react-router'

import { Card } from '@/Components/Card/Card'
import { Cards } from '@/Components/Cards/Cards'
import { SearchBar } from '@/Components/SearchBar/SearchBar'

import styles from './Categories.module.scss'
import { EmptyMessage } from '../EmptyMessage/EmptyMessage'

export function Categories() {
  const { categories = [] } = useAsyncValue()
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  function handleSearchChange(value) {
    const formattedValue = value.trim()
    setSearchValue(formattedValue)
  }

  function goToCategory({ title }) {
    navigate(`Category/${title}`)
  }

  const searchedCategories = categories.filter(({ strCategory: title }) =>
    title.includes(searchValue),
  )

  return (
    <div className={styles.categories}>
      <SearchBar value={searchValue} onChange={handleSearchChange} />
      {searchedCategories.length === 0 && categories.length && (
        <EmptyMessage message='No results for your search' />
      )}
      <Cards>
        {searchedCategories.map((category) => {
          const {
            idCategory: id,
            strCategory: title,
            strCategoryThumb: image,
            strCategoryDescription: desc,
          } = category

          return (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              desc={desc}
              buttonText='category'
              onClick={goToCategory}
            />
          )
        })}
      </Cards>
    </div>
  )
}
