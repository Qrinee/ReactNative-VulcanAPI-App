import {Layout, Text, Button } from '@ui-kitten/components';
import React from 'react'
import HomeWork from './HomeWork';
import CreateHomeWork from './CreateHomeWork';

export default function HomeWorksScreen() {
  return (
    <Layout>
        <CreateHomeWork />
        <HomeWork lesson={"Matematyka"} desc={"Zadanie 5.11 strona 210"} />
    </Layout>
  )
}