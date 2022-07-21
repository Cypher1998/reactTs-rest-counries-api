import { createContext, useState } from 'react';
import { ThemeContextTypes, ThemeProviderProps } from './ThemeTypes';

const ThemeContext = createContext<null | ThemeContextTypes>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(false);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
