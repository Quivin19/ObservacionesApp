// EstudiantesContext.js
import React, { createContext, useState } from 'react';

export const EstudiantesContext = createContext();

export const EstudiantesProvider = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  const actualizarEstado = (nombre, nuevoEstado) => {
    const estudiantesActualizados = estudiantes.map(estudiante =>
      estudiante.nombre === nombre
        ? { ...estudiante, estado: nuevoEstado }
        : estudiante
    );
    setEstudiantes(estudiantesActualizados);
  };

  return (
    <EstudiantesContext.Provider value={{ estudiantes, agregarEstudiante, actualizarEstado }}>
      {children}
    </EstudiantesContext.Provider>
  );
};
