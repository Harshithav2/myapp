import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '../environment/environment';
import { Item } from '../schema/item.schems';

export const onAddItem = async (data: any) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: `${environment.API_URL}/addItems`,
    withCredentials: true,
    data
  };
  try {
    await axios.request(requestConfig);
  } catch (e) {
    console.error(e);
    return { error: 'cannot add item' };
  }
};

export const ItemList = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: `${environment.API_URL}/items`,
    withCredentials: true
  };
  try {
    const { data } = await axios.request(requestConfig);
    return data;
  } catch (e) {
    console.error(e);
  };
};