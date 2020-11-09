import { Router } from "express";
import irregularController from "../controllers/irregularController";

const router = Router();
router.get("/", irregularController);

export default router;
