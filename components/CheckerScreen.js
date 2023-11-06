import React, {  useEffect } from 'react';
import { Layout, Text, Button, Divider, Spinner } from '@ui-kitten/components';
import { View, ScrollView } from 'react-native';
import Class from './Class';
import CreateGroup from './CreateGroup';
import Notice from './Notice';

export default function CheckerScreen({ navigation }) {
    useEffect(() => {
        fetch('http://146.59.44.77:8080/demoLogin')
        .then(e => e.text())
        .then(e => e == "not logged" ? navigation.navigate("Login") : navigation.navigate("Home"))
    }, [])
  return (
    <Layout style={{ backgroundColor: '#202129', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner size="giant"></Spinner>
    </Layout>
  );
}
