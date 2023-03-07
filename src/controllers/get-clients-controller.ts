import {
  getAllClientFiltered,
} from "../shared/clientRepository";
import {
  clientsWithDeathDate,
} from "../shared/functions";
import { ClientType, controllerType } from "../shared/interfaces";

export const getAllClientsController: controllerType = async (req, res) => {
  try {
    const allClients = await getAllClientFiltered({ _id: 0 }); // Obtiene todos los clientes de la base de datos sin el ID y la versión.
    const clients = allClients.map((client) => client.toObject() as ClientType);
    const data = clientsWithDeathDate(clients);
    res.status(200).json(data); // Devuelve la lista de clientes con la fecha probable de muerte de cada uno de ellos.
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrió un error al obtener la lista de clientes." });
  }
};
