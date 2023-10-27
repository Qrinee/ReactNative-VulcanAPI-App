import React, { useState } from 'react';
import { Layout, Text, Avatar, Button, ListItem, Divider, Card, Input } from '@ui-kitten/components';
import { View, Modal, ScrollView } from 'react-native';
import Class from './Class';
import CreateGroup from './CreateGroup';
import Notice from './Notice';



export default function MessagesScreen() {
  const data = [
    {
      key: 0,
      title: 'Zbiórka na kwiaty',
      desc: 'Zbiórka na kwiaty 10zł dla suszyło xd. Przynieście na jutro najlepiej jak nie to wpierdol',
      date: '23.10.2023'
    },
    {
      key: 1,
      title: 'Mikołajki klasowe',
      desc: 'Kto bierze udział niech napisze mi na messengerze.',
      date: '23.10.2023'
    },
    {
      key: 2,
      title: 'Zbiórka na pieski',
      desc: 'Zbiórka na schronisko 20zł ale można dać mniej jeżeli ktoś nie posiada',
      date: '23.10.2023'
    },
    {
      key: 3,
      title: 'Jutro skrócone lekcje',
      desc: '24.10.2023 będą skrócone lekcje. Plan lekcji macie na stronie szkoły',
      date: '23.10.2023'
    },  
  ]
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
      {
        data.map(item => <Notice key={item.key} title={item.title} desc={item.desc} date={item.date}  />)
      }
    </ScrollView>
    </Layout>
  );
}

