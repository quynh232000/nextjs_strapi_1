import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type SecondaryFeature = {
  name: string;
  summary: string;
  description: string;
  image: TImage;
  icon?: any;
};

export type HomeSecondaryFeatures = {
  title: string;
  description: string;
  features: SecondaryFeature[];
};

export const getHomeSecondaryFeatures = async () => {
  let data: any;
  const defaultData: HomeSecondaryFeatures = {
    title: '',
    description: '',
    features: [],
  };

  try {
    data = (
      await axiosCustom.get(URLS.HOME_SECONDARY_FEATURES, ['features.image'])
    ).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeSecondaryFeatures>(data, defaultData);
  safeData.features = safeData.features.map((item) => ({
    ...item,
    image: safeParse<TImage>(item.image, defaultImage, true),
  }));
  return safeData;
};

export const useHomeSecondaryFeatures = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_SECONDARY_FEATURES, lang],
    queryFn: getHomeSecondaryFeatures,
  });
};
