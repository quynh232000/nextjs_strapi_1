import { defaultImage, TImage } from '@/types/common';
import { API_STRAPI_URL } from 'src/consts';

export const safeParse = <T>(
  data: any,
  defaultValue: T,
  replaceUrl = false,
): T => {
  const defaultData = JSON.parse(JSON.stringify(defaultValue));
  for (const key in defaultData) {
    defaultData[key] = data[key] ?? defaultData[key];
    if (key === 'url' && replaceUrl) {
      defaultData[key] = `${API_STRAPI_URL}${defaultData[key]}`;
    }
  }
  return defaultData;
};

export const safeImage = (item: any) => {
  const result = safeParse(item, defaultImage);
  result.url = `${API_STRAPI_URL}${result.url}`;
  result.previewUrl = `${API_STRAPI_URL}${result.previewUrl}`;
  return result;
};

export const safeImages = (items: any[]) => {
  return items.map((item) => safeImage(item));
};
