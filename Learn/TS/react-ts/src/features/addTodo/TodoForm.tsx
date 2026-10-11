import { useState } from 'react'

interface TodoFormProps {
  addTodo: (text: string) => void
}

export function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('')
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
      <button onClick={() => addTodo(text)}>Add todo</button>
    </>
  )
}
