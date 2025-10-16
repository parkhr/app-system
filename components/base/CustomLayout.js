
/**
 * title: 버튼 텍스트
 * onPress: 버튼 클릭 시 호출되는 함수
 * type: 버튼 스타일 (primary, secondary, outline, danger)
 */

import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeA as Theme } from '../../style/ThemeA';
import CustomHeader from "./CustomHeader";

const CustomLayout = ({
  children,
}) => {
  return (
    <SafeAreaView edges={['top']} style={[styles.safe]}>
      <CustomHeader
        onBack={() => alert('Back pressed')}
        onRightPress={() => alert('Settings clicked')}
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
