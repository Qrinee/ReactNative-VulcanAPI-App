import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import HomeWork from './HomeWork';
import CreateHomeWork from './CreateHomeWork';
import { useAppContext } from './AppContext';

export default function HomeWorksScreen() {
  const [data, setData] = useState([
    {
      HomeworksID: "0",
      HomeworkSubject: 'Matematyka',
      HomeworksTopic: 'Zadanie 5.11 strona 210',
      HomeworkDate: '2023-11-07'
    }
  ]);
  const { isDemo, setIsDemo } = useAppContext();

  useEffect(() => {
    if (!isDemo) {
      fetch('https://08b9-193-19-165-189.ngrok-free.app/getHomeworks')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Błąd podczas pobierania danych:', error));
    }
  }, [data]);

  // Obecna data
  const currentDate = new Date();

  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <Text category='h2' style={{ marginLeft: 20, marginTop: 50 }}>
        Zadania domowe 📚
      </Text>
      <Text appearance='hint' style={{ marginLeft: 20 }}>
        Wszystko niezapisane tutaj
      </Text>
      <CreateHomeWork />
      {data.map((item) => {
        const homeworkDate = new Date(item.HomeworkDate);

        if (homeworkDate >= currentDate) {
          return (
            <HomeWork
              lesson={item.HomeworkSubject}
              desc={item.HomeworksTopic}
              key={item.HomeworksID}
              date={item.HomeworkDate}
            />
          );
        }
        return null; 
      })}
      <Text category='h5' style={{ marginLeft: 20, marginTop: 50 }}>
        Potrzebna pomoc?
      </Text>
      <Text appearance='hint' style={{ marginLeft: 20 }}>
        Gotowe rozwiązania z sieci:
      </Text>
    </Layout>
  );
}
