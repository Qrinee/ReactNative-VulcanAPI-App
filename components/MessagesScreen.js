import React, { createContext, useState } from 'react';
import { Layout, Text, Avatar, Button, Divider } from '@ui-kitten/components';
import { View, ScrollView } from 'react-native';
import Class from './Class';
import CreateGroup from './CreateGroup';
import Notice from './Notice';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from './AppContext';

export default function MessagesScreen({ navigation }) {
  const { isDemo, setIsDemo } = useAppContext();
  const [day, setDay] = useState(new Date());

  const data = [
    {
      key: 0,
      title: 'Zbiórka na kwiaty',
      desc: 'Zbiórka na kwiaty 10zł dla suszyło xd. Przynieście na jutro najlepiej jak nie to wpierdol',
      date: '23.10.2023',
    },
    {
      key: 1,
      title: 'Mikołajki klasowe',
      desc: 'Kto bierze udział niech napisze mi na messengerze.',
      date: '23.10.2023',
    },
    {
      key: 2,
      title: 'Zbiórka na pieski',
      desc: 'Zbiórka na schronisko 20zł ale można dać mniej jeżeli ktoś nie posiada',
      date: '23.10.2023',
    },
    {
      key: 3,
      title: 'Jutro skrócone lekcje',
      desc: '24.10.2023 będą skrócone lekcje. Plan lekcji macie na stronie szkoły',
      date: '23.10.2023',
    },
  ];

  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <ScrollView>
        <Text category='h1' style={{ marginLeft: 20, marginTop: 50 }}>
          Witaj HackHero 🔥
        </Text>
        {isDemo && (
          <Text appearance='hint' style={{ marginLeft: 20 }}>
            Tryb demo jest aktywny.
          </Text>
        )}
        <Text appearance='hint' style={{ marginLeft: 20 }}>
          Dzisiaj jest dzień: {day.toLocaleDateString()}
        </Text>
        <CreateGroup />
        <Text category='h5' style={{ marginLeft: 20, marginBottom: 10 }}>
          Moje grupy:
        </Text>
        <Divider />
        {isDemo && (
          <Class
            title={'Klasa 3TP'}
            lastMessage={'User: Hello world'}
            ID={1232131312}
            navigation={navigation}
          />
        )}
        <Text category='h3' style={{ marginLeft: 20, marginTop: 50 }}>
          Ogłoszenia klasowe 📜
        </Text>
        <Text appearance='hint' style={{ marginLeft: 20 }}>
          Spraw by nic cię nie ominęło!
        </Text>
        <View style={{ margin: 20 }}>
          <Button appearance='outline' status='info'>
            + Dodaj ogłoszenie
          </Button>
        </View>
        {isDemo &&
          data.map((item) => (
            <Notice key={item.key} title={item.title} desc={item.desc} date={item.date} navigation={navigation} />
          ))}
      </ScrollView>
    </Layout>
  );
}
