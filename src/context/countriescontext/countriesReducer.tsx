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
			};

		case countryTypes.fetchSuccess:
			return {
				...state,
				allCountries: action.payload,
				loading: false,
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
			};

		case countryTypes.fetchAlphaContry:
			return {
				...state,
				loading: false,
				singleCountry: action.payload,
			};

		case countryTypes.filterRegionCountries:
			return {
				...state,
				loading: false,
				allCountries: action.payload,
			};

		default:
			return state;
	}
};
