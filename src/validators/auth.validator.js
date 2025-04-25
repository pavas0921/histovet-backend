export const validateCredentials = (data) => {
  const { email, password } = data;
  const errors = [];

  if (!email) errors.push("El campo 'email' es obligatorio");
  if (!password) errors.push("El campo 'password' es obligatorio");

  return {
    isValidCredentials: errors.length === 0,
    credentialsErrors: errors,
  };
};
