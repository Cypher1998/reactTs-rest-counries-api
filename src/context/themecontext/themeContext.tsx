import { createContext, useState } from 'react';
import { ThemeContextTypes, ThemeProviderProps } from './ThemeTypes';

const ThemeContext = createContext<null | ThemeContextTypes>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(false);

	const toggleTheme = () => {
		setTheme((prevState) => !prevState);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
