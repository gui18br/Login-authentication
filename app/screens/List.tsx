import React from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationProp} from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';


interface RouterProps {
    navigation: NavigationProp<any, any>
}

export function List({ navigation }: RouterProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginBottom: 10}}><Button onPress={() => navigation.navigate('details')} title='Open Details'/></View>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout' />
    </View>
  );
}