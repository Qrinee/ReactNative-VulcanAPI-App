import React, { useEffect, useState } from 'react';
import { Text, Avatar, Button, ListItem, Card, Input, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Modal } from 'react-native';
import * as ClipBoard from 'expo-clipboard'

export default function User({ fullName, status, ID }) {

  const InstallButton = ({ onPress }) => (
    <>
    {status == 'Członek' ? (
        <>
            <Button size='tiny' onPress={onPress}  style={{marginRight: 5}}>
                MODERATOR
            </Button>
            <Button size='tiny' onPress={onPress} status='danger'>
                USUŃ
            </Button>
        </>
    ): null}

    </>
  );

  const ItemImage = (props) => (
    <Avatar
      {...props}
      style={[props.style, styles.itemImage]}
      source={require('../assets/user.png')}
    />
  );

  return (
    <>
      <ListItem
        title={fullName}
        description={status}
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
