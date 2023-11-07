import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Input, Button, Avatar, List, ListItem } from '@ui-kitten/components';

import { Client, Message } from '@stomp/stompjs';
import {avata} from '../assets/user.png'
import { useUserInfoContext } from './UserInfoContext';

const GroupChatScreen = ({ route }) => {

  const [mappedData, setMappedData] = useState([])
  const {userInfo, setUserInfo} = useUserInfoContext()
  const [data, setData] = useState([])
  const stompClient = new Client()

  stompClient.configure({
    connectHeaders: {},
    brokerURL: "ws://146.59.44.77:8080/chatKlasowaWebsocket",
    debug: function (str) {
        console.log('STOMP: ' + str);
    },
    reconnectDelay: 200,
    onConnect: function (frame) {
      stompClient.subscribe('/chat/messages/' + 'Pokoj', (message) => {
        console.log(message.body.content)
      })
        stompClient.subscribe("/klasowaws/chat/messages/" + 'Pokoj',  (message) => {
            setData(JSON.parse(message.body))
        });


    },
    onStompError: (frame) => {
        console.log('Additional details: ' + frame.body);
    },
    forceBinaryWSFrames: true,
    appendMissingNULLonIncoming: true,
  })

  clickhandler = () => {

  };

  const token = route.params.id;
  const [message, setMessage] = useState('');

    useEffect(() => {
        stompClient.activate()
        console.log(userInfo)
    }, []);


  return (
    <View style={styles.container}>

      <View style={styles.list}>
        <ScrollView>
        <Text>Przed kartkówką/sprawdzianem utworzy się w tym miejscu nowy chat do nauki</Text>
      {
        data.map(e => (
          <ListItem
          title={e.FromUser}
          description={e.MessageContent}
          accessoryLeft={() => <Avatar source={require('../assets/user.png')} />}
          accessoryRight={() => <Text>{new Date(e.MessageDate).toLocaleTimeString()}</Text>}
          key={e.id}
            />
        ))
      }

      </ScrollView>
      </View>

      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          accessoryRight={() => (
            <Button
              style={styles.sendButton}
              onPress={clickhandler}
              accessoryLeft={(props) => (
                <Image
                  source={require('../assets/send.png')}
                  style={{ width: 24, height: 24 }}
                />
              )}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  list: {
    flex: 1,
    backgroundColor: '#212b44'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#212b44',
  },
  input: {
    flex: 1,
  },
  sendButton: {
    paddingHorizontal: 0,
  },
});

export default GroupChatScreen;
