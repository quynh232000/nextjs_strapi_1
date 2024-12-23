import { QUERY_KEYS, URLS } from '@/services/urls';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type FAQ = {
  question: string;
  answer: string;
};

export type HomeFAQ = {
  title: string;
  description: string;
  faqs: FAQ[];
};

export const getHomeFAQ = async () => {
  let data: any;
  const defaultData: HomeFAQ = {
    title: '',
    description: '',
    faqs: [],
  };

  try {
    data = (await axiosCustom.get(URLS.HOME_FAQ, ['faqs'])).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeFAQ>(data, defaultData);

  return safeData;
};

export const useHomeFAQ = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_FAQ, lang],
    queryFn: getHomeFAQ,
  });
};
