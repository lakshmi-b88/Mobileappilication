import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSignup = async () => {
    try {
      // Check if passwords match before saving
      if (password !== confirmPassword) {
        console.log('Passwords do not match.');
        return;
      }

      // Save the signup details to AsyncStorage
      await AsyncStorage.setItem('username', userName);
      await AsyncStorage.setItem('password', password);

      console.log('User Name:', userName);
      console.log('Email:', email);
      console.log('Password:', password);

      navigation.navigate('Login'); // Navigate to the Login screen after signup
    } catch (error) {
      console.log('Error storing data in AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdni.iconscout.com/illustration/premium/thumb/signup-screen-of-e-wallet-app-3323727-2791556.png',
        }}
        style={styles.image}
      />
      <Text style={styles.heading}>Signup Your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Text>{showConfirmPassword ? 'Hide' : 'show'} </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.horizontalLine}></View>
      <Text style={styles.LoginText}>
        Already have an account{'? '}
        <Text
          style={styles.LoginLink}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
  },
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
  image: {
    height: 150,
    width: 300,
    marginTop: -50,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  signupButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: '80%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
    marginBottom: -90,
  },
  LoginText: {
    position: 'relative',
    top: 100,
  },
  LoginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
