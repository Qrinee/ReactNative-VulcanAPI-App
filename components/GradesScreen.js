import React from 'react'
import {Layout, Text, Button } from '@ui-kitten/components';
import { Grade } from './Grade';
import { ScrollView, View } from 'react-native';

export default function GradesScreen() {
  return (
    <Layout style={{backgroundColor: '#202129', flex: 1}}>
      <ScrollView>
      <Text category='h2' style={{marginLeft: 20, marginTop: 50}}>Średnia 🏆</Text>
      <Text appearance='hint' style={{marginLeft: 20}}>Dążenie do celów jest proste</Text>
      <View style={{ margin: 20, fontSize: 10 }}>
        <Button appearance='outline'>
          + Dodaj cel
        </Button>
      </View>
      
      <Grade lesson={"Matematyka"} goal={3.0} grades={[1,3,5,1,4]}/>
      <Grade lesson={"Fizyka"} goal={0} grades={[1,2,5,2,5,1]}/>
      <Grade lesson={"Biologia"}  goal={3.15} grades={[1,2,5,1,1,1]} />
      <Grade lesson={"Chemia"} goal={5.11} grades={[1,2,5,2,2,2]} />
      </ScrollView>
    </Layout>
  )
}
