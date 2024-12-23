import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeImage, safeImages, safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
import { useLanguage } from 'src/hooks/useLanguage';

export type AboutUsCommitmentItem = {
  title: string;
  icon: TImage;
};

export type AboutUsMissionItem = {
  title: string;
  description: string;
  index: number;
};

export type AboutUsValueItem = {
  title: string;
  description: string;
  icon: TImage;
};

export type AboutUsCommitmentSection = {
  items: AboutUsCommitmentItem[];
};

export type AboutUsDevelopmentSection = {
  title: string;
  images: TImage[];
};

export type AboutUsMissionSection = {
  title: string;
  items: AboutUsMissionItem[];
};

export type AboutUsValueSection = {
  title: string;
  image: TImage;
  items: AboutUsValueItem[];
};

export type AboutUs = {
  title: string;
  description: string;
  commitmentSection: AboutUsCommitmentSection;
  developmentSection: AboutUsDevelopmentSection;
  missionSection: AboutUsMissionSection;
  valueSection: AboutUsValueSection;
};

export const getAboutUs = async () => {
  let data: any;
  const defaultData: AboutUs = {
    title: '',
    description: '',
    commitmentSection: { items: [] },
    developmentSection: { title: '', images: [] },
    missionSection: { title: '', items: [] },
    valueSection: { title: '', image: defaultImage, items: [] },
  };

  try {
    data = (
      await axiosCustom.get(URLS.ABOUT_US, [
        'commitmentSection.items.icon',
        'developmentSection.images',
        'missionSection.items',
        'valueSection.image',
        'valueSection.items.icon',
      ])
    ).data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse(data, defaultData);
  safeData.commitmentSection.items = safeData.commitmentSection.items.map(
    (item) => ({ ...item, icon: safeImage(item.icon) }),
  );
  safeData.developmentSection.images = safeImages(
    safeData.developmentSection.images,
  );
  safeData.valueSection.image = safeImage(safeData.valueSection.image);
  safeData.valueSection.items = safeData.valueSection.items.map((item) => {
    return { ...item, icon: safeImage(item.icon) };
  });

  return safeData;
};

export const useAboutUs = () => {
  const lang = useLanguage();
  return useQuery({
    queryKey: [QUERY_KEYS.ABOUT_US, lang],
    queryFn: getAboutUs,
  });
};
