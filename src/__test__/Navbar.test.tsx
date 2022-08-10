import Navbar from '../components/Navbar';
import { render, screen } from '@testing-library/react';
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
	beforeEach(() => {
		render(<MockNavbar />);
	});

	test('render default theme mode text', () => {
		expect(screen.getByText(/light mode/i)).toBeInTheDocument();
	});

	test('switch to dark mode onclick', () => {
		const themeText = screen.getByText(/light mode/i);
		userEvent.click(themeText);
		const oldThemeText = screen.queryByText(/light mode/i);
		expect(oldThemeText).not.toBeInTheDocument();
		expect(screen.getByText(/dark mode/i)).toBeInTheDocument();
	});
});
