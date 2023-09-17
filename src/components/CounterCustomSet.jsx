import {View, Text, TextInput} from 'react-native';
import {useState} from 'react';

const CounterCustomSet = ({setCustomValueParent}) => {
  const [customValue, setCustomValue] = useState('1');
  const applyChangesInState = text => {
    setCustomValue(text);
    setCustomValueParent(text);
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        value={customValue}
        keyboardType='numeric'
        style={{borderWidth: 1, width: '80%'}}
        onChangeText={text => {
          applyChangesInState(text);
        }}
      />
    </View>
  );
};

export default CounterCustomSet;
