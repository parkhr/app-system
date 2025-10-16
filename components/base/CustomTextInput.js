import { StyleSheet, TextInput } from 'react-native';
import { ThemeA as Theme } from '../../style/ThemeA';

const CustomTextInput = ({size = 'medium', placeholder = '입력해주세요.'}) => {

  const getInputSizeStyle = () => {
    switch (size) {
      case 'small':
        return { paddingVertical: Theme.InputSizes.small.paddingVertical, 
                 paddingHorizontal: Theme.InputSizes.small.paddingHorizontal,
                 fontSize: Theme.InputSizes.small.fontSize,
                 width: Theme.InputSizes.small.width};
      case 'large':
        return { paddingVertical: Theme.InputSizes.large.paddingVertical, 
                 paddingHorizontal: Theme.InputSizes.large.paddingHorizontal,
                 fontSize: Theme.InputSizes.large.fontSize,
                 width: Theme.InputSizes.large.width};
      default: // medium
        return { paddingVertical: Theme.InputSizes.medium.paddingVertical, 
                 paddingHorizontal: Theme.InputSizes.medium.paddingHorizontal,
                 fontSize: Theme.InputSizes.medium.fontSize,
                 width: Theme.InputSizes.medium.width};
    }
  }

  return (
    <TextInput
      style={[styles.input, getInputSizeStyle()]}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Theme.Colors.border,
  },
});

export default CustomTextInput;
