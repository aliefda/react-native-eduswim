/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  Alert,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';
import arrays from '../../constants/arrays';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      inputPassword: '',
      name: '',
      email: '',
      password: '',
      cpassword: '',
      hidden: true,
      firstname: '',
      lastname: '',
      off: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _showPass = () => {
    this.setState({ hidden: !this.state.hidden });
  };
  _gotoLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  };

  _signup = async () => {
    const { firstname, lastname, email, password } = this.state;
    const params = { firstname, lastname, email, password };
    try {
      const result = await ENDPOINT.register(params);
      this.setState({ isLoading: true });
      if (result.access_token === 200) {
        this.props.navigation.navigate('Signin');
      } else {
        ToastAndroid.show(`Failed to register, ${result.message}`, ToastAndroid.LONG);
      }
    } catch (err) {
      ToastAndroid.show(`Network Error: ${err}`, ToastAndroid.LONG);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    // const { email, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <View style={styles.containerInputView}>
          <View style={styles.row}>
            <View style={styles.inputText}>
              <Image source={IMAGES.avatar} resizeMode="contain" style={styles.inputLogo} />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                textContentType="emailAddress"
                autoCompleteType="email"
                placeholder={I18n.t('enterName')}
                editable
                autoCapitalize="none"
                onChangeText={name => this.setState({ name })}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.inputText}>
              <Image source={IMAGES.avatar} resizeMode="contain" style={styles.inputLogo} />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                textContentType="emailAddress"
                autoCompleteType="email"
                placeholder={I18n.t('enterEmail')}
                editable
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </View>
          </View>
          <View style={styles.inputText}>
            <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.hidden}
              placeholder={I18n.t('enterPass')}
              editable
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity onPress={this._showPass} style={styles.showPassLogo}>
              <Image source={IMAGES.hide} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputText}>
            <Image source={IMAGES.lock} resizeMode="contain" style={styles.inputLogo} />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.hidden}
              placeholder={I18n.t('enterPass1')}
              editable
              autoCapitalize="none"
              onChangeText={cpassword => this.setState({ cpassword })}
            />
            <TouchableOpacity onPress={this._showPass} style={styles.showPassLogo}>
              <Image source={IMAGES.hide} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.outlined}>
          <TouchableOpacity onPress={this._signUp}>
            <Text>{I18n.t('signUp3')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewalready}>
          <Text style={styles.already}>{I18n.t('alreadyHave')}</Text>
          <Text style={styles.login} onPress={this._gotoLogin}>
            {I18n.t('backLogin')}
          </Text>
        </View>
        <View style={styles.margin} />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
