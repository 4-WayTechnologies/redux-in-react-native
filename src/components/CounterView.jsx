import {View, Text} from 'react-native';
import React from 'react';

const CounterView = ({counter}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{counter}</Text>
    </View>
  );
};

export default CounterView;
