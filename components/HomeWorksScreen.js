import {Layout, Text, Button } from '@ui-kitten/components';
import React from 'react'
import HomeWork from './HomeWork';
import CreateHomeWork from './CreateHomeWork';
import YouTubeSearch from './YoutubeSearch';
import { ScrollView } from 'react-native';

export default function HomeWorksScreen() {
  const data = [{
    key: 0,
    lesson: 'Matematyka',
    desc: 'Zadanie 5.11 strona 210',
  }]
  return (
    <Layout style={{backgroundColor: '#202129', flex: 1}}>
        <Text category='h2' style={{marginLeft: 20, marginTop: 50}}>Zadania domowe 📚</Text>
        <Text appearance='hint' style={{marginLeft: 20}}>Wszystko niezapisane tutaj</Text>
        <CreateHomeWork />
        {
           data.map(item => <HomeWork lesson={item.lesson} desc={item.desc} key={item.key} /> )
        }
        <Text category='h5' style={{marginLeft: 20, marginTop: 50}} >Potrzebna pomoc?</Text>
        <Text appearance='hint' style={{marginLeft: 20}}>Gotowe rozwiązania z sieci:</Text>

    </Layout>
  )
}