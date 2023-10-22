import React, { useState } from 'react';
import { Layout, Text, Avatar, Button, ListItem, Divider, Card, Input } from '@ui-kitten/components';
import { View, Modal } from 'react-native';
import Class from './Class';
import CreateGroup from './CreateGroup';



export default function MessagesScreen() {
  return (
    <Layout>
      <CreateGroup />
      <Divider />
      <Class title={"Klasa 3TP"} lastMessage={"User: Hello world"} ID={1232131312} />
    </Layout>
  );
}

