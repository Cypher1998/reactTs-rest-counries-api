import SearchCountry from '../components/SearchCountry';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/themecontext/themeContext';

interface MockProps {
	text: string;
}
const MockSearchCountry = ({ text }: MockProps) => {
	const handleChange = jest.fn();
	return (
		<ThemeProvider>
			<BrowserRouter>
				<SearchCountry text={text} handleChange={handleChange} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

describe('testing the input component', () => {
	test('check if input renders', () => {
		render(<MockSearchCountry text="" />);
		const inputElement = screen.getByPlaceholderText(/search for a country/i);
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveValue('');
	});

	test('if user is ableto type', async () => {
		render(<MockSearchCountry text="nigeria" />);
		const inputElement = await screen.findByTestId('inputText');
		expect(inputElement).toHaveValue('nigeria');
	});
});
