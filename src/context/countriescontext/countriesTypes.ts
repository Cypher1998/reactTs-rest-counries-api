import React from 'react';

export interface CountriesContextTypes {
	loading: boolean;
	error: null | string;
	// allCountries: null | any[];
	allCountries: null | { [key: string]: any }[];
	// searchTextCountries: null | { [key: string]: any }[];
	// text: string;
	singleCountry: null | { [key: string]: any }[];
	fetchAllCountries: () => void;
	// searchCountries: (text: string) => void;
	// handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	fetchSingleCountry: (text: string) => void;
	fetchAlphaCountry: (text: string) => void;
	filterRegionCountries: (text: string) => void;
}

export type CountriesContextProps = {
	children: React.ReactNode;
};

export enum countryTypes {
	loading = 'LOADING',
	fetchSuccess = 'FETCH_SUCCESS',
	fetchError = 'FETCH_ERROR',
	searchCountries = 'SEARCH_COUNTRIES',
	enterSearchString = 'ENTER_SEARCH_STRING',
	fetchSingleCountry = 'FETCH_SINGLE_COUNTRY',
	fetchAlphaContry = 'FETCH_ALPHA_COUNTRY',
	filterRegionCountries = 'FILTER_REGION_COUNTRIES',
}
export interface CountriesProviderStateTypes {
	loading: boolean;
	error: null | string;
	allCountries: null | { [key: string]: any }[];
	singleCountry: null | { [key: string]: any }[];
}

interface BooleanTypes {
	type: countryTypes.loading;
}

interface ArrayTypes {
	type:
		| countryTypes.fetchSuccess
		| countryTypes.fetchSingleCountry
		| countryTypes.fetchAlphaContry
		| countryTypes.filterRegionCountries;
	payload: { [key: string]: any }[];
}

interface StringTypes {
	type: countryTypes.fetchError;
	payload: string;
}

export type ActionTypes = BooleanTypes | ArrayTypes | StringTypes;
