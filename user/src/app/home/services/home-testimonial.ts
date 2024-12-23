import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type Testimonial = {
  content: string;
  name: string;
  position: string;
  avatar: TImage;
};

export type THomeTestimonials = {
  title: string;
  description: string;
  testimonials: Testimonial[];
};

export const getHomeTestimonials = async () => {
  let data: any;
  const defaultData: THomeTestimonials = {
    title: '',
    description: '',
    testimonials: [],
  };

  try {
    data = (
      await axiosCustom.get(URLS.HOME_TESTMONIALS, ['testimonials.avatar'])
    ).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<THomeTestimonials>(data, defaultData);
  safeData.testimonials = safeData.testimonials.map((item) => ({
    ...item,
    avatar: safeParse<TImage>(item.avatar, defaultImage, true),
  }));

  return safeData;
};

export const useHomeTestimonials = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_TESTMONIALS, lang],
    queryFn: getHomeTestimonials,
  });
};
