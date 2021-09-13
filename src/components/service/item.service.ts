import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '../environment/environment';
import { Item } from '../schema/item.schems';

export const onAddItem = async (data: Item) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: `${environment.API_URL}/addItems`,
    data
  };

  try {
    await axios.request(requestConfig);
  } catch (e) {
    console.error(e);
    return { error: 'cannot add item' };
  }
};