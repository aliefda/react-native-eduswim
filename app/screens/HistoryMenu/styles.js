/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_TRANSPARENT,
  FONT_OVERLINE_PRIMARY,
  FONT_HEADLINE6_PRIMARY,
  FONT_BODY2_PRIMARY,
  COLOR_GREY_LIGHT,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_HEADLINE2_PRIMARY,
  FONT_HEADLINE1_PRIMARY,
  FONT_HEADLINE2_SECONDARY
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_GREY_LIGHT
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: scale(200)
  },
  statusBar: {
    height: scale(100),
    backgroundColor: COLOR_TRANSPARENT
  },
  navBar: {
    height: scale(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_TRANSPARENT
  },
  titleStyle: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    ...FONT_HEADLINE6_PRIMARY
  },
  contentDetail: {
    backgroundColor: COLOR_WHITE
  },
  titleDetail: {
    marginTop: scale(18),
    marginLeft: scale(15)
  },
  txtTitle: {
    fontWeight: 'bold',
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(23)
  },
  categoryDetail: {
    marginHorizontal: scale(16)
  },
  txtCategory: {
    ...FONT_OVERLINE_PRIMARY,
    fontSize: scale(10)
  },
  descDetail: {
    marginHorizontal: scale(16),
    marginTop: scale(23)
  },
  descDetail1: {
    marginHorizontal: scale(16)
  },
  descDetail2: {
    marginHorizontal: scale(16),
    marginBottom: scale(20)
  },
  descTitle: {
    marginHorizontal: scale(16),
    marginTop: scale(10)
  },
  descText: {
    marginHorizontal: scale(16),
    marginTop: scale(5)
  },
  descText1: {
    marginHorizontal: scale(16),
    marginTop: scale(5),
    marginBottom: scale(15)
  },
  swimDesc: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(15)
  },
  titleDesc: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(15)
  },
  txtDesc: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(13)
  },
  logoContainer: {
    marginVertical: scale(-60)
  },
  logo: {
    width: scale(300)
  },
  logo1: {
    width: scale(300)
  }
});

export default styles;
