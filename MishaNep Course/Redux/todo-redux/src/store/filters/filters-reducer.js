export function filters(state = 'all', action) {
  if (action.type === 'SET_FILTER') return action.filter
  return state
}
