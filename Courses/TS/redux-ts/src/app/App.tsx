import { Provider } from 'react-redux'

import { Todo } from '@/widgets/Todo'

import { store } from './providers/store'

import './styles/base/index.css'

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App
