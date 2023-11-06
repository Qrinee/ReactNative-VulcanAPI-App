import { View } from 'react-native';
import React, { useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Modal } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useRefreshContext } from './RefreshContext';

export default function CreateGroup() {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false)
  const [modalPosition, setModalPosition] = useState(0);
  const [groupName, setGroupName] = useState('')
  const {refresh, setRefresh} = useRefreshContext()
  const handleInputFocus = () => setModalPosition(-100);
  const handleInputBlur = () => setModalPosition(0);

  const handleJoinChat = () => {

  }
  const handleCreateChat = () => {
    fetch('http://146.59.44.77:8080/createGroup',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: groupName,
        groupToken: "xx"
      })
    }).then(e => {
      setRefresh(true)
      if(!e.ok) throw new Error(e.status)
      console.log(e.ok)
    }).then(() => {
      setVisible(false)
    })
  }
  return (
    <>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
            setVisible(false)
            handleInputBlur()
        }}
        style={{ width: '90%', marginTop: modalPosition }}
      >        
        <Card disabled={true}>
          <Text category='h1' style={{ marginTop: 10 }}>Utwórz grupę</Text>
          <Input
            label="Nazwa grupy"
            style={{ marginTop: 10 }}
            placeholder="Wpisz nazwę grupy..."
            onFocus={handleInputFocus}
            value={groupName}
            onBlur={handleInputBlur}
            onChangeText={(text) => setGroupName(text)}
          />
          <Button style={{ marginTop: 30 }} onPress={handleCreateChat}>
            Zapisz
          </Button>
          <Button appearance='ghost' status='basic' style={{ marginTop: 5 }} onPress={() => {
            setVisible(false)
            handleInputBlur()
            }}>
            Anuluj
          </Button>
        </Card>
      </Modal>
      <Modal
        visible={modal}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
            setModal(false)
            handleInputBlur()
        }}
        style={{ width: '90%', marginTop: modalPosition }}
      >

      <Card disabled={true}>
          <Text category='h1' style={{ marginTop: 10 }}>Dołącz do chatu</Text>
          <Input
            label="Token chatu np. X2da2dA"
            style={{ marginTop: 10 }}
            placeholder="Wpisz token chatu..."
            onFocus={handleInputFocus}
            value={groupName}
            onBlur={handleInputBlur}
            onChangeText={(text) => setGroupName(text)}
          />
          <Button style={{ marginTop: 30 }} onPress={handleJoinChat}>
            Zapisz
          </Button>
          <Button appearance='ghost' status='basic' style={{ marginTop: 5 }} onPress={() => {
            setModal(false)
            handleInputBlur()
            }}>
            Anuluj
          </Button>
        </Card>



      </Modal>
      <View>
      <View style={{ margin: 20, fontSize: 10, }}>
        <Button appearance='outline' status='info' onPress={() => {
        setVisible(true) 
        handleInputBlur()
        }}>+ Utwórz grupę</Button>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, fontSize: 10, }}>
        <Button appearance='outline' status='info' onPress={() => {
        handleInputBlur()
        setModal(true)
        }}>Dołącz do chatu</Button>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    tintColor: null,
  },
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
