import { server } from "../env";

export interface results {
 index: string,
 name: string,
 url: string
}

export const get = async () => {
  const response = fetch(`${server}/races`);
  const data = (await response).json()
  return data;
}

// export const getDetails = async (): Promise<Race[]> => {
//   let Races: Race[];
//   const options = {
// 		method: 'GET',
// 		url: `${server}/magic-items`,
// 	};
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//     Races = response.data.results;
//     console.log(Races);
//   }).catch(function (error) {
//     console.error(error);
//   });
//   return Races;
// }