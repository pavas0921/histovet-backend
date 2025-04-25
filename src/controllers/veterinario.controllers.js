import Veterinario from "../models/Veterinarios.js";
import { findAllVeterinarios, addVeterinarian } from "../services/veterinarios.service.js";
import { validarCrearVeterinario } from "../validators/veterinario.validator.js";
import { HTTP_RESPONSES } from "../utils/httpResponses.js";

export const getAllVeterinarian = async (req, res) => {
  try {
    const veterinarios = await findAllVeterinarios();

    if (veterinarios?.length > 0) {
      return res.status(HTTP_RESPONSES.ok).json({
        httpStatus: HTTP_RESPONSES.ok,
        data: veterinarios,
      });
    }

    return res.status(HTTP_RESPONSES.noContent).end();
  } catch (error) {
    return res.status(HTTP_RESPONSES.serverError).json({
      status: HTTP_RESPONSES.serverError,
      error: "Error al obtener veterinarios",
      details: error.message,
    });
  }
};

export const getVeterinarianByCedula = async (req, res) => {
  try {
    const cedula = req.params.cedula;
    const veterinario = await Veterinario.findOne({ cedula });
    if (veterinario && veterinario.length > 0) {
      res.status(HTTP_RESPONSES.ok).json({
        httpStatus: HTTP_RESPONSES.ok,
        data: veterinario,
        message: null,
      });
    } else {
      res.status(HTTP_RESPONSES.notFound).json({
        httpStatus: HTTP_RESPONSES.notFound,
        message: "Veterinario no encontrado",
      });
    }
  } catch (error) {
    res.status(HTTP_RESPONSES.serverError).json({
      httpStatus: HTTP_RESPONSES.serverError,
      message: "Error al obtener el veterinario " + error,
    });
  }
};

export const getVeterinarianByLicenseNumber = async (req, res) => {
  try {
    const numeroMatricula = req.params.licenseNumber;
    const veterinario = await Veterinario.findOne({ numeroMatricula });
    if (veterinario && veterinario.length > 0) {
      res.status(HTTP_RESPONSES.ok).json({
        httpStatus: HTTP_RESPONSES.ok,
        data: veterinario,
        message: null,
      });
    } else {
      res.status(HTTP_RESPONSES.notFound).json({
        httpStatus: HTTP_RESPONSES.notFound,
        message: "Veterinario no encontrado",
      });
    }
  } catch (error) {
    res.status(HTTP_RESPONSES.serverError).json({
      httpStatus: HTTP_RESPONSES.serverError,
      message: "Error al obtener el veterinario " + error,
    });
  }
};

export const createVeterinarian = async (req, res) => {
  const { isValid, errors } = validarCrearVeterinario(req.body);
  if (!isValid) return HTTP_RESPONSES.badRequest(res, errors.join(", "));
  console.log(req.body);
  const veterinarian = await addVeterinarian(req.body);
  if (veterinarian) {
    return res.status(HTTP_RESPONSES.created).json({
      httpStatus: HTTP_RESPONSES.created,
      data: veterinarian,
      message: "Veterinario creado exitosamente",
    });
  }
};
