import mongoose from "mongoose";

const propietarioSchema = new mongoose.Schema(
  {
    veterinarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Veterinario", // Referencia al modelo Veterinario
      required: true,
    },
    numeroDocumento: {
      type: String,
      required: [true, "El número de documento es obligatorio"],
      trim: true,
    },
    nombres: {
      type: String,
      required: [true, "Los nombres son obligatorios"],
      trim: true,
    },
    apellidos: {
      type: String,
      required: [true, "Los apellidos son obligatorios"],
      trim: true,
    },
    telefono: {
      type: String,
      required: [true, "El teléfono es obligatorio"],
      trim: true,
    },
    correo: {
      type: String,
      trim: true,
      lowercase: true,
    },
    direccion: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Propietario", propietarioSchema);
