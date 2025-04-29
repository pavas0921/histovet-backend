import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  permissionName: {
    type: String,
    required: [true, "El campo nombre es obligatorio"],
    trim: true,
  },
  permissionDescription: {
    type: String,
    required: [true, "El campo descripcion es obligatorio"],
    trim: true,
  },
});

export default mongoose.model("Permission", permissionSchema);
