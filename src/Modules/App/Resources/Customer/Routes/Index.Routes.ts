import { Router } from "express";
import { validateCPF } from "../Middlewares/Validate.Middleware";
import { CreateUserController } from "../Controllers/CreateCustomerController";
import { GetAllCustomersController } from "../Controllers/GetAllCustomersController";
import { GetCustomerController } from "../Controllers/GetCustomerController";

const CustomerRoutes = Router();

CustomerRoutes.post("/create", validateCPF, new CreateUserController().handle);

CustomerRoutes.get("/get_all", new GetAllCustomersController().handle);

CustomerRoutes.post("/get", validateCPF, new GetCustomerController().handle);

export { CustomerRoutes };
