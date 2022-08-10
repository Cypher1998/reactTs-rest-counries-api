import React from 'react';

export interface ThemeContextTypes {
	theme: boolean;
	toggleTheme: () => void;
}

export type ThemeProviderProps = {
	children: React.ReactNode;
};
