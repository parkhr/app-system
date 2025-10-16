// ThemeC.js
export const Colors = {
  primary: '#FFB300',     // 활기찬 노랑
  secondary: '#FFA000',
  background: '#FFFDE7',
  surface: '#FFF9C4',
  text: '#5D4037',
  textLight: '#8D6E63',
  border: '#FFECB3',
  success: '#81C784',
  warning: '#FBC02D',
  danger: '#E53935',
  info: '#29B6F6',
};

export const Fonts = {
  h1: 34,
  h2: 26,
  h3: 20,
  body: 16,
  caption: 12,
  small: 10,
  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightBold: '700',
  lineHeightSmall: 1.3,
  lineHeightBase: 1.6,
  lineHeightLarge: 1.9,
};

export const Spacing = {
  xxs: 4,
  xs: 8,
  small: 12,
  medium: 18,
  large: 28,
  xl: 36,
  xxl: 52,
  buttonPadding: 14,
  cardPadding: 18,
  screenPadding: 22,
};

export const Radius = {
  small: 6,
  medium: 12,
  large: 20,
  round: 9999,
};

export const Shadows = {
  light: {
    shadowColor: '#FFB300',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  medium: {
    shadowColor: '#FFA000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  heavy: {
    shadowColor: '#F57C00',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 10,
  },
};

export const Animation = {
  fast: 120,
  normal: 300,
  slow: 500,
  easing: { inOut: 'ease-in-out' },
};

export const ButtonSizes = {
  small: { paddingVertical: 8, paddingHorizontal: 10, fontSize: 14, width: 110 },
  medium: { paddingVertical: 12, paddingHorizontal: 14, fontSize: 16, width: 160 },
  large: { paddingVertical: 16, paddingHorizontal: 18, fontSize: 18, width: 220 },
};

export const ThemeC = { Colors, Fonts, Spacing, Radius, Shadows, Animation, ButtonSizes };
