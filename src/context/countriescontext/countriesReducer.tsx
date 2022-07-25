import {
	CountriesProviderStateTypes,
	ActionTypes,
	countryTypes,
} from './countriesTypes';

export const countryReducer = (
	state: CountriesProviderStateTypes,
	action: ActionTypes
): CountriesProviderStateTypes => {
	switch (action.type) {
		case countryTypes.loading:
			return {
				...state,
				loading: true,
				singleCountry: null,
			};

		case countryTypes.fetchSuccess:
			return {
				...state,
				allCountries: action.payload,
				loading: false,
				error: null,
			};

		case countryTypes.fetchError:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		case countryTypes.fetchSingleCountry:
			return {
				...state,
				loading: false,
				singleCountry: action.payload,
				error: null,
			};

		case countryTypes.fetchAlphaContry:
			return {
				...state,
				loading: false,
				singleCountry: action.payload,
				error: null,
			};

		case countryTypes.filterRegionCountries:
			return {
				...state,
				loading: false,
				allCountries: action.payload,
				error: null,
			};

		default:
			return state;
	}
};
