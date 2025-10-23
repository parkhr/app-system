import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/base/CustomButton';
import CustomText from '../../components/base/CustomText';
import CustomLayout from '../../components/base/layout/CustomLayout';

export default function HomeScreen() {
  return (
    <CustomLayout>
      <View style={styles.container}>
        <View style={[styles.column, { backgroundColor: '#f28b82' }]}>
          <Text style={styles.text}>A</Text>
        </View>

        <View style={[styles.column, { backgroundColor: '#fbbc04' }]}>
          <Text style={styles.text}>B</Text>
        </View>

        <View style={[styles.column, { backgroundColor: '#34a853' }]}>
          <Text style={styles.text}>C</Text>
        </View>

        <View style={[styles.column, { backgroundColor: '#4285f4' }]}>
          <Text style={styles.text}>D</Text>
        </View>
      </View>

      <View style={styles.container}>

        {/* 첫 번째 라인 */}
        <View style={styles.line} />

        {/* 첫 번째 컴포넌트 */}
        <View style={styles.item}>
          <Text>Item 1</Text>
        </View>

        {/* 중간 라인 */}
        <View style={styles.line} />

        {/* 두 번째 컴포넌트 */}
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>

        {/* 마지막 라인 */}
        <View style={styles.line} />

        {/* 오른쪽 여백 */}
        <View style={{ width: SIDE_PADDING }} />
      </View>
      {/* 첫 번째 행 */}
      <View style={[styles.container, { flex: 1, backgroundColor: '' }]}>
        {/* 기준선에 맞춰 배치될 컴포넌트들 */}
        <View
          style={{
            // position: 'absolute',
            left: 0, // 예: 두 번째 선 기준
            // top: 50,
            // transform: [{ translateX: -50 }], // 정중앙 정렬 (옵션)
          }}
        >
          <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' />
        </View>
        <View
          style={{
            // position: 'absolute',
            left: columnWidth * 1, // 예: 두 번째 선 기준
            // top: 50,
            // transform: [{ translateX: -50 }], // 정중앙 정렬 (옵션)
          }}
        >
          <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' />
        </View>

        <View
          style={{
            // position: 'absolute',
            left: columnWidth * 2, // 예: 두 번째 선 기준
            // top: 100,
            // transform: [{ translateX: -50 }], // 정중앙 정렬 (옵션)
          }}
        >
          <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' />
        </View>

        <View
          style={{
            // position: 'absolute',
            left: columnWidth * 3, // 네 번째 선 기준
            // top: 200,
            // transform: [{ translateX: -50 }],
          }}
        >
          <CustomButton title="Hello, Detail!" onPress={() => alert('Button Pressed!')} type="danger" size='large' />
        </View>
      </View>

      {/* 왼쪽 여백 */}
      <View style={{ width: SIDE_PADDING }} />

      {/* 첫 번째 라인 */}
      <View style={styles.line} />

      {/* 첫 번째 컴포넌트 */}
      <View style={styles.item}>
        <Text>Item 1</Text>
      </View>

      {/* 중간 라인 */}
      <View style={styles.line} />

      {/* 두 번째 컴포넌트 */}
      <View style={styles.item}>
        <Text>Item 2</Text>
      </View>

      {/* 마지막 라인 */}
      <View style={styles.line} />

      {/* 오른쪽 여백 */}
      <View style={{ width: SIDE_PADDING }} />

      <View style={styles.row}>
        {/* 1번째 열 */}
        <View style={[styles.column, { backgroundColor: '#f28b82' }]}>
          <Text style={styles.text}>A</Text>
        </View>
        {/* 2번째 열 */}
        <View style={[styles.column, { backgroundColor: '#fbbc04' }]}>
          <Text style={styles.text}>B</Text>
        </View>
        {/* 3번째 열 */}
        <View style={[styles.column, { backgroundColor: '#34a853' }]}>
          <Text style={styles.text}>C</Text>
        </View>
        {/* 4번째 열 */}
        <View style={[styles.column, { backgroundColor: '#4285f4' }]}>
          <Text style={styles.text}>D</Text>
        </View>
      </View>

      {/* 두 번째 행: 아이템 하드코딩 시작 열 지정 */}
      <View style={styles.row}>
        {/* 1번째 열 비워둠 */}
        <View style={[styles.column]}>
          
        </View>
        {/* 2번째 열 */}
        <View style={[styles.column, { backgroundColor: '#fbbc04' }]}>
          <Text style={styles.text}>E (2번째 열부터)</Text>
        </View>
        {/* 3번째 열 */}
        <View style={[styles.column]}>
          
        </View>
        {/* 4번째 열 */}
        <View style={[styles.column]}>
          
        </View>
      </View>

      <View style={styles.row}>
        {/* 1번째 열 비워둠 */}
        <View style={[styles.column]}>
          
        </View>
        <View style={[styles.column]}>
          
        </View>
        <View style={[styles.column]}>
          
        </View>
        {/* 2번째 열 */}
        <View style={[styles.column, { backgroundColor: '#fbbc04' }]}>
          <Text style={styles.text}>E (2번째 열부터)</Text>
        </View>
      </View>


      
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: 16,
  },
  column: {
    flex: 1, // 균등 배치
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },

  col: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
  },
  line: {
    width: 1,
    backgroundColor: '#999',
  },
  
});
