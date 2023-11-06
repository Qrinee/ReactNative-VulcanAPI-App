import React, { useState } from 'react';
import { Layout, Text, Input, Button, Modal, Card } from '@ui-kitten/components';
import { Image, KeyboardAvoidingView } from 'react-native';
import { useBaseUrlContext } from './BaseUrlContext';
import { useUserInfoContext } from './UserInfoContext';

export default function LoginScreen({ navigation }) {
  const [token, setToken] = useState('');
  const [symbol, setSymbol] = useState('');
  const [info, setInfo] = useState('');
  const [pin, setPin] = useState('');
  const [err, setErr] = useState(<></>);


  // State dla modala
  const [isDemoModalVisible, setDemoModalVisible] = useState(false);
  const [name, setName] = useState('');
  const {userInfo, setUserInfo} = useUserInfoContext()
  const [lastName, setLastName] = useState('');
  const handleLoginDemo = () => {
      fetch('http://146.59.44.77:8080/createDemoUser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          userName: name + " " + lastName
        })
      }).then(r => {
        if(!r.ok) throw new Error(`Http error! Status ${r.status}`)
        return r.json()
      }).then(e => {
        setUserInfo(e)
      }).then(() => 
        {
          navigation.navigate("Home")
        }
      )
  }

  const openDemoModal = () => setDemoModalVisible(true);
  const closeDemoModal = () => setDemoModalVisible(false);
  const handleLogin = () => setInfo('Obecnie trwa aktualizacja dziennika VULCAN, nie jest to zależne od nas, spróbuj ponownie później');

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', padding: 30, alignItems: 'center' }}>
      <Text category='h1' style={{ textAlign: 'center' }}>
        Zaloguj się
      </Text>

      {err}

        <Input
          style={{ marginTop: 10 }}
          placeholder='Podaj token...'
          label='Token'
          value={token}
          onChangeText={(text) => setToken(text)}
        />
        <Input
          style={{ marginTop: 10 }}
          placeholder='Podaj symbol...'
          label='Symbol'
          value={symbol}
          onChangeText={(text) => setSymbol(text)}
        />
        <Input
          style={{ marginTop: 10 }}
          placeholder='Podaj PIN...'
          label='PIN'
          value={pin}
          onChangeText={(text) => setPin(text)}
        />

      <Text style={{ marginTop: 20 }}>{info}</Text>
      <Button
        style={{ marginTop: 30, width: 200 }}
        status='danger'
        onPress={handleLogin}
        accessoryLeft={<Image source={require('../assets/iconvulcan.png')} />}
      >
        Zaloguj się
      </Button>
      <Text style={{ marginTop: 10, color: 'gray' }}>Nie masz konta na dzienniku?</Text>
      <Button
        style={{ marginTop: 10, width: 200 }}
        appearance='outline'
        onPress={openDemoModal}
      >
        Otwórz demo aplikacji
      </Button>

      <Modal
        visible={isDemoModalVisible}
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        onBackdropPress={closeDemoModal}
      >
        <Card disabled={true} style={{marginBottom: 100}}>
          <Text category="h6">Wprowadź potrzebne dane:</Text>
          <Input
            style={{ marginVertical: 10 }}
            placeholder="Imię"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            style={{ marginVertical: 10 }}
            placeholder="Nazwisko"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Button
            style={{ marginTop: 10 }}
            onPress={() => {
              console.log('Wprowadzony tekst:', name + " " + lastName);
              handleLoginDemo()
            }}
          >
            Zapisz
          </Button>
        </Card>
      </Modal>
    </Layout>
  );
}
