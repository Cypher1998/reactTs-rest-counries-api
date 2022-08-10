import FilterCountry from '../components/FilterCountry';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/themecontext/themeContext';
import CountryContext from '../context/countriescontext/countriesContext';
import userEvent from '@testing-library/user-event';
import { CountriesContextTypes } from '../context/countriescontext/countriesTypes';
import { valueSuccess } from '../utils/variables';

interface Props {
	value: CountriesContextTypes;
}

const MockFilterCountry = ({ value }: Props) => {
	return (
		<ThemeProvider>
			<CountryContext.Provider value={value}>
				<BrowserRouter>
					<FilterCountry />
				</BrowserRouter>
			</CountryContext.Provider>
		</ThemeProvider>
	);
};

describe('test filter component', () => {
	beforeEach(() => {
		render(<MockFilterCountry value={valueSuccess} />);
	});

	test('if filter component renders', () => {
		expect(screen.getByText(/filter by region/i)).toBeTruthy();
	});

	describe('test filter table', () => {
		beforeEach(() => {
			// get and click region container
			userEvent.click(screen.getByText(/filter by region/i));
		});

		test('if regions table contains 6 children', () => {
			const regions = screen.getByTestId('regionTable');
			expect(regions.childElementCount).toEqual(6);
		});

		it('region table should not be visible', () => {
			userEvent.click(screen.getByText(/filter by region/i));
			const region = screen.queryByTestId('regionTable');
			expect(region).not.toBeInTheDocument();
		});

		test("if clicking a region query's API", async () => {
			const regionText = screen.getByText(/africa/i);
			userEvent.click(regionText);
			expect(valueSuccess.filterRegionCountries).toHaveBeenCalledTimes(1);
			expect(valueSuccess.filterRegionCountries).toHaveBeenCalledWith(
				`${regionText.textContent}`
			);
		});
	});
});
