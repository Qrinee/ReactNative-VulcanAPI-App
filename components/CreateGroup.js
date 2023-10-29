import { View } from 'react-native';
import React, { useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Modal } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export default function CreateGroup() {
  const [visible, setVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState(0);

  const handleInputFocus = () => setModalPosition(-100);
  const handleInputBlur = () => setModalPosition(0);

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
            onBlur={handleInputBlur}
          />
          <Button style={{ marginTop: 30 }} >
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

      <View style={{ margin: 20, fontSize: 10, }}>
        <Button appearance='outline' status='info' onPress={() => {
        setVisible(true) 
        handleInputBlur()
        }}>+ Utwórz grupę</Button>
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
