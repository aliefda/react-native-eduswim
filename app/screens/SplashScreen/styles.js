import { StyleSheet } from 'react-native';
// eslint-disable-next-line no-unused-vars
import { COLOR_WHITE, COLOR_DARK, COLOR_BLACK, COLOR_BLACK_OPACITY50 } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_BLACK_OPACITY50 },
  appVersion: { fontSize: 14, color: COLOR_BLACK_OPACITY50 }
});

export default styles;
