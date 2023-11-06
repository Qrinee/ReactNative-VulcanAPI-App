import React, { useEffect, useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grade } from './Grade';
import { ScrollView, View } from 'react-native';
import { useBaseUrlContext } from './BaseUrlContext';
import CreateGrade from './CreateGrade';

export default function GradesScreen() {
  const {url, setUrl} = useBaseUrlContext()
  const [data, setData] = useState({
    Biologia: ['4+'],
    Informatyka: ['5-', '5+'],
  });

  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    // if (!isDemo) {
    //   fetch(url + '/getGrades')
    //     .then((response) => response.json())
    //     .then((fetchedData) => {
    //       const transformedData = Object.keys(fetchedData).map((subject) => ({
    //         subject,
    //         grades: fetchedData[subject],
    //       }));
    //       setTransformedData(transformedData);
    //     })
    //     .catch((error) => console.error('Błąd podczas pobierania danych:', error));
    // }
  }, []);

  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <ScrollView>
        <Text category="h2" style={{ marginLeft: 20, marginTop: 50 }}>
          Średnia 🏆
        </Text>
        <Text appearance="hint" style={{ marginLeft: 20 }}>
          Dążenie do celów jest proste
        </Text>
        <CreateGrade api={transformedData} />
        {transformedData.map((e) => (
          <Grade goal={0} lesson={e.subject} grades={e.grades} key={e.subject} />
        ))}
      </ScrollView>
    </Layout>
  );
}
