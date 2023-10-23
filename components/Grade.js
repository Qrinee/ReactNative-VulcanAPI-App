import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text, ButtonGroup } from '@ui-kitten/components';


export const Grade = (props) => {
    const { lesson, goal, grades } = props;
  
    const calculateAverage = () => {
      return (grades.reduce((acc, current) => acc + current, 0) / grades.length).toFixed(2);
    };
  
    const calculateStatus = () => {
      const difference = calculateAverage() - goal;
  
      if (goal === 0) return '';
      if (difference >= 0) return 'success';
      if (difference >= -1) return 'primary';
      if (difference >= -2) return 'warning';
      return 'danger';
    };
  
    const gradeButtons = {
      1: { text: '1', color: '#D8304a' },
      2: { text: '2', color: '#8123DB' },
      3: { text: '3', color: '#CEDB23' },
      4: { text: '4', color: '#23A1DB' },
      5: { text: '5', color: '#23DB7B' },
    };
  
    return (
      <Layout style={styles.topContainer} level='1'>
        <Card
          status={calculateStatus()}
          style={styles.card}
          header={
            <View>
              <Text category='h6'>{lesson}</Text>
              <Text category='s1'>Średnia: {calculateAverage()}</Text>
              <Text category='s1'>Cel: {goal === 0 ? 'brak' : goal}</Text>
            </View>
          }
        >
          <ButtonGroup style={styles.buttonGroup}>
            {grades.map((grade) => (
              gradeButtons[grade] ? (
                <Button key={grade} style={{ backgroundColor: gradeButtons[grade].color }}>
                  {gradeButtons[grade].text}
                </Button>
              ) : null
            ))}
          </ButtonGroup>
        </Card>
      </Layout>
    );
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
  