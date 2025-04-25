export const validarCrearPropietario = (data) => {
  const { veterinarioId, numeroDocumento, nombres, apellidos, telefono } = data;
  const errors = [];

  if (!veterinarioId) errors.push("El campo 'veterinarioId' es obligatorio");
  if (!numeroDocumento)
    errors.push("El campo 'numeroDocumento' es obligatorio");
  if (!nombres) errors.push("El campo 'nombres' es obligatorio");
  if (!apellidos) errors.push("El campo 'apellidos' es obligatorio");
  if (!telefono) errors.push("El campo 'telefono' es obligatorio");

  return {
    isValid: errors.length === 0,
    errors,
  };
};
