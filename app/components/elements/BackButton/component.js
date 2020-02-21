/* eslint-disable no-unused-vars */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Back from '../../../../assets/svgs/Back';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { active } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <Back active={active} />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  active: PropTypes.bool
};

Component.defaultProps = {
  active: false
};

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
