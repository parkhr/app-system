// scale.js
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// 기준 화면: iPhone 14 Pro
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

// 최대 스케일 제한 (태블릿 대응)
const MAX_SCALE = 1.3;

const widthScale = SCREEN_WIDTH / BASE_WIDTH;
const heightScale = SCREEN_HEIGHT / BASE_HEIGHT;

export const scale = (size) => {
  const scaledSize = widthScale * size;
  return Math.min(scaledSize, size * MAX_SCALE);
};

export const verticalScale = (size) => {
  const scaledSize = heightScale * size;
  return Math.min(scaledSize, size * MAX_SCALE);
};

export const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

// 폰트 스케일링 (접근성 고려)
export const fontScale = (size) => {
  return size * PixelRatio.getFontScale();
};