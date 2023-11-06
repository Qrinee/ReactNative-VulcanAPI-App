import { View } from 'react-native';
import React, { useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Modal } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useRefreshContext } from './RefreshContext';
import { useFormatDate } from './useFormatDate';

export default function CreateAnnouncment({user}) {
  const [visible, setVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState(0);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleInputFocus = () => setModalPosition(-100);
  const handleInputBlur = () => setModalPosition(0);
  const {refresh, setRefresh} = useRefreshContext()
  const {formatedDate} = useFormatDate(new Date())

  const handleCreateAnnouncement = () => {
    const data = {
      announcementsTitle: title,
      announcementstContent: content,
      announcementsDate: formatedDate,
      announcementsAuthor: user,
    };
  
    fetch('http://146.59.44.77:8080/createAnnouncements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json(); 
      })
      .then((data) => {
        console.log(data); 
        setVisible(false);
        setRefresh(true)
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };
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
          <Text category='h3' style={{ marginTop: 10 }}>Utwórz ogłoszenie</Text>
          <Input
            label="Tytuł"
            style={{ marginTop: 10 }}
            placeholder="Wpisz tytuł ogłoszenia..."
            onFocus={handleInputFocus}
            value={title}
            onBlur={handleInputBlur}
            onChangeText={(text) => setTitle(text)}
          />
            <Input
            label="Treść"
            style={{ marginTop: 10 }}
            placeholder="Wpisz treść ogłoszenia..."
            onFocus={handleInputFocus}
            value={content}
            onBlur={handleInputBlur}
            onChangeText={(text) => setContent(text)}
          />

          <Button style={{ marginTop: 30 }} onPress={handleCreateAnnouncement}>
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
      <View>
      <View style={{ margin: 20, fontSize: 10, }}>
        <Button appearance='outline' status='info' onPress={() => {
        setVisible(true) 
        handleInputBlur()
        }}>+ Utwórz ogłoszenie</Button>
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
