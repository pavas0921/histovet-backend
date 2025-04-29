export const validateUserCreate = (data) => {
  const { firstName, lastName, documentId, email, password } = data;
  const errors = [];

  if (!firstName) errors.push("El campo 'nombres' es obligatorio");
  if (!lastName) errors.push("El campo 'apellidos' es obligatorio");
  if (!documentId) errors.push("El campo 'identificació' es obligatorio");
  if (!email) errors.push("El campo 'email' es obligatorio");
  if (!password) errors.push("El campo 'password' es obligatorio");

  return {
    isValidUser: errors.length === 0,
    userErrors: errors,
  };
};

export const passwordValidator = (password) => {
  const errors = [];

  // Utiliza expresiones regulares para buscar letras mayúsculas, números y caracteres especiales.
  const capsRegex = /[A-Z]/;
  const numbersRegex = /[0-9]/;
  const specialCharsRegex = /[^a-zA-Z0-9\s]/;

  // Verifica si cada requisito se cumple.
  const hasCaps = capsRegex.test(password);
  const hasNumbers = numbersRegex.test(password);
  const hasSpecialChars = specialCharsRegex.test(password);

  if (password.length < 8 || !hasCaps || !hasNumbers || !hasSpecialChars) {
    errors.push(
      "La contraseña no cumple con los requisios de seguridad, debe tener al menos 8 caracteres, una letra mayúscula, un número y un caracter especial"
    );
  }

  return {
    isValidPassword: errors.length === 0,
    passwordErrors: errors,
  };
};
