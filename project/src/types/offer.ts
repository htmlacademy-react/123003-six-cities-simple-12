import {RoomType} from '../const';

type Photo = {
    src: string;
    title: string;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
type City = {
  location: Location;
  name: string;
}

type Person = {
  name: string;
  avatar: string;
  isPro?: boolean;
  rating?: number;
};

export type Review = {
  id: number;
  author: Person;
  date: string;
  text: string;
};

export type Reviews = Review[];

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
  reviews: Reviews;
  city: City;
};

export type Offers = Offer[];
