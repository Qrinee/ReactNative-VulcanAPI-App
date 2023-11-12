import React, {  useEffect } from 'react';
import { Layout, Spinner } from '@ui-kitten/components';


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
