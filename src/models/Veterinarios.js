import mongoose from 'mongoose';

const veterinarioSchema = new mongoose.Schema({
  nombres: { type: String, required: true, trim: true },
  apellidos: { type: String, required: true, trim: true },
  especialidad: { type: String, required: true, trim: true },
  numeroMatricula: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  cedula: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true, 
    select: false 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  }
}, { timestamps: true });


export default mongoose.model('Veterinario', veterinarioSchema);