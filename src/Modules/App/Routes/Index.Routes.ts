import { Router } from "express";
import { CustomerRoutes } from "../Resources/Customer/Routes/Index.Routes";

const appRoutes = Router();

appRoutes.use("/customer", CustomerRoutes);

export { appRoutes };
