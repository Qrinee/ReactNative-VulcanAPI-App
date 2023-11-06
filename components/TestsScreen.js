import React, { useEffect, useState } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import Test from './Test';
import CreateTest from './CreateTest';
import YouTubeSearch from './YoutubeSearch';
import { ScrollView } from 'react-native';
import { useBaseUrlContext } from './BaseUrlContext';

export default function TestsScreen() {
  const [data, setData] = useState([]);
  const {url, setUrl} = useBaseUrlContext()
  useEffect(() => {

  }, []);

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


        <YouTubeSearch examData={data} />

      </ScrollView>
    </Layout>
  );
}
