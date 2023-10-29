import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Input, Button, Avatar, List, ListItem } from '@ui-kitten/components';

const data = [
  {
    id: '1',
    title: 'Artur N.',
    description: 'Ok',
    time: '10:30 AM',
    avatar: require('../assets/avatar1.png'),
  },
  {
    id: '2',
    title: 'Wojtek K.',
    description: 'Już dodałem',
    time: '10:35 AM',
    avatar: require('../assets/avatar2.png'),
  },
  {
    id: '3',
    title: 'Adam L.',
    description: 'Dodaj wojtek zadanie z matmy',
    time: '11:00 AM',
    avatar: require('../assets/avatar3.png'),
  },
];

const GroupChatScreen = () => {
  const [message, setMessage] = React.useState('');

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryLeft={() => <Avatar source={item.avatar} />}
      accessoryRight={() => <Text>{item.time}</Text>}
    />
  );

  const sendMessage = () => {
    console.log(message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <List
        style={styles.list}
        data={data}
        renderItem={renderItem}
        inverted
      />
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          accessoryRight={() => (
            <Button
              style={styles.sendButton}
              onPress={sendMessage}
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
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#212b44'
  },
  input: {
    flex: 1,
  },
  sendButton: {
    paddingHorizontal: 0,
  },
});

export default GroupChatScreen;