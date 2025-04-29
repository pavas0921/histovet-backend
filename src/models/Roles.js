import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: [true, "El campo nombre es obligatorio"],
    trim: true,
  },
  roleDescription: {
    type: String,
    required: [true, "El campo descripcion es obligatorio"],
    trim: true,
  },
  rolePermissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permission", // Referencia al modelo Permission
    },
  ],
});

export default mongoose.model("Role", RoleSchema);
