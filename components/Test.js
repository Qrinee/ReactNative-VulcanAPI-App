import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Modal } from 'react-native';
import * as ClipBoard from 'expo-clipboard'

export default function Test({ lesson, desc, date }) {

  const InstallButton = ({ onPress }) => (
        <>
            <Button size='tiny' onPress={onPress} status='danger' appearance='ghost'>
                USUŃ
            </Button>
        </>
  );

  const ItemImage = (props) => (
    <Avatar
      {...props}
      style={[props.style, styles.itemImage]}
      source={require('../assets/book.png')}
    />
  );

  return (
    <>
      <ListItem
        title={lesson + " | " + date}
        description={desc}
        accessoryLeft={ItemImage}
        accessoryRight={<InstallButton  />}
        style={{marginTop: 5}}
      />
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
