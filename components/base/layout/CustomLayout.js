import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeA as Theme } from '../../../style/ThemeA';
import CustomHeader2 from "../header/CustomHeader2";

const CustomLayout = ({
  children,
}) => {

  const onLeftPress = () => {
    alert('left pressed')
  }

  const onRightPress = () => {
    alert('right pressed')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={[styles.safe]}>
        <CustomHeader2
          onLeftPress={() => onLeftPress()}
          onRightPress={() => onRightPress()}
        />
        <ScrollView style={[styles.content]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: Theme.Colors.safeAreaBackground,
    flex: 1
  },
  content: {
    backgroundColor: Theme.Colors.contentBackground,
    paddingLeft: Theme.Spacing.medium,
    paddingRight: Theme.Spacing.medium,
  }
});

export default CustomLayout;
