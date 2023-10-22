import React, { useState } from 'react';
import { Layout, Text, Avatar, Button, ListItem, Divider, Card, Input } from '@ui-kitten/components';
import { View, Modal } from 'react-native';
import Class from './Class';
import CreateGroup from './CreateGroup';



export default function MessagesScreen() {
  return (
    <Layout style={{backgroundColor: '#202129', flex: 1}}>
      <Text category='h2' style={{marginLeft: 20, marginTop: 50}}>Witaj, Krystian 🔥</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Jesteś przewodniczącym</Text>
       <CreateGroup />
       <Divider  />
      <Class title={"Klasa 3TP"} lastMessage={"User: Hello world"} ID={1232131312}/>
    </Layout>
  );
}

