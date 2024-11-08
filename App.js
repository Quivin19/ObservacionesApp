import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistroScreen from './screens/RegistroScreen';
import GestionScreen from './screens/GestionScreen';
import { EstudiantesProvider } from './context/EstudiantesContext'; // Importar el contexto

const Stack = createStackNavigator();

const App = () => {
  return (
    <EstudiantesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registro">
          <Stack.Screen name="Registro" component={RegistroScreen} />
          <Stack.Screen name="Gestion" component={GestionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </EstudiantesProvider>
  );
};

export default App;
