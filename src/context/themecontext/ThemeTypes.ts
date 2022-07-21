import React from 'react';

export interface ThemeContextTypes {
	theme: boolean;
	setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ThemeProviderProps = {
	children: React.ReactNode;
};
