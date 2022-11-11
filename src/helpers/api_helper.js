import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://api.dev.wdtek.xyz/restaurants',
});

export async function get(url, config) {
  return await axiosApi.get(url, config).then((response) => response.data);
}
