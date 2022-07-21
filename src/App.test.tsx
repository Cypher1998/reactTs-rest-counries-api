import { render, screen } from '@testing-library/react';
import App from './App';

describe('test app component', () => {
	test('app components renders', () => {
		render(<App />);
		const appInfoText = screen.getByRole('heading', {
			name: /where in the world\?/i,
		});
		expect(appInfoText).toBeInTheDocument();
	});
});
