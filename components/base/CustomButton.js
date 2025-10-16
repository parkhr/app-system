import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeA as Theme } from '../../style/ThemeA';

/**
 * title: 버튼 텍스트
 * onPress: 버튼 클릭 시 호출되는 함수
 * type: 버튼 스타일 (primary, secondary, outline, danger)
 */

const CustomButton = ({ title, onPress, type = 'primary', size = 'medium' }) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'secondary':
        return {
          backgroundColor: Theme.Colors.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: Theme.Colors.border,
        }
      case 'danger':
        return {
          backgroundColor: Theme.Colors.danger,
        }
      default: // primary
        return {
          backgroundColor: Theme.Colors.primary,
        }
    }
  };

  const getButtonSizeStyle = () => {
    switch (size) {
      case 'small':
        return { paddingVertical: Theme.ButtonSizes.small.paddingVertical, 
                 paddingHorizontal: Theme.ButtonSizes.small.paddingHorizontal,
                 fontSize: Theme.ButtonSizes.small.fontSize,
                 width: Theme.ButtonSizes.small.width};
      case 'large':
        return { paddingVertical: Theme.ButtonSizes.large.paddingVertical, 
                 paddingHorizontal: Theme.ButtonSizes.large.paddingHorizontal,
                 fontSize: Theme.ButtonSizes.large.fontSize,
                 width: Theme.ButtonSizes.large.width};
      default: // medium
        return { paddingVertical: Theme.ButtonSizes.medium.paddingVertical, 
                 paddingHorizontal: Theme.ButtonSizes.medium.paddingHorizontal,
                 fontSize: Theme.ButtonSizes.medium.fontSize,
                 width: Theme.ButtonSizes.medium.width};
    }
  }

  const getTextStyle = () => {
    switch (type) {
      case 'secondary':
        return {
          color: Theme.Colors.text,
        }
      case 'outline':
        return {
          color: Theme.Colors.text,
        }
      case 'danger':
        return {
          color: Theme.Colors.text,
        }
      default: // primary
        return {
          color: Theme.Colors.text,
        }
    }
  }

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return { fontSize: Theme.ButtonSizes.small.fontSize };
      case 'large':
        return { fontSize: Theme.ButtonSizes.large.fontSize };
      default: // medium
        return { fontSize: Theme.ButtonSizes.medium.fontSize };
    }
  }

  return (
    <TouchableOpacity style={[styles.button, getButtonStyle(), getButtonSizeStyle()]} onPress={onPress}>
      <Text style={[styles.text, getTextStyle(), getTextSizeStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: Theme.Spacing.medium,
    borderRadius: Theme.Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: Theme.Fonts.weightRegular,
  },
});

export default CustomButton;
