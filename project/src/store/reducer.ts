import { createReducer } from '@reduxjs/toolkit';
import { setSelectedOffers, setSelectedCity, setActiveSortType } from './action';
import { offers } from '../mocks/offers';
import { DEFAULT_CITY, SortTypeToLabel } from '../const';

const initialState = {
  selectedCity: DEFAULT_CITY,
  offers: offers,
  filteredOffers: offers.filter((offer) => offer.city.name === DEFAULT_CITY),
  activeSortType: SortTypeToLabel.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedCity, (state, action) =>{
      state.selectedCity = action.payload;
    })
    .addCase(setActiveSortType, (state, action) =>{
      state.activeSortType = action.payload;
    })
    .addCase(setSelectedOffers, (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
    });
});

export {reducer};
