import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from './src/Screen/ChatList';
import Settings from './src/Screen/Settings';
import Chat from './src/Screen/Chat';
import SignIn from './src/Screen/SignIn';
import SignUp from './src/Screen/SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Ionicons} from '@react-native-vector-icons';
import {Provider} from 'react-native-paper';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRgO7sGpkFLikzNBp0kBhtZw0ZdYSL6cY',
  authDomain: 'chat-app-b1cc1.firebaseapp.com',
  projectId: 'chat-app-b1cc1',
  storageBucket: 'chat-app-b1cc1.appspot.com',
  messagingSenderId: '822859177204',
  appId: '1:822859177204:web:e8815775b814be6ce512a1',
};

// firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigation.navigate('SignUp');
      }
    });
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate('SignUp');
    }
  });
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Text>İcon</Text>;

          //  ( <Ionicons
          //     name={route.name === 'ChatList' ? 'chatbubbles' : 'settings'}
          //     color={color}
          //     size={size}
          //   />
          // );
        },
      })}>
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabsNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{presentation: 'fullScreenModal'}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{presentation: 'fullScreenModal'}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
