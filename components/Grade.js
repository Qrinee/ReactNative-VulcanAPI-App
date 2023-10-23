import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text, ButtonGroup } from '@ui-kitten/components';


export const Grade = (props) => {
    const average = (props.grades.reduce((acc, current) => acc + current, 0) / props.grades.length).toFixed(2)

    const calcStatus = () => {
        const difference = average - props.goal
        if(props.goal == 0)
            return ''
        if(difference >= 0)
            return 'success'
        else if(difference >= -1)
            return 'primary'
        else if(difference >= -2)
            return 'warning'
        else
            return 'danger'
    }

    return(
    <>
      <Layout
        style={styles.topContainer}
        level='1'
      >
        <Card
          status={calcStatus()}
          style={styles.card}
          header={
            <View>
              <Text category='h6'>
                {props.lesson}
              </Text>
              <Text category='s1'>
                Średnia: {average}
              </Text>
              <Text category='s1'>
                Cel: {props.goal == 0 ? 'brak' : props.goal}
              </Text>
            </View>
          }
        >
          <ButtonGroup style={styles.buttonGroup}>
            {props.grades.map(e => {
              switch (e) {
                case 1:
                  return <Button style={{ backgroundColor: '#D8304a' }}>1</Button>;
                case 2:
                  return <Button style={{ backgroundColor: '#8123DB' }}>2</Button>;
                case 3:
                  return <Button style={{ backgroundColor: '#CEDB23' }}>3</Button>;
                case 4:
                  return <Button style={{ backgroundColor: '#23A1DB' }}>4</Button>;
                case 5:
                  return <Button style={{ backgroundColor: '#23DB7B' }}>5</Button>;
                default:
                  return null;
              }
            })}
          </ButtonGroup>
        </Card>
      </Layout>
    </>
    )
    };

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
