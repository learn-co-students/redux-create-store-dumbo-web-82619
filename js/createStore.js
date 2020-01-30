function createStore(reducer) {
  let state; //declaring state as a variable so that we may pass it as an argument
             //with a default value(so that we can render it at 0 on '@@INIT')

  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state
  }

  return {
    dispatch,
    getState
  }  //gives us access to these functions as methods on createStore 
     //(which we assign to the 'store' variabe below)
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer)

store.dispatch({type: '@@INIT'}); //call dispatch right away in order to render default state

let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
