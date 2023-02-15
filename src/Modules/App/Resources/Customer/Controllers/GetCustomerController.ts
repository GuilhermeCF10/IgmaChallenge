import { Request, Response } from "express";
import { GetCustomerService } from "../Services/GetCustomerService";

export class GetCustomerController {
  async handle(request: Request, response: Response) {
    const { cpf } = request.body;

    // Get Customer Service
    const getCustomerService = new GetCustomerService();

    const result = await getCustomerService.execute({
      cpf,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
