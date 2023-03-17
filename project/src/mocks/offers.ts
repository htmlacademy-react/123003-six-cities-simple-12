import { PHOTO_URL, Person, reviews, Review } from './reviews';

type Photo = {
    src: string;
    title: string;
  };


export type Offer = {
  id: string;
  title: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  bedrooms: number;
  guests: number;
  price: number;
  options: string[];
  photos: Photo[];
  owner: Person;
  reviews: Review[];
};

export type Offers = Offer[];

export const photos = [
  {
    src: `${PHOTO_URL}?rnd=${Math.random()}`,
    title: 'Laundry',
  },
  {
    src: `${PHOTO_URL}?rnd=${Math.random()}`,
    title: 'Bathroom',
  },
  {
    src: `${PHOTO_URL}?rnd=${Math.random()}`,
    title: 'Bedroom',
  },
  {
    src: `${PHOTO_URL}?rnd=${Math.random()}`,
    title: 'Kitchen',
  },
  {
    src: `${PHOTO_URL}?rnd=${Math.random()}`,
    title: 'Smth else',
  },
  {
    src: `${PHOTO_URL}?rnd=${Math.random()}`,
    title: 'Smth else',
  },
];

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Cozy room in the city center',
    description: 'The room has everything you need for the rest.',
    isPremium: true,
    type: 'room',
    rating: 5,
    bedrooms: 1,
    guests: 2,
    price: 3000,
    options: [
      'Washing',
      'Heating',
      'Coffee machine'
    ],
    photos,
    owner: {
      name: 'Nina',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`,
      isPro: false,
    },
    reviews,
  },
  {
    id: '2',
    title: 'Minimalistic apartments',
    description: 'Free wi-fi, underground parking, pet friendly',
    isPremium: false,
    type: 'apartment',
    rating: 4,
    bedrooms: 1,
    guests: 2,
    price: 1450,
    options: [
      'Wi-Fi',
      'Fridge',
      'Dishwasher',
      'Kitchen'
    ],
    photos,
    owner: {
      name: 'Tom',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`,
      isPro: false,
    },
    reviews,
  },
  {
    id: '3',
    title: 'Big house in the suburbs',
    description: 'A great place to celebrate holidays with a large company or family.',
    isPremium: true,
    type: 'house',
    rating: 5,
    bedrooms: 3,
    guests: 10,
    price: 20000,
    options: [
      'Towels',
    ],
    photos,
    owner: {
      name: 'Helena',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`,
      isPro: true,
    },
    reviews,
  },
  {
    id: '4',
    title: 'Premium hotel',
    description: 'All inclusive',
    isPremium: false,
    type: 'hotel',
    rating: 5,
    bedrooms: 2,
    guests: 4,
    price: 8000,
    options: [
      'Wi-Fi',
      'Fridge',
      'Dishwasher',
      'Kitchen',
      'Coffee machine',
      'Cabel TV',
      'Baby seat',
    ],
    photos,
    owner: {
      name: 'Oliver',
      avatar: `${PHOTO_URL}?rnd=${Math.random()}`,
      isPro: true,
    },
    reviews,
  },
];

