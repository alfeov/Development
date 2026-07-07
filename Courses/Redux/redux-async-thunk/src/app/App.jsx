import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store } from './store'
import { router } from './router'
import '@/app/styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
