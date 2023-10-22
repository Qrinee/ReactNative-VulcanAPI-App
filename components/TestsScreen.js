import { Layout, Text, Button } from '@ui-kitten/components';
import React from 'react'
import Test from './Test';


export default function TestsScreen() {
  return (
    <Layout>
        <Button appearance='outline' style={{margin: 20}}>Dodaj test</Button>
        <Test lesson={"Matematyka | 27.01.2023"} desc={"Trygonometria"} />
    </Layout>
  )
}