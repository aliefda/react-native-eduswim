/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import { Card } from 'native-base';
import IMAGES from '../../configs/images';
import Header from '../../components/elements/Header';
import I18n from '../../i18n';
import styles from './styles';
import PropTypes from 'prop-types';
import Svg from 'react-native-svg';
import { ENDPOINT } from '../../configs';
import TabBarIcon from '../../components/elements/TabBarIcon';

export default class Component extends React.Component {
  _onPress1 = () => {
    this.props.navigation.navigate('DefinitionMenu');
  };

  _onPress2 = () => {
    this.props.navigation.navigate('HistoryMenu');
  };

  _onPress3 = () => {
    this.props.navigation.navigate('BenefitMenu');
  };

  _onPress4 = () => {
    this.props.navigation.navigate('PrincipleMenu');
  };

  _onPress5 = () => {
    this.props.navigation.navigate('InfrastructureMenu');
  };

  _onPress6 = () => {
    this.props.navigation.navigate('TipsMenu');
  };

  _onPress7 = () => {
    this.props.navigation.navigate('CompetitionMenu');
  };

  _onPress8 = () => {
    this.props.navigation.navigate('StyleMenu');
  };

  _onPress9 = () => {
    this.props.navigation.navigate('TeknikMenu');
  };

  _onPress10 = () => {
    this.props.navigation.navigate('RiskMenu');
  };

  _onPress11 = () => {
    this.props.navigation.navigate('Playquiz');
  };

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.titleContainer}>
            <View style={styles.backContainer}>
              <Text style={styles.title1Container}>{I18n.t('descSwim')}</Text>
              <Text style={styles.title2Container}>{I18n.t('descSwims')}</Text>
              <TouchableOpacity style={styles.button} onPress={this._onPress11}>
                <View style={styles.container}>
                  <Card style={styles.card}>
                    <View style={styles.cardContainer}>
                      <View style={styles.wordContainer}>
                        <Text style={styles.wordTitle}>{I18n.t('quizTime')}</Text>
                      </View>
                      <View style={styles.wordContainer1}>
                        <Text style={styles.wordTitle1}>{I18n.t('quizTime1')}</Text>
                      </View>
                    </View>
                  </Card>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this._onPress1}>
              <View style={styles.container1}>
                <Card style={styles.card1}>
                  <View style={styles.cardContainer1}>
                    <View style={styles.wordContainer2}>
                      <Text style={styles.wordTitle2}>{I18n.t('titleDesc')}</Text>
                    </View>
                    <View style={styles.wordContainer3}>
                      <Text style={styles.wordTitle3}>{I18n.t('descTitle')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress2}>
              <View style={styles.container1}>
                <Card style={styles.card2}>
                  <View style={styles.cardContainer4}>
                    <View style={styles.wordContainer5}>
                      <Text style={styles.wordTitle4}>{I18n.t('titleDesc1')}</Text>
                    </View>
                    <View style={styles.wordContainer6}>
                      <Text style={styles.wordTitle5}>{I18n.t('descTitle1')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress3}>
              <View style={styles.container1}>
                <Card style={styles.card3}>
                  <View style={styles.cardContainer5}>
                    <View style={styles.wordContainer7}>
                      <Text style={styles.wordTitle6}>{I18n.t('titleDesc2')}</Text>
                    </View>
                    <View style={styles.wordContainer8}>
                      <Text style={styles.wordTitle7}>{I18n.t('descTitle2')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress4}>
              <View style={styles.container1}>
                <Card style={styles.card4}>
                  <View style={styles.cardContainer6}>
                    <View style={styles.wordContainer9}>
                      <Text style={styles.wordTitle8}>{I18n.t('titleDesc3')}</Text>
                    </View>
                    <View style={styles.wordContainer10}>
                      <Text style={styles.wordTitle9}>{I18n.t('descTitle3')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress5}>
              <View style={styles.container1}>
                <Card style={styles.card5}>
                  <View style={styles.cardContainer7}>
                    <View style={styles.wordContainer11}>
                      <Text style={styles.wordTitle10}>{I18n.t('titleDesc4')}</Text>
                    </View>
                    <View style={styles.wordContainer12}>
                      <Text style={styles.wordTitle11}>{I18n.t('descTitle4')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress6}>
              <View style={styles.container1}>
                <Card style={styles.card6}>
                  <View style={styles.cardContainer8}>
                    <View style={styles.wordContainer13}>
                      <Text style={styles.wordTitle12}>{I18n.t('titleDesc5')}</Text>
                    </View>
                    <View style={styles.wordContainer14}>
                      <Text style={styles.wordTitle13}>{I18n.t('descTitle5')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress7}>
              <View style={styles.container1}>
                <Card style={styles.card7}>
                  <View style={styles.cardContainer9}>
                    <View style={styles.wordContainer15}>
                      <Text style={styles.wordTitle14}>{I18n.t('titleDesc6')}</Text>
                    </View>
                    <View style={styles.wordContainer16}>
                      <Text style={styles.wordTitle15}>{I18n.t('descTitle6')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress8}>
              <View style={styles.container1}>
                <Card style={styles.card8}>
                  <View style={styles.cardContainer10}>
                    <View style={styles.wordContainer17}>
                      <Text style={styles.wordTitle16}>{I18n.t('titleDesc7')}</Text>
                    </View>
                    <View style={styles.wordContainer18}>
                      <Text style={styles.wordTitle17}>{I18n.t('descTitle7')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress9}>
              <View style={styles.container1}>
                <Card style={styles.card9}>
                  <View style={styles.cardContainer11}>
                    <View style={styles.wordContainer19}>
                      <Text style={styles.wordTitle18}>{I18n.t('titleDesc8')}</Text>
                    </View>
                    <View style={styles.wordContainer20}>
                      <Text style={styles.wordTitle19}>{I18n.t('descTitle8')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPress10}>
              <View style={styles.container1}>
                <Card style={styles.card10}>
                  <View style={styles.cardContainer12}>
                    <View style={styles.wordContainer21}>
                      <Text style={styles.wordTitle20}>{I18n.t('titleDesc9')}</Text>
                    </View>
                    <View style={styles.wordContainer22}>
                      <Text style={styles.wordTitle21}>{I18n.t('descTitle9')}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
