export const data = [
	{
		name: { common: 'Nigeria', official: 'Federal Republic of Nigeria' },
		population: 200000000,
		flags: {
			png: 'https://flagcdn.com/w320/ng.png',
		},
		region: 'Africa',
		capital: ['Abuja'],
	},
	{
		name: { common: 'United Arab Emirates', official: 'United Arab Emirates' },
		population: 9890400,
		flags: {
			png: 'https://flagcdn.com/w320/ae.png',
		},
		region: 'Asia',
		capital: ['Abu Dhabi'],
	},
];

export const countryData = [
	{
		flags: { png: 'https://flagcdn.com/w320/ng.png' },
		name: { common: 'Nigeria', official: ' Federal Republic of Nigeria' },
		capital: ['Abuja'],
		population: 200000000,
		region: 'Africa',
		subregion: 'Western Africa',
		tld: ['.ng'],
		currencies: [{ name: 'Nigerian naira', symbol: 'N' }],
		languages: { eng: 'English' },
		borders: ['CMR', 'TCD', 'BEN', 'NER'],
	},
];

export const valueLoading = {
	loading: true,
	allCountries: null,
	error: null,
	singleCountry: null,
	fetchAllCountries: jest.fn(),
	fetchSingleCountry: jest.fn(),
	fetchAlphaCountry: jest.fn(),
	filterRegionCountries: jest.fn(),
};

export const valueSuccess = {
	loading: false,
	allCountries: data,
	error: null,
	singleCountry: null,
	fetchAllCountries: jest.fn(),
	fetchSingleCountry: jest.fn(),
	fetchAlphaCountry: jest.fn(),
	filterRegionCountries: jest.fn(),
};

export const countrySuccessData = {
	...valueSuccess,
	singleCountry: countryData,
};

export const valueError = {
	loading: false,
	allCountries: null,
	error: 'Network Error',
	singleCountry: null,
	fetchAllCountries: jest.fn(),
	fetchSingleCountry: jest.fn(),
	fetchAlphaCountry: jest.fn(),
	filterRegionCountries: jest.fn(),
};

export const countryErrorData = {
	...valueError,
	error: 'Request failed with status code 404',
};
