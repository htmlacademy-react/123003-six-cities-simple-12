import { createAction } from '@reduxjs/toolkit';
import { Offers, Reviews } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const setSelectedCity = createAction<string>('setSelectedCity');
export const setActiveSortType = createAction<string>('setActiveSortType');
export const loadOffers = createAction<Offers>('loadOffers');
export const loadReviews = createAction<Reviews>('loadReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const setReviewsDataLoadingStatus = createAction<boolean>('setReviewsDataLoadingStatus');
