import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {incDec} from '../Redux/Action/Counter/CounterActions';

const CounterController = () => {
  const dispatch = useDispatch();
  const IncVal = () => {
    dispatch(incDec('increment'));
  };
  const DecVal = () => {
    dispatch(incDec('decrement'));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '70%',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10}}
        onPress={() => DecVal()}>
        <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10}}
        onPress={() => IncVal()}>
        <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterController;
