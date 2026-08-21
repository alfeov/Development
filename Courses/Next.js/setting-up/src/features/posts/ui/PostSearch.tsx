'use client'

import SearchButton from '@/shared/ui/SearchButton'
import Form from 'next/form'

export const PostSearch = () => {
  return (
    <Form action='/blog'>
      <input type='search' name='query' />
      <SearchButton />
    </Form>
  )
}
