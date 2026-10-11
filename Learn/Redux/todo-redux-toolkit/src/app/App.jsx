import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store, persistor } from './store'
import { router } from './router'
import '@/app/styles/main.scss'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
