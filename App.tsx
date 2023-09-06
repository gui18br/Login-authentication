import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './app/screens/Login';
import { List } from './app/screens/List';
import { Details } from './app/screens/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { Test } from './app/screens/Test';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='My todos' component={List} />
      <InsideStack.Screen name='details' component={Details} />
      <InsideStack.Screen name='test' component={Test} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        {user ? (<Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: true }}/>) : 
        (<Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>)}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}