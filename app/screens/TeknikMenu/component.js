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
import { View, Text, TouchableOpacity, Share, StatusBar, Image, ScrollView } from 'react-native';
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
import YouTube from 'react-native-youtube';
// import arrays from '../../constants/arrays';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollView>
          <YouTube
            videoId="Oamc71rEEUw" // The YouTube video ID
            apiKey="AIzaSyAR4zTyOtpJy7lL2MbK4cG_YMU09pN0L1Q"
            play // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
            controls={1}
            showFullscreenButton
          />
          <View style={styles.contentDetail}>
            <View style={styles.titleDetail}>
              <Text style={styles.txtTitle}>{I18n.t('descTeknik')}</Text>
            </View>
            <View style={styles.categoryDetail}>
              <Text style={styles.txtCategory}>{I18n.t('sourceSwim')}</Text>
            </View>
            <View style={styles.descDetail}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik1')}</Text>
            </View>
            <View style={styles.descDetail}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik2')}</Text>
            </View>
            <View style={styles.descDetail1}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik3')}</Text>
            </View>
            <View style={styles.descDetail}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik4')}</Text>
            </View>
            <View style={styles.descDetail1}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik5')}</Text>
            </View>
            <View style={styles.descDetail}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik6')}</Text>
            </View>
            <View style={styles.descDetail1}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik7')}</Text>
            </View>
            <View style={styles.descDetail}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik8')}</Text>
            </View>
            <View style={styles.descDetail2}>
              <Text style={styles.swimDesc}>{I18n.t('descTeknik9')}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
