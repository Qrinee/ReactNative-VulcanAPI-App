import {Layout, Text, Button } from '@ui-kitten/components';
import React from 'react'
import HomeWork from './HomeWork';
import CreateHomeWork from './CreateHomeWork';

export default function HomeWorksScreen() {
  return (
    <Layout>
        <Text category='h2' style={{marginLeft: 20, marginTop: 50}}>Zadania domowe 📚</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Wszystko niezapisane tutaj</Text>
        <CreateHomeWork />
        <HomeWork lesson={"Matematyka"} desc={"Zadanie 5.11 strona 210"} />
    </Layout>
  )
}