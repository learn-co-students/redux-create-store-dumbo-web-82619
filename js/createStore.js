const container = document.querySelector('#container')
const button = document.querySelector('#button')
let store = createStore(reducer)

function createStore(reducer) {
  let state

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  return {dispatch, getState}
}

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}

    default:
      return state
  }
}

function render() {
  container.innerText = store.getState().count
}

button.addEventListener('click', () => {
    store.dispatch({type: 'INCREASE_COUNT'})
})

store.dispatch({type: '@@INIT'})

