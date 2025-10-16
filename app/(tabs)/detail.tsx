import { useState } from 'react';
import { Alert, Modal, Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/base/CustomButton';
import CustomLayout from '../../components/base/CustomLayout';
import CustomText from '../../components/base/CustomText';
import CustomTextInput from '../../components/base/CustomTextInput';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

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



      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>


      <Pressable onPress={() => alert('Pressed!')}>
        <Text>I'm pressable!</Text>
      </Pressable>

      <CustomTextInput/>
      <CustomTextInput/>
      <CustomTextInput/>
      <CustomTextInput/>
      <CustomTextInput/>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </CustomLayout>
  );
}
const styles = StyleSheet.create({
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
});
