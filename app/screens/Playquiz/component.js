/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable import/first */
import React from 'react';
import Quiz from '../../components/elements/Quiz';
import { StatusBar, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../components/elements/Header/styles';
import Header from '../../components/elements/Header';
import { COLOR_TRANSPARENT, COLOR_BASE_PRIMARY_MAIN } from '../../styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizFinish: false,
      score: 0
    };
  }
  _onPressBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  _quizFinish(score) {
    this.setState({ quizFinish: true, score });
  }
  _scoreMessage(score) {
    if (score <= 30) {
      return (
        <View style={styles.innerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={30} color="white" />
          </View>
          <Text style={styles.score}>You need to work hard</Text>
          <Text style={styles.score}>You scored {score}%</Text>
        </View>
      );
    } else if (score > 30 && score < 60) {
      return (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={30} color="white" />
            <Icon name="trophy" size={30} color="white" />
          </View>
          <Text style={styles.score}>You are good</Text>
          <Text style={styles.score}>Congrats you scored {score}% </Text>
        </View>
      );
    } else if (score >= 60) {
      return (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={30} color="white" />
            <Icon name="trophy" size={30} color="white" />
            <Icon name="trophy" size={30} color="white" />
          </View>
          <Text style={styles.score}>You are the master</Text>
          <Text style={styles.score}>Congrats you scored {score}% </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header containerStyle={{ backgroundColor: COLOR_BASE_PRIMARY_MAIN }} />
        <View style={styles.toolbar}>
          <Text style={styles.lbarTitle} />
          <Text style={styles.toolbarButton} />
        </View>

        {this.state.quizFinish ? (
          <View style={styles.container}>
            <View style={styles.circle}>{this._scoreMessage(this.state.score)}</View>
          </View>
        ) : (
          <Quiz quizFinish={score => this._quizFinish(score)} />
        )}
      </View>
    );
  }
}
