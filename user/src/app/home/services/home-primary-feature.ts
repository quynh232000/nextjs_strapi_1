import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type PrimaryFeature = {
  title: string;
  description: string;
  image: TImage;
};

export type HomePrimaryFeatures = {
  title: string;
  description: string;
  features: PrimaryFeature[];
  backgroundImage: TImage;
};

export const getHomePrimaryFeatures = async () => {
  let data: any;
  const defaultData: HomePrimaryFeatures = {
    title: '',
    description: '',
    features: [],
    backgroundImage: defaultImage,
  };

  try {
    data = (
      await axiosCustom.get(URLS.HOME_PRIMARY_FEATURES, [
        'features.image',
        'backgroundImage',
      ])
    ).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomePrimaryFeatures>(data, defaultData);
  safeData.backgroundImage = safeParse<TImage>(
    safeData.backgroundImage,
    defaultImage,
    true,
  );
  safeData.features = safeData.features.map((item) => ({
    ...item,
    image: safeParse<TImage>(item.image, defaultImage, true),
  }));
  return safeData;
};

export const useHomePrimaryFeatures = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_PRIMARY_FEATURES, lang],
    queryFn: getHomePrimaryFeatures,
  });
};
