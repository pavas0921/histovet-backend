import Propietario from "../models/propietario.model.js";

export const crearPropietario = async (data) => {
  const { veterinarioId, numeroDocumento } = data;

  // Verificar duplicados
  const existePropietario = await Propietario.findOne({ veterinarioId, numeroDocumento });
  if (existePropietario) {
    throw new Error("Este propietario ya está registrado para este veterinario");
  }

  // Crear y guardar
  return await Propietario.create(data);
};