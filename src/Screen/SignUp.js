import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button, Subheading} from 'react-native-paper';
import firebase from 'firebase/app';

export default function SignUp() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setISLoading] = useState(false);
  const [error, setError] = useState('');

  const createAccount = async () => {
    setISLoading(true);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(mail, password);

      await response.user.updateProfile({displayName: name});
      NavigationContainer.popToTop();
      setISLoading(false);
    } catch (e) {
      setISLoading(false);
      setError(e.message);
    }
  };

  return (
    <View style={{margin: 16}}>
      {!!error && (
        <Subheading style={{color: 'red', textAlign: 'center'}}>
          {error}
        </Subheading>
      )}
      <TextInput
        label="İsim"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        label="Email"
        style={{marginTop: 12}}
        value={mail}
        onChangeText={text => setMail(text)}
      />
      <TextInput
        label="Şifre"
        style={{marginTop: 12}}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <Button compact>GİRİŞ YAP</Button>
        <Button
          mode="contained"
          onPress={() => createAccount()}
          loading={isLoading}>
          KAYIT OL
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
