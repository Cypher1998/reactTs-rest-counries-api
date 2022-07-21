import Navbar from '../components/Navbar';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../context/themecontext/themeContext';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MockNavbar = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</ThemeProvider>
	);
};

describe('test cases for navbar component', () => {
	test('render default theme mode text', () => {
		const component = render(<MockNavbar />);
		const themeText = component.getByText(/light mode/i);
		expect(themeText).toBeInTheDocument();
	});

	test('switch to dark mode onclick', () => {
		const { getByTestId } = render(<MockNavbar />);
		const themeChanger = getByTestId('changeToDark');
		userEvent.click(themeChanger);
		const themeText = getByTestId('changeToLight');
		expect(themeText).toBeInTheDocument();
	});
});
