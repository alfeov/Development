import { useState } from 'react'

import { createTodo } from '@/entities/todo/model/createTodo'
import { useAppDispatch } from '@/shared/store'

export function TodoForm() {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  return (
    <>
      <input
        type='text'
        placeholder='new todo'
        value={text}
        onChange={handleChange}
      />
      <button onClick={() => dispatch(createTodo(text))}>Add todo</button>
    </>
  )
}
