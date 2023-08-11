import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20,
      }}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 10,
        }}
        placeholder="Search for food"
      />
      <TouchableOpacity style={{marginLeft: 10}}>
        <MaterialCommunityIcons name="magnify" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const Home1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SearchBar />
      <Text>User Logo</Text>
      <Tab.Navigator>
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="FoodItems" component={FoodItemsScreen} />
      </Tab.Navigator>
    </View>
  );
};

const CategoriesScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Categories</Text>
    </View>
  );
};

const FoodItemsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Food Items</Text>
    </View>
  );
};

export default Home1;
