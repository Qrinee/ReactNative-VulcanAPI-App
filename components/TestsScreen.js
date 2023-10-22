import { Layout, Text, Button } from '@ui-kitten/components';
import React from 'react'
import Test from './Test';
import CreateTest from './CreateTest';


export default function TestsScreen() {
  return (
    <Layout >
        <Text category='h2' style={{marginLeft: 20, marginTop: 50}}>Testy pisemne 📃</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Przygotowany na sprawdzian?</Text>
        <CreateTest/>
        <Test lesson={"Matematyka | 27.01.2023"} desc={"Trygonometria"} />
    </Layout>
  )
}