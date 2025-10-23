import { ThemeA as Theme } from '@/style/ThemeA';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import CustomLayout from '../../components/base/layout/CustomLayout';

export default function Home() {

  return (
    <CustomLayout>
      {/* <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' /> */}
        {/* 쓰레드 리스트 */}

        {/* 10개 반복 */}
        <View>
          <View>
              <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={{ width: 62, height: 62, backgroundColor: '#eee', borderRadius: 100 }} />
                <View>
                  <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 4 }}>phrhrh__</Text>
                    <Text style={{ fontSize: 16, marginBottom: 4 }}>4시간</Text>
                  </View>
                  <Text style={{ fontSize: 16 }}>새로운 소식이 있나요?</Text>
                </View>
              </View>
              <View style={styles.divider} />
          </View>

          {[...Array(10)].map((_, index) => (
            <View key={index}>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={{ width: 62, height: 62, backgroundColor: '#eee', borderRadius: 100 }}
                />
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 4 }}>lord_unicorn2</Text>
                      <Text style={{ fontSize: 16 }}>4시간</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={Theme.IconSizes.small} />
                  </View>

                  <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 8 }}>
                    {'안녕하세요\n반갑습니다\n오늘도 좋은 하루!'}
                  </Text>

                  <Image
                    source={{ uri: 'https://via.placeholder.com/300' }}
                    style={{ width: 300, height: 200, backgroundColor: '#eee', borderRadius: 8 }}
                  />
                  
                  <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Ionicons style={{ marginRight: 4 }} name="heart-outline" size={Theme.IconSizes.small} /><Text style={{ marginRight: 20 }}>100</Text>
                    <Ionicons style={{ marginRight: 4 }} name="chatbubble-outline" size={Theme.IconSizes.small} /><Text style={{ marginRight: 20 }}>50</Text>
                    <Ionicons style={{ marginRight: 4 }} name="repeat-outline" size={Theme.IconSizes.small} /><Text style={{ marginRight: 20 }}>10</Text>
                    <Ionicons style={{ marginRight: 4 }} name="paper-plane-outline" size={Theme.IconSizes.small} /><Text>1</Text>
                  </View>
                </View>
              </View>
              {index !== 9 && <View style={styles.divider} />}
            </View>
          ))}

        </View>
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 12,
    height: 1,
    width: '100%',
    backgroundColor: '#e0e0e0',
  },
});
