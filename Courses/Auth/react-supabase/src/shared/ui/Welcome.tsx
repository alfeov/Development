import { Link } from 'react-router'
import { supabase } from '../lib/utils/supabase'

export function Welcome() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <p>You are logged in</p>
      <button onClick={handleLogout}>Sign Out</button>
      <br />
      <Link to={'/todos'}>View todos</Link>
    </div>
  )
}
