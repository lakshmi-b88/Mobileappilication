import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.freepik.com/premium-photo/mexican-food-black-background_23-2147740704.jpg?w=360',
        }}
        style={styles.image}
      />
      <Text style={styles.heading}>Grab your food now</Text>
      <Text style={styles.heading1}>Food For Everyone</Text>
      <Text style={styles.quote}>
        " I won't be impressed with technology until I can download food."
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Login')}
      />

      <Text style={styles.signupText}>
        Don't have an account?{' '}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
  },
  heading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
  },
  quote: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  signupText: {
    marginTop: 20,
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  heading1: {
    fontFamily: 'sans-serif',
    color: 'orange',
    position: 'relative',
    top: -130,
    fontStyle: 'italic',
    fontSize: 25,
  },
});

export default WelcomeScreen;
