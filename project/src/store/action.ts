import {createAction} from '@reduxjs/toolkit';

export const setSelectedCity = createAction<string>('setSelectedCity');
export const setSelectedOffers = createAction<string>('setSelectedOffers');
export const setActiveSortType = createAction<string>('setActiveSortType');
