import { validateCredentials } from "../validators/auth.validator.js";
import { findVeterinarianByEmail } from "../services/veterinarios.service.js";
import { passwordDecrypt } from "../utils/passwordUtils.js";
import { generateToken } from "../utils/tokenUtils/generateToken.js";

export const veterinarianLogin = async (data) => {
  const { isValidCredentials, credentialsErrors } = validateCredentials(data);
  if (!isValidCredentials) {
    return { success: false, errors: credentialsErrors, token: null };
  }

  const veterinarian = await findVeterinarianByEmail(data.email);
  if (!veterinarian) {
    return { success: false, errors: ["Correo y/o contraseña incorrecta"], token: null };
  }

  const isValidPassword = passwordDecrypt(data.password, veterinarian.password);
  if (!isValidPassword) {
    return { success: false, errors: ["Correo y/o contraseña incorrecta"], token: null };
  }

  if (!veterinarian.isActive) {
    return { success: false, errors: ["El usuario se encuenta deshabilitado"], token: null };
  }

  const token = generateToken(veterinarian);
  return {
    success: true,
    errors: null,
    token: token,
  };
};
