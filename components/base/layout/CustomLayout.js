
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView edges={['top']} style={[styles.safe]}>
      <CustomHeader2
        onLeftPress={() => onLeftPress()}
        onRightPress={() => onRightPress()}
      />
      <ScrollView style={[styles.content]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: Theme.Colors.safeAreaBackground,
  },
  content: {
    backgroundColor: Theme.Colors.contentBackground,
  }
});

export default CustomLayout;
