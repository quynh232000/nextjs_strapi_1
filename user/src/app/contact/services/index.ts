import { QUERY_KEYS, URLS } from '@/services/urls';
import { TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import { axiosCustom } from 'src/axiosCustom';
const defaultImg = {
  id: 0,
  documentId: '',
  name: '',
  alternativeText: '',
  caption: '',
  width: 0,
  height: 0,
  formats: '',
  hash: '',
  ext: '',
  mime: '',
  size: 0,
  url: '',
  previewUrl: '',
  provider: '',
  provider_metadata: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  locale: '',
};
const fakeData: Contact = {
  title: 'Liên hệ với chúng tôi',
  description: 'Hãy liên hệ với chúng tôi để được hỗ trợ tư vấn',
  contactTypeSection: [
    {
      icon: {
        ...defaultImg,
        url: 'http://localhost:1337/uploads/Icon1_41e64b3d5f.png',
      },
      title: 'Email',
      subTitle: 'Our friendly team is here to help.',
      content: 'hello@merakiui.com',
    },
    {
      icon: {
        ...defaultImg,
        url: 'http://localhost:1337/uploads/Icon1_41e64b3d5f.png',
      },
      title: 'Office',
      subTitle: 'Come say hello at our office HQ.',
      content: '100 Smith Street Collingwood VIC 3066 AU',
    },
    {
      icon: {
        ...defaultImg,
        url: 'http://localhost:1337/uploads/Icon1_41e64b3d5f.png',
      },
      title: 'Phone',
      subTitle: 'Mon-Fri from 8am to 5pm.',
      content: '+1 (555) 000-0000',
    },
  ],
  questionSection: {
    title: 'Câu hỏi phổ biến',
    description: 'Những giải đáp thắc mắc phổ biến nhất',
    subtitle: 'Câu hỏi thường gặp',
    questions: [
      {
        question:
          '[Dịch vụ] Cách liên hệ Chăm sóc khách hàng, Hotline, Tổng đài Shopee',
        awnser:
          'Tổng đài Shopee/Hotline Shopee (miễn phí) là một tính năng tích hợp sẵn trong ứng dụng Shopee, cung cấp kênh liên lạc chính thức giữa Shopee và Người dùng (bao gồm cả Người mua và Người bán), nhằm mục đích hỗ trợ Người dùng giải quyết các vấn đề/thắc mắc liên quan đến việc mua/bán trên nền tảng Shopee một cách nhanh chóng và hiệu quả mà Người dùng không cần trả bất kỳ chi phí nào.',
      },
      {
        question: 'What is Material Tailwind?',
        awnser:
          'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is',
      },
      {
        question: 'What is Material Tailwind?',
        awnser:
          'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is',
      },
      {
        question: 'What is Material Tailwind?',
        awnser:
          'Material Tailwind is a fully coded UI tool kit built on top of Tailwind CSS. It is',
      },
    ],
  },
  messegeSection: {
    title: 'Để lại lời nhắn cho chúng tôi',
    description: 'Hãy để lại lời nhắn cho chúng tôi',
    form: {
      title: 'Hãy gửi lời nhắn cho chúng tôi',
      fullName: 'Full Name',
      email: 'Email address',
      message: 'Message',
      send: 'Send message',
    },
  },
};
// =============
export type Contact = {
  title: string;
  description: string;
  contactTypeSection: ContactType[];
  questionSection: {
    title: string;
    description: string;
    subtitle: string;
    questions: Question[];
  };
  messegeSection: {
    title: string;
    description: string;
    form: {
      title: string;
      fullName: string;
      email: string;
      message: string;
      send: string;
    };
  };
};
type ContactType = {
  icon: TImage;
  title: string;
  subTitle: string;
  content: string;
};
type Question = {
  question: string;
  awnser: string;
};

export type FormContact = {
  fullName: string;
  email: string;
  message: string;
};

export const getContact = async () => {
  let data: any;
  const defaultData: Contact = {
    title: '',
    description: '',
    contactTypeSection: [],
    questionSection: {
      title: '',
      description: '',
      subtitle: '',
      questions: [],
    },
    messegeSection: {
      title: '',
      description: '',
      form: {
        title: '',
        fullName: '',
        email: '',
        message: '',
        send: '',
      },
    },
  };

  try {
    data = (await axiosCustom.get(URLS.CONTACT, [])).data;
  } catch (error) {
    return fakeData;
  }
  const safeData = safeParse<Contact>(data, defaultData);
  return safeData;
};

export const useContact = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CONTACT],
    queryFn: getContact,
  });
};
