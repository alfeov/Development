import { setFilter } from '@/store/filters/filters-action'
import { useDispatch } from 'react-redux'

export function Filters() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setFilter('all'))
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          dispatch(setFilter('active'))
        }}
      >
        active
      </button>
      <button
        onClick={() => {
          dispatch(setFilter('completed'))
        }}
      >
        completed
      </button>
    </div>
  )
}
