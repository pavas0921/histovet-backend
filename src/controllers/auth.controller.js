import { veterinarianLogin } from "../services/auth.services.js";
import { HTTP_RESPONSES } from "../utils/httpResponses.js";

export const login = async (req, res) => {
  try {
    const loginResponse = await veterinarianLogin(req.body);
    if (!loginResponse.success) {
      return res.status(+HTTP_RESPONSES.unauthorized).json({
        success: false,
        error: loginResponse.errors,
        token: null,
      });
    }
    return res.status(+HTTP_RESPONSES.ok).json({
      success: true,
      error: null,
      token: loginResponse.token,
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
