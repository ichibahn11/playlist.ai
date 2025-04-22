import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens (to be created later)
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlaylistHistoryScreen from '../screens/PlaylistHistoryScreen';
import PlaylistPreviewScreen from '../screens/PlaylistPreviewScreen';

// Define the types for our navigation
export type RootStackParamList = {
  Main: undefined;
  PlaylistPreview: { playlistId: string };
};

export type MainTabParamList = {
  Home: undefined;
  PlaylistHistory: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Bottom tab navigator for main screens
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'PlaylistHistory') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="PlaylistHistory" component={PlaylistHistoryScreen} options={{ title: 'History' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// Root stack navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PlaylistPreview" 
          component={PlaylistPreviewScreen} 
          options={{ title: 'Playlist Preview' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 