import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from 'react-native-paper';

export default function ChatList() {
  const [isDialogVisible, setISDialogVisible] = useState(false);

  return (
    <View style={styles.container}>
      <List.Item
        title="Fatma Zehra Çetin"
        description="Selam"
        left={() => <Avatar.Text label="FÇ" size={55} />}
      />
      <Divider inset />
      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setISDialogVisible(false)}>
          <Dialog.Title>Yeni Mesaj</Dialog.Title>
          <Dialog.Content>
            <TextInput label="Kullanıcı e-postasını girin!" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setISDialogVisible(false)}>İptal Et</Button>
            <Button>Onayla</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon="plus"
        style={styles.plus}
        onPress={() => {
          setISDialogVisible(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  plus: {position: 'absolute', bottom: 16, right: 16},
});
