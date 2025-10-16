// ThemeB.js
export const Colors = {
  primary: '#1E88E5',      // 진한 파랑 (메인)
  secondary: '#90CAF9',    // 밝은 파랑 (서브)
  background: '#121212',   // 다크 배경
  surface: '#1F1F1F',      // 카드, 버튼 배경
  text: '#E0E0E0',         // 기본 텍스트
  textLight: '#9E9E9E',    // 서브 텍스트
  border: '#2C2C2C',
  success: '#43A047',
  warning: '#FB8C00',
  danger: '#E53935',
  info: '#29B6F6',
};

export const Fonts = {
  h1: 32,
  h2: 24,
  h3: 20,
  body: 16,
  caption: 13,
  small: 11,
  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightBold: '700',
  lineHeightSmall: 1.2,
  lineHeightBase: 1.5,
  lineHeightLarge: 1.8,
};

export const Spacing = {
  xxs: 4,
  xs: 8,
  small: 12,
  medium: 16,
  large: 24,
  xl: 32,
  xxl: 48,
  buttonPadding: 12,
  cardPadding: 16,
  screenPadding: 20,
};

export const Radius = {
  small: 4,
  medium: 8,
  large: 12,
  round: 9999,
};

export const Shadows = {
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  heavy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 9,
  },
};

export const Animation = {
  fast: 120,
  normal: 250,
  slow: 500,
  easing: { inOut: 'ease-in-out' },
};

export const ButtonSizes = {
  small: { paddingVertical: 9, paddingHorizontal: 10, fontSize: 13, width: 100 },
  medium: { paddingVertical: 12, paddingHorizontal: 14, fontSize: 16, width: 150 },
  large: { paddingVertical: 16, paddingHorizontal: 18, fontSize: 18, width: 200 },
};

export const ThemeB = { Colors, Fonts, Spacing, Radius, Shadows, Animation, ButtonSizes };
