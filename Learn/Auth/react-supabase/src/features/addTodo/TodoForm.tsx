import { supabase } from '@/shared/lib/utils/supabase'
import { useRef } from 'react'

export function TodoForm({ invalidate }: { invalidate: () => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()

    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim()
      if (inputValue) {
        const { error } = await supabase.from('todos').insert({
          title: inputValue,
        })
        if (error) {
          console.error(error)
        } else {
          invalidate()
        }
      } else {
        console.error('Input must have value')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button>Create Todo</button>
    </form>
  )
}
