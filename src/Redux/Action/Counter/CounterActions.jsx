const incDec = text => {
  switch (text) {
    case 'increment':
      return {
        type: 'increment',
      };
    case 'decrement':
      return {
        type: 'decrement',
      };
  }
};
const setCustomValue = text => {
  return {type: 'changeValue', payload: text};
};

export {setCustomValue, incDec};
