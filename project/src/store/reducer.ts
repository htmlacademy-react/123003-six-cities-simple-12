import { createReducer } from '@reduxjs/toolkit';
import { setSelectedCity, setActiveSortType, loadOffers, loadReviews, requireAuthorization, setError,setOffersDataLoadingStatus } from './action';
import { DEFAULT_CITY, SortTypeToLabel, AuthorizationStatus } from '../const';
import { Offers, Reviews } from '../types/offer';

type InitialState = {
 selectedCity: string;
  offers: Offers;
  filteredOffers: Offers;
  activeSortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string|null;
  reviews: Reviews;
};

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY,
  offers: [],
  activeSortType: SortTypeToLabel.POPULAR,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error:null,
  filteredOffers:[],
  reviews:[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedCity, (state, action) =>{
      state.selectedCity = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
    })
    .addCase(setActiveSortType, (state, action) =>{
      state.activeSortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
