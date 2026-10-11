import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash.throttle'

const preloadedState = loadState()

const store = createStore(rootReducer, preloadedState, devToolsEnhancer())

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    })
  }, 2000),
)

export default store
