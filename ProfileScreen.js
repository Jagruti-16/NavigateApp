import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileScreen = ({navigation, route}) => {
    return <Text>This is 's profile</Text>;
  };

 export default ProfileScreen;