import FilterCountry from '../components/FilterCountry';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/themecontext/themeContext';
import { CountryProvider } from '../context/countriescontext/countriesContext';
import userEvent from '@testing-library/user-event';

const MockFilterCountry = () => {
	return (
		<ThemeProvider>
			<CountryProvider>
				<BrowserRouter>
					<FilterCountry />
				</BrowserRouter>
			</CountryProvider>
		</ThemeProvider>
	);
};

describe('test filter component', () => {
	test('if filter component renders', () => {
		render(<MockFilterCountry />);
		const element = screen.getByText(/filter by region/i);
		expect(element).toBeTruthy();
	});

	test('if regions table shows and hide', async () => {
		render(<MockFilterCountry />);
		const element = screen.getByText(/filter by region/i);
		userEvent.click(element);
		const regions = screen.getByTestId('regionTable');
		expect(regions.childElementCount).toEqual(6);
		userEvent.click(element);
		expect(regions).not.toBeVisible();
	});
});
