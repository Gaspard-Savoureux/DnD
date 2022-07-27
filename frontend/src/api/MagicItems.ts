import { server } from "../env";
import axios from 'axios';

export const get = async () => {
  const options = {
		method: 'GET',
		url: `${server}/magic-items`,
	};
  axios.request(options).then(function (response) {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
}