import React, { useState, useEffect } from 'react';
import { Layout, Text, Input, Button, Modal, Card } from '@ui-kitten/components';
import { Image, KeyboardAvoidingView } from 'react-native';
import { useBaseUrlContext } from './BaseUrlContext';
import { useUserInfoContext } from './UserInfoContext';
import Chat from './Chat';

export default function ChatsScreen({ navigation }) {
    const [chats, setChats] = useState([])
    useEffect(() => {
        fetch('http://146.59.44.77:8080/getAllChats')
        .then(e => e.json())
        .then(e => {
            setChats(e)
            console.log(e.length)
        })
        .catch(e => console.error(e))
    
    }, [])
  return (
    <Layout style={{ flex: 1, padding: 10}}>
        
        {
            chats.length > 0 ? (
            chats.map(e => (
                <Chat title={e.chatName} ID={e.chatID} key={e.chatID} navigation={navigation} date={e.chatDate}/>
            ))
            ) : <Text>{"Tu nic nie ma"}</Text>
        }
    </Layout>
  );
}
