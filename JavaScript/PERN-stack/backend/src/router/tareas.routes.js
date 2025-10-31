import Router from "express-promise-router";
import { listarTareas, listarTarea, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tareas.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { crearTareaSchema, actualizarTareaSchema } from "../schemas/tareas.schema.js";

const router = Router();

router.get("/tareas", isAuth, listarTareas);

router.get("/tareas/:id", isAuth, listarTarea);

router.post("/tareas", isAuth, validateSchema(crearTareaSchema), crearTarea);

router.put("/tareas/:id", isAuth, validateSchema(actualizarTareaSchema), actualizarTarea);

router.delete("/tareas/:id", isAuth, eliminarTarea);

export default router;