import React, { useEffect, useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grade } from './Grade';
import { ScrollView, View } from 'react-native';
import { useBaseUrlContext } from './BaseUrlContext';
import CreateGrade from './CreateGrade';
import { useRefreshContext } from './RefreshContext';

export default function GradesScreen() {
  const {url, setUrl} = useBaseUrlContext()
  const [data, setData] = useState([]);

  const [transformedData, setTransformedData] = useState([]);
  const {refresh, setRefresh} = useRefreshContext()
  useEffect(() => {
    fetch('http://146.59.44.77:8080/getUserTargets')
    .then(e => e.json())
    .then(e => setData(e))
    .then(() => setRefresh(false))
  }, [refresh]);

  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <ScrollView>
        <Text category="h2" style={{ marginLeft: 20, marginTop: 50 }}>
          Średnia 🏆
        </Text>
        <Text appearance="hint" style={{ marginLeft: 20 }}>
          Dążenie do celów jest proste
        </Text>
        <CreateGrade targets={data}  />
        {
          data.length == 0 ? 
          <Text appearance='hint' style={{margin: 20}}>{"Nie dodałeś jeszcze żadnych celów"}</Text>:
          data.map((e) => (
          <Grade goal={e.gradetarget} lesson={e.subjectName} grades={['5','4','3','2','1']} key={e.id} />
        ))}
      </ScrollView>
    </Layout>
  );
}
