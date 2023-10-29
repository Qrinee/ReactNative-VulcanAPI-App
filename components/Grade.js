import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text, ButtonGroup } from '@ui-kitten/components';

export const Grade = ({ goal, lesson, grades }) => {
  const transformGrade = (grade) => {
    const gradeMap = {
      '5+': 5.25,
      '5': 5,
      '5-': 4.75,
      '4+': 4.25,
      '4': 4,
      '4-': 3.75,
      '3+': 3.25,
      '3': 3,
      '3-': 2.75,
      '2+': 2.25,
      '2': 2,
      '2-': 1.75,
      '1': 1,
    };
    return gradeMap[grade] || null;
  };

  const calculateAverage = () => {
    const numericGrades = grades
      .map((grade) => transformGrade(grade))
      .filter((grade) => grade !== null);
    if (numericGrades.length === 0) {
      return 0;
    }
    const sum = numericGrades.reduce((acc, current) => acc + current, 0);
    return (sum / numericGrades.length).toFixed(2);
  };

  const calculateStatus = () => {
    const difference = calculateAverage() - goal;

    if (goal === 0) return '';
    if (difference >= 0) return 'success';
    if (difference >= -1) return 'primary';
    if (difference >= -2) return 'warning';
    return 'danger';
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
          {grades.map((grade, index) => (
            <Button
              key={index}
              style={{ backgroundColor: gradeBtns(grade) }}
            >
              {grade}
            </Button>
          ))}
        </ButtonGroup>
      </Card>
    </Layout>
  );
};

const gradeBtns = (prop) => {
  switch (prop) {
    case '5+':
      return '#23DB7B';
    case '5':
      return '#23DB7B';
    case '5-':
      return '#23DB7B';
    case '4+':
      return '#23A1DB';
    case '4':
      return '#23A1DB';
    case '4-':
      return '#23A1DB';
    case '3+':
      return '#CEDB23';
    case '3':
      return '#CEDB23';
    case '3-':
      return '#CEDB23';
    case '2+':
      return '#8123DB';
    case '2':
      return '#8123DB';
    case '2-':
      return '#8123DB';
    case '1':
      return '#D8304a';
    default:
      return '#363636';
  }
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  card: {
    flex: 1,
    margin: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});
