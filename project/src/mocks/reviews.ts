export const PHOTO_URL = 'https://i.pravatar.cc/128';

export type Review = {
  id: number;
  author: Person;
  date: string;
  text: string;
};

export type Person = {
  name: string;
  avatar: string;
  isPro?: boolean;
  rating?: number;
};

export const reviews = [
  {
    id: 1,
    author: {
      name: 'Дмитрий',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`,
      rating: 5,
    },
    date: 'April 2019',
    text: 'Квартира на высоком этаже имела прекрасный вид до самого горизонта, что было большим плюсом. Однако при открытом окне был слышен легкий фоновый шум города, хотя в принципе окна были хорошо звукоизолированы',
  },
  {
    id: 2,
    author:{
      name: 'Ольга',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`, rating: 4,
    },
    date: 'April 2018',
    text: 'Проживала в этой квартире 8 дней. прекрасное расположение, чистая квартира и прекрасный персонал.',
  },
  {
    id: 3,
    author:{
      name: 'Глеб',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`,rating: 1,
    },
    date: 'April 2017',
    text: 'Все очень понравилось, уборное расположение, отличная квартира, в которой имеет все для комфортного проживания. Заселили быстро, персонал доброжелательный. Все супер, спасибо!',
  },
  {
    id: 4,
    author:{
      name: 'Мария',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`, rating: 3,
    },
    date: 'April 2016',
    text: 'Относительно свежий ремонт и мебель. Вся посуда в наличии, фен, холодильник, утюг, кондиционер (но пульта не нашли). ТВ, но мы не включали. Для прийти и переночевать нормальный вариант. Белье постельное было белое.',
  },
];

