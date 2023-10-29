import React, { useEffect, useState } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import Test from './Test';
import CreateTest from './CreateTest';
import YouTubeSearch from './YoutubeSearch';
import { ScrollView } from 'react-native';
import { useAppContext } from './AppContext';

export default function TestsScreen() {
  const [data, setData] = useState([]);
  const { isDemo, setIsDemo } = useAppContext();

  useEffect(() => {
    if (!isDemo) {
      fetch('https://08b9-193-19-165-189.ngrok-free.app/getExams')
        .then((response) => response.json())
        .then((data) => {
          // Filtrujemy testy, aby pozostawić tylko te, które odbędą się w przyszłości
          const currentDate = new Date(); // Bieżąca data

          const futureExams = data.filter((item) => {
            const examDate = new Date(item.SprawdzianDate);
            return examDate > currentDate;
          });

          setData(futureExams);
        })
        .catch((error) => console.error('Błąd podczas pobierania danych:', error));
    }
  }, [isDemo]);

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

        {data.map((item, index) => (
          <Test lesson={item.LessonName} desc={item.Topic} date={item.SprawdzianDate} key={index} />
        ))}

        {isDemo && data.length > 0 && <YouTubeSearch examData={data} />}

        {!isDemo && data.map((item, index) => (
          <React.Fragment key={index}>
            <Divider style={{ marginTop: 10 }} />
            <Text category='h5' style={{ marginLeft: 20, marginTop: 50 }}>
              Materiały do nauki ({item.LessonName}):
            </Text>
            <Text appearance='hint' style={{ marginLeft: 20, marginBottom: 20 }}>
              Na nadchodzące sprawdziany
            </Text>
          </React.Fragment>
        ))}
      </ScrollView>
    </Layout>
  );
}
