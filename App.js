import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';

const callApi = async () => {
  const config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    // headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }
  };

  try {
    const response = await axios(config);
    const data = response.data;
    console.log(data);
    Alert.alert(data.title);
  } catch (error) {
    console.error('Error:', error);
  }
};

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
      <Button title="Log in" color="#f194ff" onPress={callApi} />
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
