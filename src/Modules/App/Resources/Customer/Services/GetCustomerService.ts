import { prisma } from "../../../../../Database/PrismaClient";

interface GetCustomerServiceRequest {
  cpf: string;
}

export class GetCustomerService {
  async execute({ cpf }: GetCustomerServiceRequest) {
    const checkIfCustomerAlreadyExists = await prisma.customer.findFirst({
      where: { cpf: cpf },
    });

    if (!checkIfCustomerAlreadyExists) {
      return new Error("There are no customers with this credential");
    }

    return checkIfCustomerAlreadyExists;
  }
}
