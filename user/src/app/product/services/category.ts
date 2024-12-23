import { QUERY_KEYS, URLS } from '@/services/urls';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_STRAPI_URL } from 'src/consts';

export type Category = {
  name: string;
  description: string;
};

const defaultCategory: Category = {
  name: '',
  description: '',
};

export const getCategories = async () => {
  let data: any;
  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.CATEGORY}`)).data?.data;
  } catch (error) {
    return defaultCategory;
  }
  return data.map((d: any) => safeParse<Category>(d, defaultCategory));
};

export const useCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn: getCategories,
  });
};
