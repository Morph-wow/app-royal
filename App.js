import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home/home';
import Search from './pages/Search/search';
import ExperienceDetail from './pages/ExperienceDetail/experiencedetail';
import Profile from './pages/Profile/profile';

console.log('Home:', Home); 
console.log('Search:', Search); 
console.log('ExperienceDetail:', ExperienceDetail); 
console.log('Profile:', Profile);

const Stack = createStackNavigator();

export default function App()  {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ExperienceDetail" component={ExperienceDetail} />
        <Stack.Screen name="Profile"  component={Profile} />
      </Stack.Navigator>
   </NavigationContainer>
  );
} 

