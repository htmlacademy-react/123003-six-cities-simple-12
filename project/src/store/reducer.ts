import { createReducer } from '@reduxjs/toolkit';
import { setSelectedOffers, setSelectedCity } from './action';
import { offers } from '../mocks/offers';
import { DEFAULT_CITY } from '../const';

const initialState = {
  selectedCity: DEFAULT_CITY,
  selectedOffers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedOffers, (state) => {
      state.selectedOffers = state.selectedOffers.filter((offer) => offer.city.name === state.selectedCity);
    })
    .addCase(setSelectedCity, (state, action) =>{
      state.selectedCity = action.payload;
    });
});

export {reducer};
