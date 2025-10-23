import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemeA as Theme } from '../../../style/ThemeA';

const CustomHeader = ({ onBack, onRightPress }) => {

  const getHeaderStyle = () => {
    return {
      backgroundColor: Theme.Colors.headerBackground,
      borderBottomWidth: 1,
      borderBottomColor: Theme.Colors.border,
      paddingHorizontal: 16,
      paddingVertical: 12,
    }
  }

  return (
    <View style={[styles.header, getHeaderStyle()]}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={Theme.IconSizes.medium} color={Theme.Colors.headerBackIcon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onRightPress}>
        <Ionicons name="settings-outline" size={Theme.IconSizes.medium} color={Theme.Colors.headerBackIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomHeader;
