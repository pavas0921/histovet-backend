import Veterinario from "../models/Veterinarios.js";
import { findAllVeterinarios, addVeterinarian } from "../services/veterinarios.service.js";
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
  try {
    const response = await addVeterinarian(req.body);

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
      message: "Veterinario creado exitosamente",
      data: response.veterinarian,
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
