import User from "../models/Usuarios.js";
import { validateUserCreate, passwordValidator } from "../validators/user.validator.js";
import { passwordEncrypt } from "../utils/passwordUtils.js";

export const addUser = async (data) => {
  try {
    const { firstName, lastName, documentId, email, password, idRol } = data;

    const { isValidUser, userErrors } = validateUserCreate(data);
    if (!isValidUser) {
      return { success: false, errors: userErrors, user: null };
    }

    const existingUser = await existUser(data);
    console.log(existingUser);
    if (existingUser) {
      return {
        success: false,
        errors: ["El usuario ya está registrado!"],
        veterinario: null,
      };
    }

    const { isValidPassword, passwordErrors } = passwordValidator(data.password);
    if (!isValidPassword) {
      return { success: false, errors: passwordErrors, veterinario: null };
    }

    const encryptedPassword = passwordEncrypt(password);
    const user = await User.create({
      firstName,
      lastName,
      documentId,
      email,
      password: encryptedPassword,
      idRol,
    });

    // Limpiar datos sensibles antes de retornar
    const userSafe = user.toObject();
    delete userSafe.password;

    return {
      success: true,
      errors: null,
      user: userSafe,
    };
  } catch (error) {
    console.error("Error en addVeterinarian:", error);
    return {
      success: false,
      errors: ["Error interno al registrar el veterinario"],
      veterinario: null,
    };
  }
};

export const existUser = async (data) => {
  const { documentId, email } = data;
  return User.findOne({
    $or: [{ documentId }, { email: email.toLowerCase().trim() }],
  });
};
