import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'
import { withExtraArgument } from 'redux-thunk'
import { api } from '@/api/api'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(withExtraArgument(api))),
)

export default store
