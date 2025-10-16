// scale.js
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// 기준 화면: iPhone 14 Pro 기준
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const scale = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;
export const verticalScale = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
