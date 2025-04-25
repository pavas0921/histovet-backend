import Veterinario from "../models/Veterinarios.js";
import {
  validateVeterinarianFields,
  passwordValidator,
} from "../validators/veterinario.validator.js";
import { passwordEncrypt } from "../utils/passwordUtils.js";

export const addVeterinarian = async (data) => {
  try {
    const { nombres, apellidos, especialidad, numeroMatricula, cedula, email, password } = data;

    const { isValidVeterinarian, fieldErrors } = validateVeterinarianFields(data);
    if (!isValidVeterinarian) {
      return { success: false, errors: fieldErrors, veterinario: null };
    }

    const existingVet = await existVeterinarian(data);
    if (existingVet) {
      return {
        success: false,
        errors: ["El veterinario ya está registrado (cédula, matrícula o email en uso)"],
        veterinario: null,
      };
    }

    const { isValidPassword, passwordErrors } = passwordValidator(data.password);
    if (!isValidPassword) {
      return { success: false, errors: passwordErrors, veterinario: null };
    }

    const encryptedPassword = passwordEncrypt(password);
    const veterinario = await Veterinario.create({
      nombres,
      apellidos,
      especialidad,
      numeroMatricula,
      cedula,
      email: email.toLowerCase().trim(),
      password: encryptedPassword,
    });

    // Limpiar datos sensibles antes de retornar
    const veterinarioSafe = veterinario.toObject();
    delete veterinarioSafe.password;

    return {
      success: true,
      errors: null,
      veterinarian: veterinarioSafe,
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

export const findAllVeterinarios = async () => {
  try {
    const veterinarios = await Veterinario.find();
    return veterinarios;
  } catch (error) {
    console.error("error al obtener veterinarios ", error);
    throw error;
  }
};

export const existVeterinarian = async (data) => {
  const { cedula, numeroMatricula, email } = data;
  return Veterinario.findOne({
    $or: [{ cedula }, { numeroMatricula }, { email: email.toLowerCase().trim() }],
  });
};

export const findVeterinarianByEmail = async (email) => {
  return Veterinario.findOne({ email: email.toLowerCase().trim() }).select("+password");
};
