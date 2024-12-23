import { QUERY_KEYS, URLS } from '@/services/urls';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type Pricing = {
  title: string;
  description: string;
  features: string[];
  value: string;
};

export type HomePricing = {
  title: string;
  description: string;
  prices: Pricing[];
};

export const getHomePricing = async () => {
  let data: any;
  const defaultData: HomePricing = {
    title: '',
    description: '',
    prices: [],
  };
  try {
    data = (await axiosCustom.get(URLS.HOME_PRICING, ['prices'])).data;
  } catch (error) {
    return defaultData;
  }
  const safeData = safeParse<HomePricing>(data, defaultData);
  return safeData;
};

export const useHomePricing = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_PRICING, lang],
    queryFn: getHomePricing,
  });
};
