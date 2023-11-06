import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Divider, Layout } from '@ui-kitten/components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Modal } from 'react-native';
import * as ClipBoard from 'expo-clipboard';
import User from './User';
import { ScrollView } from 'react-native';

export default function Class({ title, lastMessage, ID, navigation }) {
  const data = [
    {
      key: 0,
      fullName: 'Krystian Niemczyk',
      status: 'Członek',
    },
    {
      key: 1,
      fullName: 'Wojciech Sikora',
      status: 'Administrator',
    },
    {
      key: 2,
      fullName: 'Jakub Zych',
      status: 'Członek',
    },
    {
      key: 3,
      fullName: 'Marek Sobuś',
      status: 'Członek',
    },
    {
      key: 4,
      fullName: 'Jakub Ciołek',
      status: 'Członek',
    },
    {
      key: 5,
      fullName: 'Marc Owens',
      status: 'Członek',
    },
  ];
  const [visible, setVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [copy, setCopy] = useState(false);

  const handleRedirectToMessages = () => {
    navigation.navigate('Chaty');
  };

  const handleSaveGroupName = () => {
    setVisible(false);
  };
  useEffect(() => {
    setGroupName(title);
  }, []);
  const handleCopyInvite = async () => {
    await ClipBoard.setStringAsync(`https://vps-ec58bb4f.vps.ovh.net/invite/${ID}`);
    setCopy(true);
  };

  const InstallButton = ({ onPress }) => (
    <Button size='tiny' onPress={onPress} appearance='ghost'>
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

  return (
    <>
      <Modal visible={visible} onBackdropPress={() => setVisible(false)}>
          <Card disabled={true} style={{flex: 1}}>
            <Text category='h1' style={{ marginTop: 10 }}>Ustawienia</Text>
            <Input
              style={{ marginTop: 10 }}
              placeholder='Wpisz nazwę grupy'
              value={groupName}
              onChangeText={text => setGroupName(text)}
              label={evaProps => <Text {...evaProps}>Nazwa grupy</Text>}
            />
            <Input
              style={{ marginTop: 10 }}
              placeholder='Wpisz nazwę grupy'
              value={`https://vps-ec58bb4f.vps.ovh.net/invite/${ID}`}
              editable={false}
              label={evaProps => <Text {...evaProps}>Zaproszenie</Text>}
            />
            <Button style={{ marginTop: 10 }} onPress={handleCopyInvite} appearance='ghost'>
              Skopiuj Zaproszenie
            </Button>
            {copy ? (<Text appearance='hint' style={{ marginTop: 5 }}>Skopiowano zaproszenie!</Text>) : null}
            <Divider />
            <Button style={{ marginTop: 30 }} onPress={handleSaveGroupName}>
              Zapisz
            </Button>
            <Button appearance='ghost' status='basic' style={{ marginTop: 5 }} onPress={() => setVisible(false)}>
              Anuluj
            </Button>
          </Card>
      </Modal>
      <ListItem
        title={title}
        description={lastMessage}
        accessoryLeft={ItemImage}
        onPress={handleRedirectToMessages}
        accessoryRight={<InstallButton onPress={() => setVisible(true)} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    tintColor: null,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
