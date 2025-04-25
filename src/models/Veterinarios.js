import mongoose from "mongoose";

const veterinarioSchema = new mongoose.Schema(
  {
    nombres: {
      type: String,
      required: [true, "El campo nombre es obligatorio"],
      trim: true,
    },
    apellidos: {
      type: String,
      required: [true, "El campo apellidos es obligatorio"],
      trim: true,
    },
    especialidad: {
      type: String,
      required: [true, "El campo especialidad es obligatorio"],
      trim: true,
    },
    numeroMatricula: {
      type: String,
      required: [true, "El campo número de matricula es obligatorio"],
      unique: true,
      trim: true,
    },
    cedula: {
      type: String,
      required: [true, "El campo cédula es obligatorio"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El campo correo es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Por favor ingresa un correo válido"],
    },
    password: {
      type: String,
      required: [true, "El campo contraseña es obligatorio"],
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Veterinario", veterinarioSchema);
