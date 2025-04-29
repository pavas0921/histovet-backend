import { addUser } from "../services/user.service.js";
import { HTTP_RESPONSES } from "../utils/httpResponses.js";

export const createUser = async (req, res) => {
  try {
    const response = await addUser(req.body);

    if (!response.success) {
      return res.status(+HTTP_RESPONSES.badRequest).json({
        success: false,
        message: "Error en validación",
        errors: response.errors,
        data: null, // Mejor usar null que array vacío para objetos
      });
    }

    return res.status(+HTTP_RESPONSES.created).json({
      success: true,
      message: "Usuario creado exitosamente",
      data: response.user,
      errors: null,
    });
  } catch (error) {
    console.error("⚠️ Error en createVeterinarian:", error); // Mejor console.error

    return res.status(+HTTP_RESPONSES.serverError).json({
      success: false,
      message: "Error interno del servidor",
      errors: ["Error procesando la solicitud"], // Mensaje genérico para cliente
      data: null,
    });
  }
};

export const existUser = async (data) => {
  const { cedula, email } = data;
  return Veterinario.findOne({
    $or: [{ cedula }, { numeroMatricula }, { email: email.toLowerCase().trim() }],
  });
};
