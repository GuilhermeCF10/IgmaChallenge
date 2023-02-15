import { Request, Response, NextFunction } from "express";

const getFirstDigit = (cpf: any) => {
  let firstDigit = 0;
  let sum = 0;

  //   Go through all results and sum
  for (let i in cpf) {
    sum += (cpf.length + 1 - Number(i)) * cpf[i];
  }

  //   Rest of Divison Rule
  let restOfDivision = sum % 11;

  if (restOfDivision < 2) {
    firstDigit = 0;
  } else if (restOfDivision >= 2) {
    firstDigit = 11 - restOfDivision;
  }

  return firstDigit;
};

export const validateCPF = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // Check the rule validation here: https://www.macoratti.net/alg_cpf.htm#:~:text=O

  const { cpf } = request.body;

  //   Check if CPF is valid
  const formattedCpf = cpf.replace(/[^0-9]/g, "");

  if (formattedCpf.length !== 11) {
    return response.status(422).send({ message: "CPF is invalid" });
  }

  //   Get First 9 Digits
  const cpfFirstNineDigits = formattedCpf.slice(0, 9);

  // Calculate First Digit
  const firstDigit = getFirstDigit(cpfFirstNineDigits);

  // Calculate Second Digit
  const secondDigit = getFirstDigit(`${cpfFirstNineDigits}${firstDigit}`);

  //   Change CPF with rules informed
  const cpfValid = `${cpfFirstNineDigits}${firstDigit}${secondDigit}`;

  if (cpfValid !== cpf) {
    if (request.originalUrl === "/app/customer/get") {
      return response.status(422).send({ message: "Customer does not exist" });
    }

    return response.status(422).send({ message: "CPF is not valid" });
  }

  return next();
};
