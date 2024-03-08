// routes/employee.js

import express  from "express";
import{getEmployeeById, updateSkills, viewProjects, updateProjects} from "../controllers/employee.js";

const router = express.Router();

// Get employee by ID
router.get("/", getEmployeeById);

// Update employee skills
router.put("/", updateSkills);

// View employee's projects
router.get("/", viewProjects);

// Update employee's projects
router.put("/", updateProjects);

export default router;
