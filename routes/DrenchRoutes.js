import { Router } from "express";
import { getDrenchInfo } from "../controllers/DrenchControllers.js";
import { editDrenchInfo } from "../controllers/DrenchControllers.js";
import { incrementDrenchCount } from "../controllers/DrenchControllers.js";
import { addDrench } from "../controllers/DrenchControllers.js";

const drenchRouter = Router();
drenchRouter.post("/add-drench", addDrench);
drenchRouter.get("/getDrenchInfo", getDrenchInfo);
drenchRouter.post("/editDrenchInfo", editDrenchInfo);
drenchRouter.post("/incDrenchCount", incrementDrenchCount);

export default drenchRouter;
