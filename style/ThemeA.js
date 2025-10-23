import { fontScale, moderateScale, scale, verticalScale } from './scale';

export const Colors = {
  primary: '#4CAF50',
  secondary: '#FFC107',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#212121',
  textLight: '#757575',
  border: '#E0E0E0',
  success: '#66BB6A',
  warning: '#FFB300',
  danger: '#E53935',
  info: '#29B6F6',
  headerBackground: '#E53935',
  headerBackIcon: '#FFFFFF',
  safeAreaBackground: '#212121',
  statusBarStyle: 'light-content',
  contentBackground: '#FFFFFF',
};

export const FontColors = {
  success: '#66BB6A',
  warning: '#FFB300',
  danger: '#E53935',
  info: '#29B6F6',
  default: '#212121',
  light: '#757575',
  dark: '#000000',
}

export const Fonts = {
  h1: moderateScale(32),
  h2: moderateScale(24),
  h3: moderateScale(20),
  body: moderateScale(16),
  caption: moderateScale(12),
  small: moderateScale(10),

  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightBold: '700',

  lineHeightSmall: 1.2,
  lineHeightBase: 1.5,
  lineHeightLarge: 1.8,
};

export const Spacing = {
  xxs: scale(4),
  xs: scale(8),
  small: scale(12),
  medium: scale(16),
  large: scale(24),
  xl: scale(32),
  xxl: scale(48),

  buttonPadding: verticalScale(12),
  cardPadding: verticalScale(16),
  screenPadding: verticalScale(20),
};

export const Radius = {
  none: 0,
  small: scale(4),
  medium: scale(8),
  large: scale(16),
  round: 9999,
};

export const Shadows = {
  none: {},
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  heavy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
};

export const Animation = {
  fast: 150,
  normal: 300,
  slow: 600,
  easing: {
    inOut: 'ease-in-out',
  },
};

export const ButtonSizes = {
  small: {
    paddingVertical: verticalScale(9),
    paddingHorizontal: scale(9),
    fontSize: fontScale(13),
    width: scale(100)
  },
  medium: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(12),
    fontSize: fontScale(16),
    width: scale(150)
  },
  large: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(16),
    fontSize: fontScale(18),
    width: scale(200)
  },
};

export const InputSizes = {
  small: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(6),
    fontSize: fontScale(13),
    width: scale(100)
  },
  medium: {
    paddingVertical: verticalScale(9),
    paddingHorizontal: scale(9),
    fontSize: fontScale(16),
    width: scale(150)
  },
  large: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(12),
    fontSize: fontScale(18),
    width: scale(200)
  },
};

export const IconSizes = {
  small: moderateScale(16),
  medium: moderateScale(24),
  large: moderateScale(32),
}

export const ThemeA = {
  Colors,
  Fonts,
  Spacing,
  Radius,
  Shadows,
  Animation,
  ButtonSizes,
  InputSizes,
  IconSizes
};
