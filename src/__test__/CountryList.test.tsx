import { render, screen } from '@testing-library/react';
import CountryList from '../components/CountryList';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/themecontext/themeContext';
import { data } from '../utils/variables';

const MockCountryList = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<CountryList country={data[0]} />
			</ThemeProvider>
		</BrowserRouter>
	);
};

describe('test countryList component', () => {
	test('check component if rendered', () => {
		render(<MockCountryList />);
		const countryFlag = screen.getByRole('link');
		const text = screen.getByText(/population/i);
		expect(countryFlag).toHaveAttribute(
			'href',
			`/name/${data[0].name.official}`
		);
		expect(text).toBeInTheDocument();
	});
});
