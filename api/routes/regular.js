import { Router } from "express";
import regularController from "../controllers/regularController"

const router = Router();
router.get("/", regularController);

export default router;
