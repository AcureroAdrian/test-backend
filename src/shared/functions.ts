import { ClientType } from "./interfaces";

export const averageAge = (age: number[]) => {
  const sumAge = age.reduce((total, age) => (total += age), 0);

  console.log(sumAge, sumAge / age.length);
  return sumAge / age.length;
};

export const calculateStats = (ages: number[]) => {
  const avgAge = averageAge(ages);
  const variance =
    ages.reduce((total, value) => total + (value - avgAge) ** 2, 0) /
    ages.length;
  const stdDev = Math.sqrt(variance);
  return { avgAge, stdDev };
};

export const clientsWithDeathDate = (clients: ClientType[]) => {
  const clientsWithDeathDate = clients.map((client) => {
    const { name, lastName, dob, age } = client; // Extrae las propiedades del cliente.
    const deathDate = new Date(dob); // Crea una nueva fecha a partir de la fecha de nacimiento del cliente.
    deathDate.setFullYear(deathDate.getFullYear() + 76); // Calcula la fecha probable de muerte del cliente.
    return {
      name,
      lastName,
      dob,
      age,
      deathDate: deathDate.toISOString().split("T")[0], // Convierte la fecha de muerte a una cadena de caracteres en formato "AAAA-MM-DD".
    };
  });
  return clientsWithDeathDate;
};
