import { Link } from 'expo-router';
import CustomButton from '../../components/base/CustomButton';
import CustomText from '../../components/base/CustomText';
import CustomLayout from '../../components/base/layout/CustomLayout';

export default function HomeScreen() {

  return (
    <CustomLayout>
      <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' />
      <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="secondary" size='small' />
      <CustomButton title="뒤로가기" onPress={() => alert('Button Pressed!')} type="outline" size='small'/>
      <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="primary" />
      <CustomText size='xlarge' color='danger'>테스트</CustomText>
      <CustomText size='large' color='danger'>테스트</CustomText>
      <CustomText size='medium' color='warning'>테스트</CustomText>
      <CustomText size='medium' color='info'>테스트</CustomText>
      <CustomText size='medium' color='default'>테스트</CustomText>
      <CustomText size='medium' color='light'>테스트</CustomText>
      <CustomText size='medium' color='dark'>테스트</CustomText>
      <CustomText size='small' color='default'>테스트</CustomText>

      <Link href="/list">TEST</Link>
    </CustomLayout>
  );
}