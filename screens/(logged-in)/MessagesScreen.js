import React, {  useState, useEffect } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import Class from '../../components/Class';
import CreateGroup from '../../components/alerts/CreateGroup';
import Notice from '../../components/Notice';
import { useUserInfoContext } from '../../services/UserInfoContext';
import CreateAnnouncment from '../../components/alerts/CreateAnnouncment';
import { useRefreshContext } from '../../services/RefreshContext';

export default function MessagesScreen({ navigation }) {
  const [day, setDay] = useState(new Date());
  const {userInfo, setUserInfo} = useUserInfoContext()
  const [chats, setChats] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [userData, setUserData] = useState('')
  const {refresh, setRefresh} = useRefreshContext()
  useEffect(() => {
    console.log('Rozpoczęto pobieranie danych z demoLogin');
    fetch('http://146.59.44.77:8080/demoLogin')
      .then(e => e.json())
      .then(e => {
        console.log('Pomyślnie pobrano dane z demoLogin:', e);
        setUserData(e.username);
        setUserInfo(e)
      })
      .then(() => {
        console.log('Rozpoczęto pobieranie danych z getAllGroups');
        return fetch('http://146.59.44.77:8080/getAllGroups').then(e => e.json());
      })
      .then(e => {
        console.log('Pomyślnie pobrano dane z getAllGroups:', e);
        setChats([...e]);
      })
      .then(() => {
        console.log('Rozpoczęto pobieranie danych z getAnnouncments');
        return fetch('http://146.59.44.77:8080/getAllNextAnnouncements').then(e => e.json());
      })
      .then(e => {
        console.log(e)
        setAnnouncements([...e])
        setRefresh(false)
      })
    

  }, [refresh]);



  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1 }}>
      <ScrollView>
        <Text category='h1' style={{ marginLeft: 20, marginTop: 50 }}>
          Witaj {userData}🔥
        </Text>
        {(
          <Text appearance='hint' style={{ marginLeft: 20 }}>
             Połączenie z bazą danych pomyślne
          </Text>

        )}
        <Text appearance='hint' style={{ marginLeft: 20 }}>
          Dzisiaj jest dzień: {day.toLocaleDateString()}
        </Text>
        <CreateGroup numberOfGroups={chats.length} />
        <Text category='h5' style={{ marginLeft: 20, marginBottom: 10 }}>
          Moje grupy:
        </Text>
        <Divider />
        {
          chats.length === 0 ? (
            <Text appearance="hint" style={{marginLeft: 20}}>Brak dostępnych grup.</Text>
          ): (
          chats.map(e => (
            <Class
              title={e.groupName}
              lastMessage={e.groupToken}
              ID={e.groupToken}
              navigation={navigation}
              key={e.groupToken}
            /> )
            )
          )
        }
        <Text category='h3' style={{ marginLeft: 20, marginTop: 50 }}>
          Ogłoszenia klasowe 📜
        </Text>
        <Text appearance='hint' style={{ marginLeft: 20 }}>
          Spraw by nic cię nie ominęło!
        </Text>
        <CreateAnnouncment user={userData} />
        {
          announcements.length === 0 ? (
            <Text appearance="hint" style={{marginLeft: 20}}>Brak dostępnych ogłoszeń.</Text>
          ): (
            announcements.map(e => (
              <Notice title={e.announcementsTitle} date={e.announcementsDate} desc={e.announcementstContent} author={e.announcementsAuthor} key={e.announcementsID}  />
            ))
          )
        }
        <Layout style={{margin: 20}}></Layout>
      </ScrollView>

    </Layout>
  );
}
