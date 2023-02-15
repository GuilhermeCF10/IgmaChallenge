import { Router } from "express";
import { appRoutes } from "../Modules/App/Routes/Index.Routes";

const router = Router();

router.use("/app", appRoutes);

export { router };
