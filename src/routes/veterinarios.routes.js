import express from "express";
import { getAllVeterinarian, createVeterinarian } from "../controllers/veterinario.controllers.js";

const router = express.Router();

//create task
router.get("/", getAllVeterinarian);
router.post("/", createVeterinarian);

export default router;
