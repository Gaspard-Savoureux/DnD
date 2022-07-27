import { server } from "../env";
import axios, { AxiosResponse } from 'axios';
import type { Race } from '../types/Race';

export const getMagicItems = async (): Promise<Race[]> => {
  const options = {
		method: 'GET',
		url: `${server}/magic-items`,
	};
  axios.request(options).then(function (response) {
    console.log(response.data);
    const Races: Race = response.data.results;
    return Races;
  }).catch(function (error) {
    console.error(error);
  });
}