import Client from "../models/Client";
import { ClientType } from "./interfaces";

export const getAllClients = () => {
  return Client.find();
};

export const getAllClientFiltered = (exclued: {
  [key in keyof ClientType]?: number;
}) => {
  return Client.find({}, exclued);
};

export const createNewClient = (client: ClientType) => {
  return Client.create(client);
};
