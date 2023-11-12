import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import HomeWork from '../../components/HomeWork';
import CreateHomeWork from '../../components/alerts/CreateHomeWork';
import { useRefreshContext } from '../../services/RefreshContext';

export default function HomeWorksScreen() {

  const [data, setData] = useState([]);
  
  const {refresh, setRefresh} = useRefreshContext()
  useEffect(() => {
    fetch('http://146.59.44.77:8080/getAllCustomHomeworks')
    .then(e => e.json())
    .then(e => setData(e.reverse()))
    .then(() => setRefresh(false))
  }, [refresh]);



  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <Text category='h2' style={{ marginLeft: 20, marginTop: 50 }}>
        Zadania domowe 📚
      </Text>
      <Text appearance='hint' style={{ marginLeft: 20 }}>
        Wszystko niezapisane tutaj
      </Text>
      <CreateHomeWork />
      {
        data.length === 0 ? (
          <Text appearance="hint" style={{marginLeft: 20}}>Brak zadań domowych 😎</Text>
        ):
        data.map(e => (
          <HomeWork lesson={e.homeworkLessonName} desc={e.homeworkTopic} ID={e.id} key={e.id} date={e.homeworkDate} />
        ))
      }

    </Layout>
  );
}
