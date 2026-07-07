import { setFilter } from '@/features/Filters/filtersSlice'
import { useDispatch } from 'react-redux'

export default function Filters() {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        to='all'
        onClick={() => {
          dispatch(setFilter('all'))
        }}
      >
        all
      </button>
      <button
        to='active'
        onClick={() => {
          dispatch(setFilter('active'))
        }}
      >
        active
      </button>
      <button
        to='completed'
        onClick={() => {
          dispatch(setFilter('completed'))
        }}
      >
        completed
      </button>
    </div>
  )
}
