import { server } from "../env";
import axios from 'axios';
import type { Race } from '../types/Race';

export interface results {
 index: string,
 name: string,
 url: string
}

export const get = async () => {
  // let Races= [] as results[];
  // const options = {
	// 	method: 'GET',
	// 	url: `${server}/races`,
	// };
  const response = fetch(`${server}/races`);
  const data = (await response).json()
  return data;
  // axios.request(options).then(async (response) => {
  //   const data: any = await response.data;
  //   Races = await data.json();
  //   console.log(Races);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  // return Races;
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