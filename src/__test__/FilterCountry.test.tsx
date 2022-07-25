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
	test('if filter component renders', () => {
		render(<MockFilterCountry value={valueSuccess} />);
		const element = screen.getByText(/filter by region/i);
		expect(element).toBeTruthy();
	});

	test('if regions table shows and hide', async () => {
		render(<MockFilterCountry value={valueSuccess} />);
		const element = screen.getByText(/filter by region/i);
		userEvent.click(element);
		const regions = screen.getByTestId('regionTable');
		expect(regions.childElementCount).toEqual(6);
		userEvent.click(element);
		expect(regions).not.toBeVisible();
	});

	test("if clicking a region query's API", async () => {
		render(<MockFilterCountry value={valueSuccess} />);
		const element = screen.getByText(/filter by region/i);
		userEvent.click(element);
		const regionText = screen.getByText(/africa/i);
		userEvent.click(regionText);
		expect(valueSuccess.filterRegionCountries).toHaveBeenCalledTimes(1);
		expect(valueSuccess.filterRegionCountries).toHaveBeenCalledWith(
			`${regionText.textContent}`
		);
	});
});
