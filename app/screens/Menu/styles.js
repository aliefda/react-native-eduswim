/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { COLOR_WHITE, COLOR_DARK, FONT_HEADLINE1_PRIMARY, FONT_HEADLINE2_PRIMARY, COLOR_BLACK_OPACITY50} from '../../styles';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  backContainer: {
    backgroundColor: '#5D8CEC',
    height: scale(180),
    borderBottomLeftRadius: scale(18),
    borderBottomRightRadius: scale(18)
  },
  titleContainer: {
    backgroundColor: COLOR_WHITE
  },
  title1Container: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(23),
    marginLeft: scale(24),
    marginRight: scale(24),
    color: COLOR_WHITE,
    marginTop: scale(40)
  },
  title2Container: {
    ...FONT_HEADLINE1_PRIMARY,
    fontSize: scale(15),
    marginLeft: scale(24),
    marginRight: scale(24),
    color: COLOR_WHITE,
    marginBottom: scale(20) 
  },
  card: {
    height: scale(45),
    marginTop: scale(5),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#34CA80',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  cardContainer: {
    flexDirection: 'row'
  },
  wordContainer: {
    flexDirection: 'row',
    alignSelf: "flex-start",
    marginLeft: scale(15),
    width: scale(190)
  },
  wordContainer1: {
    alignSelf: 'flex-end'
  },
  wordTitle: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(10),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle1: {
    ...FONT_HEADLINE1_PRIMARY,
    fontSize: scale(12),
    marginVertical: scale(14),
    paddingRight: scale(25)
  },
  card1: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#D04AFE',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer2: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle2: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle3: {
    marginLeft: scale(15)
  },
  card2: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#4AACFF',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer5: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle4: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle5: {
    marginLeft: scale(15)
  },
  card3: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#FF974A',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer7: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle6: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle7: {
    marginLeft: scale(15)
  },
  card4: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#FF6290',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer9: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle8: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle9: {
    marginLeft: scale(15)
  }, 
  card5: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#35A97D',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer11: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle10: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle11: {
    marginLeft: scale(15)
  },
  card6: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#D04AFE',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer13: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle12: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle13: {
    marginLeft: scale(15)
  },
  card7: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#4AACFF',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer15: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle14: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle15: {
    marginLeft: scale(15)
  },
  card8: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#FF974A',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer17: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle16: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle17: {
    marginLeft: scale(15)
  },
  card9: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#FF6290',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer19: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle18: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle19: {
    marginLeft: scale(15)
  },
  card10: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    borderColor: '#35A97D',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer21: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle20: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle21: {
    marginLeft: scale(15)
  },
  card11: {
    height: scale(105),
    marginTop: scale(10),
    marginRight: scale(24),
    marginLeft: scale(24),
    marginBottom: scale(24),
    borderColor: '#D04AFE',
    borderLeftWidth: scale(5),
    borderTopWidth: scale(0),
    borderRightWidth: scale(0),
    borderBottomWidth: scale(0),
    borderRadius: scale(3),
    backgroundColor: COLOR_WHITE
  },
  wordContainer23: {
    marginLeft: scale(15),
    width: scale(190)
  },
  wordTitle22: {
    ...FONT_HEADLINE2_PRIMARY,
    fontSize: scale(18),
    marginVertical: scale(13),
    color: COLOR_BLACK_OPACITY50
  },
  wordTitle23: {
    marginLeft: scale(15)
  }
});

export default styles;
