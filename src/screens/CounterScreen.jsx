import {View, TextInput, StyleSheet} from 'react-native';
import CounterView from '../components/CounterView';
import CounterController from '../components/CounterController';
import {useSelector, useDispatch} from 'react-redux';
import {setCustomValue} from '../Redux/Action/Counter/CounterActions';

const CounterScreen = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <CounterView counter={counter.count} />
      <CounterController />
      <TextInput
        value={counter.changeValue}
        style={{borderWidth: 1, width: '80%', marginTop: 30}}
        onChangeText={text => dispatch(setCustomValue(text))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CounterScreen;
