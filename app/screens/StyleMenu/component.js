/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable import/extensions */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/first */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { View, Text, TouchableOpacity, Share, StatusBar, Image } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import styles from './styles';
// import { IMAGES } from '../../configs';
import Love from '../../../assets/svgs/Love';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import { COLOR_TRANSPARENT, COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import I18n from '../../i18n';
import { scale } from '../../utils/scaling';
import images from '../../configs/images';
import { IMAGES } from '../../configs';
// import arrays from '../../constants/arrays';

export default class Component extends React.Component {
  renderNavBar = () => (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Header containerStyle={{ backgroundColor: COLOR_TRANSPARENT }} />
      </TouchableOpacity>
      <StatusBar hidden />
    </View>
  );

  renderContent = () => (
    <View style={styles.container}>
      <View style={styles.contentDetail}>
        <View style={styles.titleDetail}>
          <Text style={styles.txtTitle}>{I18n.t('descStyle')}</Text>
        </View>
        <View style={styles.categoryDetail}>
          <Text style={styles.txtCategory}>{I18n.t('sourceSwim')}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle9')}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle1')}</Text>
        </View>
        <View style={styles.descDetail1}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle2')}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle3')}</Text>
        </View>
        <View style={styles.descDetail1}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle4')}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle5')}</Text>
        </View>
        <View style={styles.descDetail1}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle6')}</Text>
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle7')}</Text>
        </View>
        <View style={styles.descDetail2}>
          <Text style={styles.swimDesc}>{I18n.t('descStyle8')}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={scale(50)}
          headerMaxHeight={scale(250)}
          extraScrollHeight={scale(20)}
          titleStyle={styles.titleStyle}
          backgroundImage={images.Swim1}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
        />
      </View>
    );
  }
}
