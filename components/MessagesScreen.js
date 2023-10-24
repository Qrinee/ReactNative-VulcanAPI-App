import React, { useState } from 'react';
import { Layout, Text, Avatar, Button, ListItem, Divider, Card, Input } from '@ui-kitten/components';
import { View, Modal, ScrollView } from 'react-native';
import Class from './Class';
import CreateGroup from './CreateGroup';
import Notice from './Notice';



export default function MessagesScreen() {
  return (
    <Layout style={{backgroundColor: '#202129', flex: 1}}>
      <ScrollView>
      <Text category='h1' style={{marginLeft: 20, marginTop: 50}}>Witaj, Krystian 🔥</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Jesteś przewodniczącym</Text>
       <CreateGroup />
       <Divider  />
      <Class title={"Klasa 3TP"} lastMessage={"User: Hello world"} ID={1232131312}/>
      <Text category='h3' style={{marginLeft: 20, marginTop: 20}}>Ogłoszenia klasowe 📜</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Spraw by nic cię nie ominęło!</Text>
      <View style={{ margin: 20, fontSize: 10, }}>
        <Button appearance='outline' status='info' >+ Dodaj ogłoszenie</Button>
      </View>
    <Notice title={"Zbiórka na kwiaty"} desc={"Zbiórka na kwiaty 10zł dla suszyło xd. Przynieście na jutro najlepiej jak nie to wpierdol"} date={"23.10.2023"}/>
    <Notice title={"Zbiórka na kwiaty"} desc={"Zbiórka na kwiaty 10zł dla suszyło xd. Przynieście na jutro najlepiej jak nie to wpierdol"} date={"23.10.2023"}/>
    <Notice title={"Zbiórka na kwiaty"} desc={"Zbiórka na kwiaty 10zł dla suszyło xd. Przynieście na jutro najlepiej jak nie to wpierdol"} date={"23.10.2023"}/>
    </ScrollView>
    </Layout>
  );
}

