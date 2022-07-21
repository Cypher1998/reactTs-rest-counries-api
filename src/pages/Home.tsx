import React, { useContext, useState, useTransition } from 'react';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';
import AllCountries from '../components/AllCountries';
// import SearchFilter from '../components/SearchFilter';
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
			className={`shadow-inner py-14 md:pt-20
    ${
			theme
				? 'bg-darkModeBg text-darkModeText'
				: 'bg-lightModeBg text-lightModeText'
		}`}
		>
			<section className="appContainer md:px-12 lg:px-16">
				<div className="py-10 flex flex-col items-start space-y-6 md:space-y-0 md:flex-row md:justify-between">
					<SearchCountry text={text} handleChange={handleChange} />
					<FilterCountry />
				</div>
				<AllCountries query={query} />
			</section>
		</main>
	);
};
export default Home;
