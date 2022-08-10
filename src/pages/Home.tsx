import React, { useContext, useState, useTransition } from 'react';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';
import AllCountries from '../components/AllCountries';
import SearchCountry from '../components/SearchCountry';
import FilterCountry from '../components/FilterCountry';

const Home = () => {
	const { theme } = useContext(ThemeContext) as ThemeContextTypes;
	const [text, setText] = useState('');
	const [query, setQuery] = useState('');
	const [, startTransition] = useTransition();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
		startTransition(() => setQuery(e.target.value));
	};

	return (
		<main
			className={`shadow-inner pt-24 pb-20 md:pt-28
    ${
			theme
				? 'bg-darkModeBg text-darkModeText'
				: 'bg-lightModeBg text-lightModeText'
		}`}
		>
			<div className="appContainer homeSection md:px-8 lg:px-12 flex flex-col space-y-8 lg:space-y-10">
				<div className="flex flex-col items-start space-y-4 md:space-y-0 md:flex-row md:justify-between">
					<SearchCountry text={text} handleChange={handleChange} />
					<FilterCountry />
				</div>
				<AllCountries query={query} />
			</div>
		</main>
	);
};
export default Home;
