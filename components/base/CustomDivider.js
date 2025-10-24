import { StyleSheet, View } from 'react-native';

const CustomDivider = () => {

  return (
    <View style={styles.divider} />
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 12,
    height: 1,
    width: '100%',
    backgroundColor: '#e0e0e0',
  },
});

export default CustomDivider;
