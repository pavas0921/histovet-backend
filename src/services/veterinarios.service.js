import Veterinario from "../models/Veterinarios.js";
import { passwordEncrypt } from "../utils/passwordUtils.js";

export const addVeterinarian = async (data) => {
  const { nombres, apellidos, especialidad, numeroMatricula, cedula, email, password } = data;
  const encryptedPassword = passwordEncrypt(password);

  //Crear veterinario
  const veterinario = await Veterinario.create({
    nombres,
    apellidos,
    especialidad,
    numeroMatricula,
    cedula,
    email,
    password: encryptedPassword,
  });
  return veterinario;
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
