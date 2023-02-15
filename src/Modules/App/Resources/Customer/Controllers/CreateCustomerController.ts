import { Request, Response } from "express";
import { CreateCustomerService } from "../Services/CreateCustomerService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, cpf, birth } = request.body;

    // Creating Customer
    const createCustomerService = new CreateCustomerService();

    const result = await createCustomerService.execute({
      name,
      cpf,
      birth,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(201).json({
      message: "User Created Successfully",
    });
  }
}
