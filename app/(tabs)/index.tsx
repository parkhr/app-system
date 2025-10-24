import { ThemeA as Theme } from '@/style/ThemeA';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TextInput, View } from 'react-native';
import CustomDivider from '../../components/base/CustomDivider';
import CustomImageCard from '../../components/base/CustomImageCard';
import CustomLayout from '../../components/base/layout/CustomLayout';

export default function Home() {

  return (
    <CustomLayout>
        <View>
          <View>
              <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={{ width: 50, height: 50, backgroundColor: '#eee', borderRadius: 100 }} />
                <View>
                  <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 4 }}>phrhrh__</Text>
                    <Text style={{ fontSize: 16, marginBottom: 4 }}>4시간</Text>
                  </View>
                  <TextInput placeholder='새로운 소식이 있나요?' style={{ fontSize: 16 }}/>
                </View>
              </View>
              <CustomDivider />
          </View>

          {[...Array(10)].map((_, index) => (
            <View key={index}>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={{ width: 50, height: 50, backgroundColor: '#eee', borderRadius: 100 }}
                />
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 14, marginRight: 4 }}>lord_unicorn2</Text>
                      <Text style={{ fontSize: 15 }}>4시간</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={Theme.IconSizes.small} />
                  </View>

                  <Text style={{ fontSize: 15, lineHeight: 24, marginBottom: 8 }}>
                    {'안녕하세요\n반갑습니다\n오늘도 좋은 하루!'}
                  </Text>

                  <CustomImageCard src='https://via.placeholder.com/300'/>
                  
                  <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Ionicons style={{ marginRight: 4 }} name="heart-outline" size={Theme.IconSizes.small} /><Text style={{ fontSize: 15, marginRight: 20 }}>100</Text>
                    <Ionicons style={{ marginRight: 4 }} name="chatbubble-outline" size={Theme.IconSizes.small} /><Text style={{ fontSize: 15, marginRight: 20 }}>50</Text>
                    <Ionicons style={{ marginRight: 4 }} name="repeat-outline" size={Theme.IconSizes.small} /><Text style={{ fontSize: 15, marginRight: 20 }}>10</Text>
                    <Ionicons style={{ marginRight: 4 }} name="paper-plane-outline" size={Theme.IconSizes.small} /><Text style={{ fontSize: 15 }}>1</Text>
                  </View>
                </View>
              </View>
              {index !== 9 && <CustomDivider />}
            </View>
          ))}
        </View>
    </CustomLayout>
  );
}