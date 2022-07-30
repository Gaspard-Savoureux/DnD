import { server } from "../env";

export interface results {
 index: string,
 name: string,
 url: string
}

export const get = async () => {
  const response = fetch(`${server}/classes`);
  const data = (await response).json()
  return data;
}