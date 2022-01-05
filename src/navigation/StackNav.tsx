import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { GifScreen } from '../screens/GifScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { appTheme } from '../theme/appTheme';

export type RootStackParams = {
    SearchScreen: undefined,
    GifScreen: undefined,
  }

const Stack = createStackNavigator<RootStackParams>();

export const StackNav = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                cardStyle: {
                    ...appTheme.stackStyle
                },
                headerShown: false
            }}
        >
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="GifScreen" component={GifScreen} />
        </Stack.Navigator>
      );
}
