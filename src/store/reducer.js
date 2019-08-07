const defaultState = {
  inputValue: 'Write something',
  list: ["eat", "work", "sport"]
}
export default (state = defaultState, action)=>{

  // reducer 里只能接收state, 而不能改变
  state.inputValue = action.value
  console.log('STATE:', state)
  console.log('ACTION:', action)
  // if (action.type === 'addTodo') {
  //   let newState = JSON.parse(JSON.stringify(state))
  // return newState
  // }
  console.log(action.type)
  return state
}