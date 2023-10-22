import { View } from 'react-native';
import React, { useState } from 'react';
import { Text, Avatar, Button, Card, Input, Modal, Select, SelectItem } from '@ui-kitten/components'; // Importujemy Select i SelectItem
import { StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native';


export default function CreateTest() {

    const [selected, setSelected] = React.useState("");
    const [date, setDate] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
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

    const type = [
        {key:'1', value:'Sprawdzian'},
        {key:'2', value:'Kartkówka'}
    ]
  
  const [visible, setVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState(0);


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
        
          <Text category='h1' style={{ marginTop: 10, marginBottom: 10}}>Dodaj test</Text>
          <Text appearance='hint' category='label' style={{marginBottom: 5}} >Wybierz date</Text>
          <Calendar date={date2} onDayPress={(e) => setDate(e)} />
          <Text category='h5' style={{margin: 10}}>{date.dateString}</Text>
          <Text appearance='hint' category='label' style={{marginBottom: 5}} >Przedmiot</Text>


          <SelectList 
          placeholder='Wybierz przedmiot...'
          boxStyles={{borderColor: '#d4d4d4', backgroundColor: '#fafafa'}}
          inputStyles={{color: 'gray'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        />

        <Text appearance='hint' category='label' style={{marginBottom: 5, marginTop: 10}} >Typ</Text>
          <SelectList 
          placeholder='Wybierz typ testu...'
          boxStyles={{borderColor: '#d4d4d4', backgroundColor: '#fafafa'}}
          inputStyles={{color: 'gray'}}
        setSelected={(val) => setSelected(val)} 
        data={type} 
        save="value"
        />

          <Input
            label="Temat testu"
            style={{ marginTop: 10 }}
            placeholder="Wpisz temat testu..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <Button style={{ marginTop: 30 }} appearance='ghost'>
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
          + Dodaj test
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

