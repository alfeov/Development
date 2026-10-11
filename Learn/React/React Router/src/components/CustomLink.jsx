import { Link, useMatch } from 'react-router'

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to === '/',
  })
  return (
    <Link to={to} className={match ? 'active' : null} {...props}>
      {children}
    </Link>
  )
}

export { CustomLink }
