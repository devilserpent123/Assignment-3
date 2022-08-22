import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();
export const Main = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home"  />
        <MainStack.Screen name="Post"  />
    </MainStack.Navigator>
);