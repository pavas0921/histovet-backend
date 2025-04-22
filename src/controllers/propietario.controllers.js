import { validarCrearPropietario } from "../validators/propietario.validator.js";
import { crearPropietario } from "../services/propietario.service.js";
import { HTTP_RESPONSES } from "../utils/httpResponses.js";

export const registrarPropietario = async (req, res) => {
  try {
    // 1. Validar datos
    const { isValid, errors } = validarCrearPropietario(req.body);
    if (!isValid) return HTTP_RESPONSES.badRequest(res, errors.join(", "));

    // 2. Lógica de negocio
    const propietario = await crearPropietario(req.body);

    // 3. Respuesta exitosa
    HTTP_RESPONSES.created(res, propietario);

  } catch (error) {
    // 4. Manejo centralizado de errores
    if (error.message.includes("ya está registrado")) {
      return HTTP_RESPONSES.badRequest(res, error.message);
    }
    HTTP_RESPONSES.serverError(res, error.message);
  }
};