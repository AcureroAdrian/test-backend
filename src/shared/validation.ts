import { ClientType } from "./interfaces";

export const validateClient = (client: ClientType) => {
  let noUndefined = true;
  for (const key in client) {
    noUndefined = client[key as keyof typeof client] ? noUndefined : false;
  }

  return noUndefined;
};
