import { Request, Response } from "express";
import { GetAllCustomersService } from "../Services/GetAllCustomersService";

export class GetAllCustomersController {
  async handle(request: Request, response: Response) {
    const { skip, take } = request.query;

    // Get All Customers Service
    const getAllCustomersService = new GetAllCustomersService();

    const result = await getAllCustomersService.execute({
      skip: !skip ? 0 : Number(skip),
      take: !take ? 5 : Number(take),
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
