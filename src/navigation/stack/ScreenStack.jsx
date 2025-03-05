import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerScreen from '../../modules/screen/PlayerScreen';
import PlaylistScreen from '../../modules/screen/PlaylistScreen';

const Stack = createStackNavigator();

export default function ScreenStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='PlaylistScreen' component={PlaylistScreen} />
      <Stack.Screen name='PlayerScreen' component={PlayerScreen} />
    </Stack.Navigator>
  );
}