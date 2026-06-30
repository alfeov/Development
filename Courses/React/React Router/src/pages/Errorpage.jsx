import { useRouteError } from 'react-router'

export function Errorpage() {
  const error = useRouteError()

  return (
    <>
      <h1>{error.message}</h1>
    </>
  )
}
