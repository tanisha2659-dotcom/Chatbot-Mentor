import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import EmotionalHomeScreen from './src/screens/EmotionalHomeScreen';
import ExpressYourselfScreen from './src/screens/ExpressYourselfScreen';
import ChatScreen from './src/screens/ChatScreen';
import LifeScheduleScreen from './src/screens/LifeScheduleScreen';
import DashboardScreen from './src/screens/DashboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap = 'home-max';

          if (route.name === 'Home') {
            iconName = 'home-max';
          } else if (route.name === 'Mentor') {
            iconName = 'chat-bubble';
          } else if (route.name === 'Schedule') {
            iconName = 'calendar-today';
          } else if (route.name === 'Dashboard') {
            iconName = 'grid-view';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8ba88e',
        tabBarInactiveTintColor: '#737972',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#eae8e4',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={EmotionalHomeScreen} />
      <Tab.Screen name="Mentor" component={ExpressYourselfScreen} />
      <Tab.Screen name="Schedule" component={LifeScheduleScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="ConfidantChat" component={ChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
