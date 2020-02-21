/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
/* eslint-disable no-console */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
