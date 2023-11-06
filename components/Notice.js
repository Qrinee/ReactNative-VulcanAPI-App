import React from 'react'
import {  View } from 'react-native'
import { Card, Text, Button } from '@ui-kitten/components'
export default function Notice({title, date, desc, author}) {
  return (
    <Card style={{marginTop: 5}}  header={<View>
        <Text>{author}</Text>
        <Text category='h5'>{title}</Text>
        <Text appearance='hint'>Data wystawienia: {date}</Text>
      </View>
      }>
          <Text>{desc}</Text>
          {/* <Button status='danger' appearance='ghost' style={{marginTop: 10}}>Usuń</Button> */}
    </Card>
  )
}
