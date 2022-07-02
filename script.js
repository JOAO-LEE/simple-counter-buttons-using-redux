//create initial state 
const INITIAL_STATE = {
  count: 0,
};

//create reducer function & define it's behavior. 
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
      break;
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }

    default:
      return state;
  }
  
  
};

//create store 
const store = Redux.createStore(reducer);

//create actions 
const addAction = { type: 'INCREMENT' };
const removeAction = { type: 'DECREMENT' };

//create function that reads our state and updates our conter on screen
store.subscribe(() => {
  const { count } = store.getState();
  const h1Element = document.getElementById('counter');
  h1Element.innerText = count;
});

//declare buttons and add listeners that dispatch our actions through them.
const addButton = document.getElementById('inc');
const removeButton = document.getElementById('dec');

addButton.addEventListener('click', () => {
  store.dispatch(addAction);
});
removeButton.addEventListener('click', () => {
  store.dispatch(removeAction);
});
