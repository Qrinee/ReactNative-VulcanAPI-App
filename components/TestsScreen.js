import { Layout, Text, Button, Divider } from '@ui-kitten/components';
import React from 'react'
import Test from './Test';
import CreateTest from './CreateTest';
import YouTubeSearch from './YoutubeSearch';

export default function TestsScreen() {
  const data = [
    {
      lesson: "Matematyka",

    }
  ]
  return (
    <Layout style={{backgroundColor: '#202129', flex: 1}} >
        <Text category='h2' style={{marginLeft: 20, marginTop: 50}} >Testy pisemne 📃</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Przygotowany na sprawdzian?</Text>
        <CreateTest/>
        <Test lesson={"Matematyka | 27.01.2023"} desc={"Trygonometria"} />
        <Divider style={{marginTop: 10}}/>
        <Text category='h5' style={{marginLeft: 20, marginTop: 50}} >Materiały do nauki:</Text>
        <Text appearance='hint' style={{marginLeft: 20, marginBottom: 20}}>Na nadchodzące sprawdziany</Text>
        <YouTubeSearch />
    </Layout>
  )
}