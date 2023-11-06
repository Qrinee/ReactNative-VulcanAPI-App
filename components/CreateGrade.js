import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, Card, Input, Modal, Select, SelectItem } from '@ui-kitten/components'; // Importujemy Select i SelectItem
import { StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native';


export default function CreateGrade({api}) {

    const [selected, setSelected] = React.useState("");

    const data = []

    useEffect(() => {
        api.map((e, index) => {
            data.push({
                key: index,
                value: e.subject
            })
        })
        
    }, [data])

  
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
        
          <Text category='h1' style={{ marginTop: 10, marginBottom: 10}}>Dodaj cel</Text>
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
        data={data} 
        save="value"
        />


          <Input
            label="Twój cel"
            style={{ marginTop: 10 }}
            placeholder="Wpisz cel np. 4.00"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <Button style={{ marginTop: 30 }} >
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

