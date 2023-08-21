import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Alert} from 'react-native';

const UselessTextInput = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button
        title="Log in"
        color="#f194ff"
        onPress={() =>
          Alert.alert('Successfull' + ' ' + username + ' ' + password)
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;
