import { createReducer } from '@reduxjs/toolkit';
import { setSelectedCity, setActiveSortType, loadOffers, loadReviews, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { DEFAULT_CITY, SortTypeToLabel, AuthorizationStatus } from '../const';
import { Offers, Reviews, Offer } from '../types/offer';
import { fetchOfferDetailsAction } from './api-actions';

type InitialState = {
 selectedCity: string;
  offers: Offers;
  filteredOffers: Offers;
  activeSortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  reviews: Reviews;
  offerDetails: Offer|null;
};

const initialState: InitialState = {
  selectedCity: DEFAULT_CITY,
  offers: [],
  activeSortType: SortTypeToLabel.POPULAR,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  filteredOffers: [],
  reviews: [],
  offerDetails: null,
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
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(fetchOfferDetailsAction.fulfilled, (state, action) => {
      state.offerDetails = action.payload;
    });
});

export {reducer};
