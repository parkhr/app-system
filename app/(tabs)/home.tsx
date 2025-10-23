import { StyleSheet } from 'react-native';
import CustomButton from '../../components/base/CustomButton';
import CustomLayout from '../../components/base/layout/CustomLayout';

export default function HomeScreen() {

  return (
    <CustomLayout>
      <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' />
        {/* 쓰레드 리스트 */}
        
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  
});
