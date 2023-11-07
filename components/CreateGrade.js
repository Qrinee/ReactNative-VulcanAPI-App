import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, Card, Input, Modal, Select, SelectItem } from '@ui-kitten/components'; // Importujemy Select i SelectItem
import { StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native';
import { useUserInfoContext } from './UserInfoContext';
import { useRefreshContext } from './RefreshContext';


export default function CreateGrade({targets}) {

    const [selected, setSelected] = React.useState("");

    const data = [
      {key:'1', value:'Matematyka',},
      {key:'2', value:'Fizyka'},
      {key:'3', value:'Biologia'},
      {key:'4', value:'Chemia'},
      {key:'5', value:'WF'},
      {key:'6', value:'Język Angielski'},
      {key:'7', value:'Język Polski'},
      {key:'8', value:'Język Niemiecki'},
      {key:'9', value:'Religia'},
      {key:'10', value: 'Informatyka'},
      {key: '11', value: 'Pracowania AD'},
      {key: '12', value: 'Pracowania SIAI'},
      {key: '13', value: 'Podstawy Przedsiębiorczości'},
      {key: '14', value: 'Historia'},
      {key: '15', value: 'Pracowania Baz Danych'},
      {key: '16', value: 'Pracowania Aplikacji'},
      {key: '17', value: 'Geografia'},
  ]

    useEffect(() => {

    }, [data])

  
  const [visible, setVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState(0);
  const [target, setTarget] = useState('')
  const {userInfo, setUserInfo} = useUserInfoContext()
  const {refresh, setRefresh} = useRefreshContext()
  const [info, setInfo] = useState('')
  const handleCreateTarget = () => {
    console.log(targets);
    if (!targets.find(target => target.subjectName === selected)) {
      fetch('http://146.59.44.77:8080/createTarget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subjectName: selected,
          userid: userInfo.username,
          gradetarget: parseFloat(target),
        }),
      })
        .then(() => {
          setVisible(false);
          setRefresh(true);
        });
    } else {
      setInfo('Nie możesz do tego samego przedmiotu dodać celu');
    }
  };
  const handleInputFocus = () => {
    setModalPosition(-100);
  };

  const handleInputBlur = () => {
    setModalPosition(0);
  };

  const onOptionSelect = (index) => {
    setSelectedOption(index); 
  };


  return (
    <>
     
      <Modal

        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          setVisible(false);
          handleInputBlur();
        }}
        style={{ width: '90%', marginTop: modalPosition, height: '90%' }}
      >
           <ScrollView>
        <Card disabled={true}>
        
          <Text category='h1' style={{ marginTop: 10, marginBottom: 10}}>Dodaj cel</Text>
          <Text status='danger'>{info}</Text>
          <Text appearance='hint' category='label' style={{marginBottom: 5}} >Przedmiot</Text>


          <SelectList 
          placeholder='Wybierz przedmiot...'
          boxStyles={{
            borderColor: '#11192e',
            backgroundColor: '#1b2036',
            color: 'white', 
          }}
          dropdownTextStyles={{
            color: '#959fb7'
          }}
          inputStyles={{
            color: 'white'
          }}
          disabledItemStyles={{
            color: '#959fb7'
          }}
        setSelected={(val) => setSelected(val)} 
        value={target}
        data={data} 
        save="value"
        />


          <Input
            label="Twój cel"
            style={{ marginTop: 10 }}
            placeholder="Wpisz cel np. 4.00"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={text => setTarget(text)}
          />
          <Button style={{ marginTop: 30 }} onPress={handleCreateTarget}>
            Zapisz
          </Button>
          <Button appearance='outline' style={{ marginTop: 5 }} onPress={() => {
            setVisible(false);
            handleInputBlur();
          }}>
            Anuluj
          </Button>
         
        </Card>
        </ScrollView>
      </Modal>


      <View style={{ margin: 20, fontSize: 10 }}>
        <Button appearance='outline' onPress={() => {
          setVisible(true);
          handleInputBlur();
        }}>
          + Dodaj cel
        </Button>
      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    tintColor: null,
  },
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

