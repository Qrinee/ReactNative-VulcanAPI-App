import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Modal } from 'react-native';
import * as ClipBoard from 'expo-clipboard'
import User from './User';
import { ScrollView } from 'react-native';

export default function Class({ title, lastMessage, ID }) {
  const [visible, setVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [copy, setCopy] = useState(false)
  const handleSaveGroupName = () => {
    setVisible(false);
  };
  useEffect(() => {
    setGroupName(title)
  }, [])
  const handleCopyInvite = async () => {
    await ClipBoard.setStringAsync(`https://domain.com/invite/${ID}`)
    setCopy(true)
  };

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

  return (
    <>
     
      <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
      <ScrollView>
        <Card disabled={true}>
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
            value={`https://domain.com/invite/${ID}`}
            editable={false}
            label={evaProps => <Text {...evaProps}>Zaproszenie</Text>}
          />
          <Button style={{ marginTop: 10 }} onPress={handleCopyInvite}>
            Skopiuj Zaproszenie
          </Button>
          {copy ? (<Text appearance='hint' style={{marginTop: 5}}>Skopiowano zaproszenie!</Text>) : null}
          <Text category='h4' style={{marginTop: 10}}>Członkowie</Text>
         
            <User fullName={"Krystian Niemczyk"} status={"Członek"} ID={123123} />
            <User fullName={"Marc Owens"} status={"Członek"} ID={123123} />
            <User fullName={"Jacob Ciołek"} status={"Moderatora"} ID={123123} />
            <User fullName={"Krystian Niemczyk"} status={"Członek"} ID={123123} />
            <User fullName={"Krystian Niemczyk"} status={"Członek"} ID={123123} />
            <User fullName={"Krystian Niemczyk"} status={"Członek"} ID={123123} />
            <User fullName={"Krystian Niemczyk"} status={"Członek"} ID={123123} />
            <User fullName={"Krystian Niemczyk"} status={"Członek"} ID={123123} />
         
          <Divider />
          <Button style={{ marginTop: 30 }} onPress={handleSaveGroupName}>
            Zapisz
          </Button>
          <Button appearance='outline' style={{ marginTop: 5 }} onPress={() => setVisible(false)}>
            Anuluj
          </Button>
        </Card>
        </ScrollView>
      </Modal>
      
      <ListItem
        title={title}
        description={lastMessage}
        accessoryLeft={ItemImage}
        accessoryRight={<InstallButton onPress={() => setVisible(true)} />}
      />

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
