// import { setFilter } from '@/store/filters/filters-action'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router'

export default function Filters() {
  // const dispatch = useDispatch()
  return (
    <div>
      <Link
        to='all'
        // onClick={() => {
        //   dispatch(setFilter('all'))
        // }}
      >
        all
      </Link>
      <Link
        to='active'
        // onClick={() => {
        //   dispatch(setFilter('active'))
        // }}
      >
        active
      </Link>
      <Link
        to='completed'
        // onClick={() => {
        //   dispatch(setFilter('completed'))
        // }}
      >
        completed
      </Link>
    </div>
  )
}
