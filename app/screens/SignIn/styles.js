/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_HEADLINE6_PRIMARY,
  FONT_SUBTITLE2_PRIMARY,
  FONT_BODY2_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_BUTTON_PRIMARY
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(110), height: scale(110), marginBottom: scale(50) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  forgetPass: {
    width: scale(90),
    marginLeft: scale(210),
    marginBottom: scale(80),
    marginTop: scale(10),
    color: COLOR_BASE_PRIMARY_MAIN,
    ...FONT_CAPTION_PRIMARY,
    fontSize: scale(12)
  },
  inputContainer: {
    width: scale(300),
    height: scale(40)
  },
  inputText: {
    marginBottom: scale(20),
    width: scale(300),
    height: scale(55),
    borderRadius: scale(3),
    borderColor: '#c4c4c4',
    borderWidth: scale(1)
  },
  inputText1: {
    width: scale(300),
    height: scale(55),
    borderRadius: scale(3),
    borderColor: '#c4c4c4',
    borderWidth: scale(1)
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  input: { marginLeft: scale(40), ...FONT_BODY2_PRIMARY, marginTop: scale(2), fontSize: scale(15) },
  inputLogo: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(15) },
  input1: { marginLeft: scale(40), ...FONT_BODY2_PRIMARY, marginTop: scale(2), fontSize: scale(15) },
  inputLogo1: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(15) },
  showPassLogo: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    marginLeft: METRICS.marginHide,
    top: METRICS.topHide
  },
  signContainer: {
    flexDirection: 'row',
    marginVertical: scale(10)
  },
  signTitle: {
    alignItems: 'flex-start',
    fontSize: scale(12)
  },
  signTitle2: {
    alignItems: 'flex-end',
    color: '#35A97D',
    fontSize: scale(12)
  },
  outlined: {
    backgroundColor: '#FF6290',
    borderColor: '#FF6290',
    width: scale(300),
    height: scale(55),
    borderRadius: scale(3)
  },
  outlinedText: { color: COLOR_WHITE, ...FONT_BUTTON_PRIMARY, fontSize: scale(15) },
  outlined1: {
    backgroundColor: '#35A97D',
    borderColor: '#35A97D',
    width: scale(300),
    height: scale(55),
    borderRadius: scale(3)
  },
  outlinedText1: { color: COLOR_WHITE, ...FONT_BUTTON_PRIMARY, fontSize: scale(15) }
});

export default styles;
