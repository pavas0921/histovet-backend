export const validarCrearVeterinario = (data) => {
  const { nombres, apellidos, especialidad, numeroMatricula, cedula, email, password } = data;
  const errors = [];

  if (!nombres) errors.push("El campo 'nombres' es obligatorio");
  if (!apellidos) errors.push("El campo 'apellidos' es obligatorio");
  if (!especialidad) errors.push("El campo 'especialidad' es obligatorio");
  if (!numeroMatricula) errors.push("El campo 'numeroMatricula' es obligatorio");
  if (!cedula) errors.push("El campo 'cedula' es obligatorio");
  if (!email) errors.push("El campo 'email' es obligatorio");
  if (!password) errors.push("El campo 'password' es obligatorio");

  return {
    isValid: errors.length === 0,
    errors,
  };
};
