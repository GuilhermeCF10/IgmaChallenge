import { prisma } from "../../../../../Database/PrismaClient";

interface GetAllCustomersServiceRequest {
  skip: number;
  take: number;
}

export class GetAllCustomersService {
  async execute({ skip, take }: GetAllCustomersServiceRequest) {
    const checkIfCustomersExists = await prisma.customer.findMany({
      skip: skip,
      take: take,
    });

    if (!checkIfCustomersExists || checkIfCustomersExists.length === 0) {
      return new Error("There are no customers exists");
    }

    return {
      customers: checkIfCustomersExists,
    };
  }
}
