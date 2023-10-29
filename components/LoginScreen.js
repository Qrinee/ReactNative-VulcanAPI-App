import React, { useState } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { View, Image } from 'react-native';
import { useAppContext } from './AppContext';

import {VulcanIcon} from '../assets/iconvulcan.png'
export default function LoginScreen({ navigation }) {
  const [token, setToken] = useState('');
  const [symbol, setSymbol] = useState('');
  const [pin, setPin] = useState('');
  const [err, setErr] = useState(<></>);
  const {isDemo, setIsDemo } = useAppContext()
  const handleLogin = () => {
    setIsDemo(false)
    const data = {
      token: token,
      symbol: symbol,
      pin: pin,
    };

    fetch('https://08b9-193-19-165-189.ngrok-free.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
          return response.text()
      })
      .then((result) => {
        console.log(result)
        if (result === 'logged') {
          navigation.navigate('Home', {isDemo: false});
        } else {
          setErr(<Text>Błąd w logowaniu, spróbuj ponownie</Text>);
          console.log("relected");
        }
      })
      .catch((error) => {
        console.error('Wystąpił błąd:', error);
      });
  };

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
        onPress={() => {
          setIsDemo(true)
          navigation.navigate('Home')
        }}
      >
        Otwórz demo aplikacji
      </Button>
    </Layout>
  );
}
