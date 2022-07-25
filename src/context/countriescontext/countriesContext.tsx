import { createContext, useReducer } from 'react';
import { countryReducer } from './countriesReducer';
import {
	CountriesContextProps,
	CountriesContextTypes,
	CountriesProviderStateTypes,
	countryTypes,
} from './countriesTypes';
import axios from 'axios';

export const apiUrl = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
});

const CountryContext = createContext<CountriesContextTypes | null>(null);

export const CountryProvider = ({ children }: CountriesContextProps) => {
	const initialState: CountriesProviderStateTypes = {
		loading: false,
		allCountries: null,
		error: null,
		singleCountry: null,
	};

	const [state, dispatch] = useReducer(countryReducer, initialState);

	const fetchAllCountries = async () => {
		dispatch({ type: countryTypes.loading });
		try {
			const { data } = await apiUrl.get('/all');
			dispatch({ type: countryTypes.fetchSuccess, payload: data });
		} catch (error: any) {
			const { message } = error;
			dispatch({ type: countryTypes.fetchError, payload: message });
		}
	};

	const fetchSingleCountry = async (text: string) => {
		dispatch({ type: countryTypes.loading });
		try {
			const { data } = await apiUrl(`/name/${text}`);
			dispatch({ type: countryTypes.fetchSingleCountry, payload: data });
		} catch (error: any) {
			const { message } = error;
			dispatch({ type: countryTypes.fetchError, payload: message });
		}
	};

	const fetchAlphaCountry = async (text: string) => {
		dispatch({ type: countryTypes.loading });
		try {
			const { data } = await apiUrl(`/alpha/${text}`);
			dispatch({ type: countryTypes.fetchAlphaContry, payload: data });
		} catch (error: any) {
			const { message } = error;
			dispatch({ type: countryTypes.fetchError, payload: message });
		}
	};

	const filterRegionCountries = async (text: string) => {
		dispatch({ type: countryTypes.loading });
		try {
			const { data } = await apiUrl(`/region/${text}`);
			dispatch({ type: countryTypes.filterRegionCountries, payload: data });
		} catch (error: any) {
			const { message } = error;
			dispatch({ type: countryTypes.fetchError, payload: message });
		}
	};

	return (
		<CountryContext.Provider
			value={{
				loading: state.loading,
				allCountries: state.allCountries,
				error: state.error,
				singleCountry: state.singleCountry,
				fetchAllCountries,
				fetchSingleCountry,
				fetchAlphaCountry,
				filterRegionCountries,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
};

export default CountryContext;
