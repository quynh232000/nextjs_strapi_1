import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type HomeCTA = {
  title: string;
  description: string;
  CTAButtonText: string;
  backgroundImage: TImage;
};

export const getHomeCTA = async () => {
  let data: any;
  const defaultData: HomeCTA = {
    title: '',
    description: '',
    backgroundImage: defaultImage,
    CTAButtonText: '',
  };

  try {
    data = (await axiosCustom.get(URLS.HOME_CTA, ['backgroundImage'])).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeCTA>(data, defaultData);
  safeData.backgroundImage = safeParse<TImage>(
    data.backgroundImage,
    defaultImage,
    true,
  );
  return safeData;
};

export const useHomeCTA = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_CTA, lang],
    queryFn: getHomeCTA,
  });
};
