import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "El campo nombre es obligatorio"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "El campo apellidos es obligatorio"],
      trim: true,
    },
    documentId: {
      type: String,
      required: [true, "El campo identifiacion es obligatorio"],
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Por favor ingresa un email válido"],
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      select: false, // No se devuelve en las consultas
      minlength: [8, "La contraseña debe tener mínimo 8 caracteres"],
    },
    idRol: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
      },
    ],

    //Permite array vacio al crear el usuario
    idCompany: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
