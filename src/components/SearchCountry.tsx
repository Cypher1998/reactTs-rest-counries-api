import { BiSearch } from 'react-icons/bi';
import React, { useContext } from 'react';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';

type SearchCountryProps = {
	text: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchCountry = ({ text, handleChange }: SearchCountryProps) => {
	const { theme } = useContext(ThemeContext) as ThemeContextTypes;

	return (
		<div
			className={`relative flex items-center text-lightModeInput border-2 rounded-md w-full md:w-64 lg:w-96 ${
				theme ? 'border-lightModeInput/10' : 'border-lightModeInput/5 '
			}`}
		>
			<span className="absolute left-5">
				<BiSearch size={21} />
			</span>
			<input
				data-testid="inputText"
				type="text"
				placeholder="Search for a country..."
				className={`w-full py-4 px-14  outline-none rounded-md ${
					theme && 'bg-darkModeElement'
				}`}
				value={text}
				// value="nigeria"
				onChange={handleChange}
			/>
		</div>
	);
};
export default SearchCountry;
