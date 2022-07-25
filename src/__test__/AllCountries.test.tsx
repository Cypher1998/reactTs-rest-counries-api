import { render, screen } from '@testing-library/react';
import AllCountries from '../components/AllCountries';
import CountryContext, {
	apiUrl,
} from '../context/countriescontext/countriesContext';
import { ThemeProvider } from '../context/themecontext/themeContext';
import { BrowserRouter } from 'react-router-dom';
import { valueLoading, valueError, valueSuccess } from '../utils/variables';
import { CountriesContextTypes } from '../context/countriescontext/countriesTypes';

let axiosMock: jest.SpyInstance;

beforeEach(() => {
	axiosMock = jest.spyOn(apiUrl, 'get');
});

afterEach(() => {
	jest.clearAllMocks();
});

interface Props {
	query: string;
	value: CountriesContextTypes;
}
const MockAllCountries = ({ query, value }: Props) => {
	return (
		<BrowserRouter>
			<CountryContext.Provider value={value}>
				<ThemeProvider>
					<AllCountries query={query} />
				</ThemeProvider>
			</CountryContext.Provider>
		</BrowserRouter>
	);
};

describe('text all-countries component', () => {
	test('show spinner while api is running', async () => {
		render(<MockAllCountries query="" value={valueLoading} />);
		const spinnerComponent = screen.getByTestId('spinner');
		expect(spinnerComponent).toBeInTheDocument();
	});

	test('if api ran successfully', async () => {
		render(<MockAllCountries query="" value={valueSuccess} />);
		expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
		await apiUrl.get('/all');
		expect(axiosMock).toHaveBeenCalledWith('/all');
		expect(axiosMock).toHaveBeenCalledTimes(1);
		const countryName = screen.getByText(/nigeria/i);
		expect(countryName).toBeInTheDocument();
	});

	test('if api failed', async () => {
		render(<MockAllCountries query="" value={valueError} />);
		expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
		await apiUrl.get('/all');
		expect(axiosMock).toHaveBeenCalledWith('/all');
		const getErrorText = screen.getByText(/unable to fetch countries/i);
		expect(getErrorText).toBeInTheDocument();
	});

	test('if filter text matches data displayed', () => {
		render(<MockAllCountries query="nigeria" value={valueSuccess} />);
		const countryContainer = screen.getByTestId('countriesDiv');
		expect(countryContainer.childElementCount).toEqual(1);
	});
});
