import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importado desde el paquete correcto
import { EstudiantesContext } from '../context/EstudiantesContext';


const RegistroScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [grado, setGrado] = useState('');
  const [seccion, setSeccion] = useState('');
  const [observacion, setObservacion] = useState('');
  const [estado, setEstado] = useState('Pendiente');

  const { agregarEstudiante } = useContext(EstudiantesContext); // Accedemos a la función para agregar estudiantes

  const handleRegister = () => {
    const nuevoEstudiante = { nombre, grado, seccion, observacion, estado };
    agregarEstudiante(nuevoEstudiante);
    navigation.navigate('Gestion');
  };

  return (
    <View style={styles.container}>
      <Text>Registrar Estudiante</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Grado"
        value={grado}
        onChangeText={setGrado}
        style={styles.input}
      />
      <TextInput
        placeholder="Sección"
        value={seccion}
        onChangeText={setSeccion}
        style={styles.input}
      />
      <TextInput
        placeholder="Observación"
        value={observacion}
        onChangeText={setObservacion}
        style={styles.input}
      />
      <Picker
        selectedValue={estado}
        onValueChange={(itemValue) => setEstado(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Finalizada" value="Finalizada" />
      </Picker>
      <Button title="Registrar Estudiante" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
});

export default RegistroScreen;
