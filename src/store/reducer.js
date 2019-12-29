// Reducer   基于原有state根据action得到新的state
const defaultState = { 
  count: 0
};
export default (state = defaultState, action) => {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}