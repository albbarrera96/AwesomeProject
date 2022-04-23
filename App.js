// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { AppRegistry } from 'react-native';
import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { Avatar, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import {View} from 'react-native'
// import Test from 'Test';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = () => (
  <View style={{ marginTop: 30 }}>
    <Card style={{ marginTop: 15 }}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <TextInput
        style={{ marginTop: 15 }}
        label='Outlined input'
        mode='outlined'
      />
      <TextInput
        style={{ marginTop: 15 }}
        label='Flat input'
        mode='flat'
      />        
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  </View>

);

export default CardComponent;

/*const MyComponent = () => (

  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

export default MyComponent;*/

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
  }
}); */
