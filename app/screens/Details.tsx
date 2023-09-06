import { View, Text } from 'react-native';
import React from 'react';
import {  Button } from 'react-native';
import {NavigationProp} from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>
}

export function Details({ navigation }: RouterProps) {
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginBottom: 10}}><Button onPress={() => navigation.navigate('test')} title='Open Test'/></View>
        </View>
  );
}