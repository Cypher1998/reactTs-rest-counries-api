import { render, screen } from '@testing-library/react';
import CountryInfo from '../pages/CountryInfo';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/themecontext/themeContext';
import CountryContext from '../context/countriescontext/countriesContext';
import { apiUrl } from '../context/countriescontext/countriesContext';
import {
	valueError,
	valueLoading,
	countryErrorData,
	countrySuccessData,
	countryData,
} from '../utils/variables';
import { CountriesContextTypes } from '../context/countriescontext/countriesTypes';

let axiosMock: jest.SpyInstance;

beforeEach(() => {
	axiosMock = jest.spyOn(apiUrl, 'get');
});

afterEach(() => {
	jest.clearAllMocks();
});

interface Props {
	value: CountriesContextTypes;
}

const MockCountryInfo = ({ value }: Props) => {
	return (
		<BrowserRouter>
			<CountryContext.Provider value={value}>
				<ThemeProvider>
					<CountryInfo />
				</ThemeProvider>
			</CountryContext.Provider>
		</BrowserRouter>
	);
};

describe('test countryInfo component', () => {
	test('check if component rendered show spinner while api is running', () => {
		render(<MockCountryInfo value={valueLoading} />);
		const buttonElement = screen.getByRole('button', { name: /back/i });
		const spinnerDiv = screen.getByTestId('spinner');
		expect(buttonElement).toBeInTheDocument();
		expect(spinnerDiv).toBeInTheDocument();
	});

	test('if api ran successfully', async () => {
		render(<MockCountryInfo value={countrySuccessData} />);
		expect(countrySuccessData.fetchSingleCountry).toHaveBeenCalled();
		const countryInfo = screen.getByText(/Federal Republic of Nigeria/i);
		expect(countryInfo).toBeInTheDocument();
	});

	test('if api failed due to network', async () => {
		render(<MockCountryInfo value={valueError} />);
		await apiUrl.get(`/name/${countryData[0].name.official}`);
		expect(axiosMock).toHaveBeenCalledWith(
			`/name/${countryData[0].name.official}`
		);
		expect(axiosMock).toHaveBeenCalledTimes(1);
		const countryInfo = screen.queryByText(/Federal Republic of Nigeria/i);
		const errorText = screen.getByText(/reload page/i);
		expect(countryInfo).not.toBeInTheDocument();
		expect(errorText).toBeInTheDocument();
	});

	test('if api failed due to invalid country name', async () => {
		render(<MockCountryInfo value={countryErrorData} />);
		await apiUrl.get(`/name/${countryData[0].name.official}`);
		expect(axiosMock).toHaveBeenCalledWith(
			`/name/${countryData[0].name.official}`
		);
		expect(axiosMock).toHaveBeenCalledTimes(1);
		const countryInfo = screen.queryByText(/Federal Republic of Nigeria/i);
		const errorText = screen.getByText(/country does not exist/i);
		expect(countryInfo).not.toBeInTheDocument();
		expect(errorText).toBeInTheDocument();
	});
});
