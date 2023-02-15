import { prisma } from "../../../../../Database/PrismaClient";

interface CreateUserServiceRequest {
  name: string;
  cpf: string;
  birth: string;
}

export class CreateCustomerService {
  async execute({ name, cpf, birth }: CreateUserServiceRequest) {
    const checkIfAlreadyExists = await prisma.customer.findFirst({
      where: { cpf: cpf },
    });

    if (checkIfAlreadyExists) {
      return new Error("Customer already exists");
    }

    // Birth Basic Validation
    const dateBirth = birth.split("/");
    const dayBirth = Number(dateBirth[0]);
    const monthBirth = Number(dateBirth[1]);
    const yearBirth = Number(dateBirth[2]);

    if (
      dayBirth < 1 ||
      dayBirth > 31 ||
      monthBirth < 1 ||
      monthBirth > 12 ||
      yearBirth < 0 ||
      yearBirth > 2023
    ) {
      return new Error("Birth date is not valid");
    }

    const createNewCustomer = await prisma.customer.create({
      data: { name: name, cpf: cpf, birth: birth },
    });

    if (!createNewCustomer) {
      return new Error("Customer couldn't be created");
    }

    return createNewCustomer;
  }
}
