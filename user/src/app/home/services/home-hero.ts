import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type HomeHero = {
  title: string;
  subTitle: string;
  partnersLabel: string;
  partnersLogo: TImage[];
  CTAButtonText: string;
};

export const getHomeHero = async () => {
  let data: any;
  const defaultData: HomeHero = {
    title: '',
    subTitle: '',
    partnersLabel: '',
    partnersLogo: [],
    CTAButtonText: '',
  };

  try {
    data = (await axiosCustom.get(URLS.HOME_HERO, ['partnersLogo'])).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeHero>(data, defaultData);
  safeData.partnersLogo = safeData.partnersLogo.map((item) =>
    safeParse<TImage>(item, defaultImage, true),
  );

  return safeData;
};

export const useHomeHero = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_HERO, lang],
    queryFn: getHomeHero,
  });
};
