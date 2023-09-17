const initialState = {
  count: 0,
  changeValue: '1',
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + parseInt(state.changeValue),
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - parseInt(state.changeValue),
      };
    case 'changeValue':
      return {
        ...state,
        changeValue: action.payload,
      };
    default:
      return state;
  }
};

export default CounterReducer;
