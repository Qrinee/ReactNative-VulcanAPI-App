import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Modal } from 'react-native';
import * as ClipBoard from 'expo-clipboard'

export default function Test({ lesson, desc, ID }) {

  const InstallButton = ({ onPress }) => (
        <>
            <Button size='tiny' onPress={onPress} status='danger'>
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
        title={lesson}
        description={desc}
        accessoryLeft={ItemImage}
        accessoryRight={<InstallButton  />}
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
