import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';

import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    StatusBar.setHidden(true);

    if (data !== null) {
      this.props.navigation.navigate('SignIn');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2200)
    );
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
        <Text style={styles.appVersion}>{I18n.t('appVersion')}</Text>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
