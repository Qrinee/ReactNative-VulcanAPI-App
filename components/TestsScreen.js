import React from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import Test from './Test';
import CreateTest from './CreateTest';
import YouTubeSearch from './YoutubeSearch';
import { ScrollView } from 'react-native';

export default function TestsScreen() {
  const data = [
    {
      key: 0,
      lesson: "Matematyka",
      desc: "Trygonometria",
      date: '24.10.2023'
    },
    {
      key: 1,
      lesson: "Fizyka",
      desc: "Bilanse cieplne",
      date: '28.10.2023'
    },
  ];

  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <ScrollView>
        <Text category='h2' style={{ marginLeft: 20, marginTop: 50 }}>
          Testy pisemne 📃
        </Text>
        <Text appearance='hint' style={{ marginLeft: 20 }}>
          Przygotowany na sprawdzian?
        </Text>
        <CreateTest />
        {data.map((item) => (
          <Test lesson={item.lesson} desc={item.desc} date={item.date} key={item.key} />
        ))}
        {data.map((item) => (
          <React.Fragment key={item.key}>
            <Divider style={{ marginTop: 10 }} />
            <Text category='h5' style={{ marginLeft: 20, marginTop: 50 }}>
              Materiały do nauki ({item.lesson}):
            </Text>
            <Text appearance='hint' style={{ marginLeft: 20, marginBottom: 20 }}>
              Na nadchodzące sprawdziany
            </Text>
            <YouTubeSearch searchQuery={item.desc} />
          </React.Fragment>
        ))}
        <YouTubeSearch data={data} />
      </ScrollView>
    </Layout>
  );
}
