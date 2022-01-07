import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigation/StackNav';
import { GifProvider } from './src/contexts/GifContext';
import { StatusBar } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle={'dark-content'} translucent/>
      <GifState>
        <StackNav/>
      </GifState>
    </NavigationContainer>
  )
}

const GifState = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return (
    <GifProvider>
      {children}
    </GifProvider>
  )
}