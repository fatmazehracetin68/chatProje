import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, Title, Subheading, Button} from 'react-native-paper';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Avatar.Text label="FÇ" />
      <Title>Fatma Zehra Çetin</Title>
      <Subheading>fatimatuzehra.cetin@gmail.com</Subheading>
      <Button>Kayıt Ol</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
});
