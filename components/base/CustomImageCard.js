import { Image, StyleSheet } from 'react-native';

const CustomImageCard = ({src}) => {

  return (
    <Image
      source={{ uri: src }}
      style={ styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: { width: 300, height: 200, backgroundColor: '#eee', borderRadius: 8 }
});

export default CustomImageCard;
