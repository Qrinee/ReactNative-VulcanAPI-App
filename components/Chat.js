import React, { useState, useEffect } from 'react';
import { ListItem, Avatar, Button, Text } from '@ui-kitten/components'; // Import Button and Avatar

export default function Chat({ title, navigation, ID, date }) {
    const ItemImage = (props) => (
        <Avatar
            {...props}
            style={[props.style]}
            source={require('../assets/chat-icon.png')}
        />
    );

    return (
        <ListItem
            title={title}
            description={date}
            accessoryLeft={ItemImage}
            onPress={() => navigation.navigate("Wiadomości", {id: ID})}
        />
    );
}
