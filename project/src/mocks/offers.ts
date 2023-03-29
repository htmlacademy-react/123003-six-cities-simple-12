import { PHOTO_URL, Person, reviews, Review } from './reviews';
import {RoomType} from '../const';

type Photo = {
    src: string;
    title: string;
  };

type Location = {
    lat: number;
    lng: number;
}


export type Offer = {
  id: string;
  title: string;
  description: string;
  isPremium?: boolean;
  type: RoomType;
  rating: number;
  bedrooms: number;
  guests: number;
  price: number;
  options: string[];
  photos: Photo[];
  owner: Person;
  reviews: Review[];
  location: Location;
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
    type: RoomType.Room,
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
    location:{
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: '2',
    title: 'Minimalistic apartments',
    description: 'Free wi-fi, underground parking, pet friendly',
    isPremium: false,
    type: RoomType.Apartment,
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
    location:{
      lat: 52.3609553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: '3',
    title: 'Big house in the suburbs',
    description: 'A great place to celebrate holidays with a large company or family.',
    isPremium: true,
    type: RoomType.House,
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
    location:{
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
  {
    id: '4',
    title: 'Premium hotel',
    description: 'All inclusive',
    isPremium: false,
    type: RoomType.Hotel,
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
    location:{
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
  },
];

