/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  oval: {
    width: scale(300),
    height: scale(200),
    borderRadius: 20,
    backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default styles;
