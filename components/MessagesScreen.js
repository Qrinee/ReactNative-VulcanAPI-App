import React, { useState } from 'react';
import { Layout, Text, Avatar, Button, ListItem, Divider, Card, Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { View, Modal } from 'react-native';

const InstallButton = ({ onPress }) => (
  <Button size='tiny' onPress={onPress}>
    USTAWIENIA
  </Button>
);

const ItemImage = (props) => (
  <Avatar
    {...props}
    style={[props.style, styles.itemImage]}
    source={require('../assets/group.png')}
  />
);

export default function MessagesScreen() {
  const [visible, setVisible] = useState(false);
  const [groupName, setGroupName] = useState('Klasa 3 TP');

  const handleSaveGroupName = () => {
    // Tutaj możesz dodać kod do zapisania wartości groupName
    setVisible(false);
  };

  return (
    <Layout>
      <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text category='h1' style={{ marginTop: 10 }}>Ustawienia</Text>
          <Input
            style={{ marginTop: 10 }}
            placeholder='Wpisz nazwę grupy'
            value={groupName}
            onChangeText={text => setGroupName(text)}
            label={evaProps => <Text {...evaProps}>Nazwa grupy</Text>}
          />
          <Button style={{ marginTop: 30 }} onPress={handleSaveGroupName}>
            Zapisz
          </Button>
          <Button appearance='outline' style={{ marginTop: 5 }} onPress={() => setVisible(false)}>
            Anuluj
          </Button>
        </Card>
      </Modal>
      <View style={{ margin: 20, fontSize: 10 }}>
        <Button appearance='outline'>Utwórz grupę</Button>
      </View>
      <Divider />

      <ListItem
        title='Klasa 3TP'
        description='Użytkownik: Hello World'
        accessoryLeft={ItemImage}
        accessoryRight={<InstallButton onPress={() => setVisible(true)} />}
      />
    </Layout>
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
