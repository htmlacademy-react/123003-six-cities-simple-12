import {RoomType} from '../const';

type Image = {
    src: string;
};

export type Location = {
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
  avatarUrl: string;
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
  maxAdults: number;
  previewImage:string;
  location:Location;
  price: number;
  goods: string[];
  images: Image[];
  host: Person;
  reviews: Reviews;
  city: City;
};

export type Offers = Offer[];
