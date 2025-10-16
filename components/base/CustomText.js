import { StyleSheet, Text } from 'react-native';
import { ThemeA as Theme } from '../../style/ThemeA';

/**
 * children: 텍스트 내용
 * size: 텍스트 크기 (large, medium, small)
 * color: 텍스트 색상 (success, warning, danger, info, default, light, dark)
 * weight: 폰트 두께 (weightRegular, weightMedium, weightBold)
 * style: 추가 스타일링 
 */
const CustomText = ({ 
  children,
  size = 'medium',
  color = 'text',
}) => {

  const getTextStyle = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: Theme.Fonts.small,
        }
      case 'large':
        return {
          fontSize: Theme.Fonts.h2,
        }
      case 'xlarge':
        return {
          fontSize: Theme.Fonts.h1,
        }
      case 'medium':
      default:
        return {
          fontSize: Theme.Fonts.body,
        }
    }
  }

  const getColorStyle = () => {
    return {
      color: Theme.Colors[color] || Theme.Colors.text,
    }
  }

  return (
    <Text style={[styles.text, getTextStyle(), getColorStyle()]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    
  },
});

export default CustomText;
