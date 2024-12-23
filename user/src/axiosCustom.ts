import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from './consts';
import { Language } from './hooks/useLanguage';

export const axiosCustom = {
  instance: axios.create({
    baseURL: API_STRAPI_URL,
  }),
  async get(
    url: string,
    populate?: string[],
    params: Record<string, string> = {},
  ) {
    const query = QueryString.stringify({
      populate,
      ...params,
      locale: Language.value,
    });
    try {
      const result = (await this.instance.get(`${url}?${query}`)).data;
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
};
