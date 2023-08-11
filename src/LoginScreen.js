import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for showing or hiding the password

  const handleLogin = async () => {
    try {
      // Retrieve the stored username and password from AsyncStorage
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        console.log('Login successful');
        navigation.navigate('Home'); // Navigate to the Home screen
      } else {
        console.log('Login failed. Invalid username or password.');
      }
    } catch (error) {
      console.log('Error retrieving data from AsyncStorage:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQi5iaHWKF05BFF5LHKo2Hb9c6C_-rJo3Zg&usqp=CAU',
        }}
        style={styles.image}
      />

      <Text style={styles.heading}> User Login </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword} // Show or hide the password based on the showPassword state
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordButtonText}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.horizontalLine}></View>
      <Text style={styles.signupText}>
        Don't have an account{'? '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (Other styles)
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
  },
  showPasswordButton: {
    padding: 8,
  },
  showPasswordButtonText: {
    color: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 370,
    marginTop: -100,
    borderRadius: 5,
  },
  heading: {
    fontSize: 24,
    marginTop: 20,
    color: 'orange',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
    marginBottom: -90,
  },
  signupText: {
    position: 'relative',
    top: 100,
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
