import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { EstudiantesContext } from '../context/EstudiantesContext';

const GestionScreen = () => {
  const { estudiantes, actualizarEstado } = useContext(EstudiantesContext);

  const handleChangeEstado = (nombre, estado) => {
    const nuevoEstado = estado === 'Pendiente' ? 'Finalizada' : 'Pendiente';
    actualizarEstado(nombre, nuevoEstado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Estudiantes</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <View style={styles.estudianteContainer}>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Grado: {item.grado}</Text>
            <Text>Sección: {item.seccion}</Text>
            <Text>Observación: {item.observacion}</Text>
            <Text>Estado: {item.estado}</Text>
            <Button
              title={`Cambiar estado a ${item.estado === 'Pendiente' ? 'Finalizada' : 'Pendiente'}`}
              onPress={() => handleChangeEstado(item.nombre, item.estado)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  estudianteContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default GestionScreen;
