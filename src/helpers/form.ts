export const getSalaryPercent = (
  salaries: Array<number>,
  rentToPay: number
) => {
  const totalSalary = salaries.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0
  );

  return (rentToPay / totalSalary) * 100;
};

export const getIndividualPayment = (
  salary: number,
  salaryPercent: number
) => {
  const individualPayment = (salaryPercent / 100) * salary

  return individualPayment.toFixed(2)
};

export const decimalCount = (number: number) => {
  const numberAsString = number.toString();

  if (numberAsString.includes('.')) {
    return numberAsString.split('.')[1].length;
  }

  return 0;
}
