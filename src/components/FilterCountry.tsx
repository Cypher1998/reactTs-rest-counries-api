import { useState, useContext, useEffect } from 'react';
import { filterTexts } from '../utils/filterTexts';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import CountryContext from '../context/countriescontext/countriesContext';
import { CountriesContextTypes } from '../context/countriescontext/countriesTypes';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';

const FilterCountry = () => {
	const [showFilterTable, setShowFilterTable] = useState(false);

	const { theme } = useContext(ThemeContext) as ThemeContextTypes;

	const { filterRegionCountries, fetchAllCountries, allCountries } = useContext(
		CountryContext
	) as CountriesContextTypes;

	const showFilter = () => {
		setShowFilterTable((prevState) => !prevState);
	};

	const hideFilterTable = (time: number) => {
		setTimeout(() => {
			setShowFilterTable(false);
		}, time);
	};

	useEffect(() => {
		hideFilterTable(500);
	}, [filterRegionCountries]);

	const handleFetch = () => {
		if (allCountries && allCountries?.length > 150) {
			hideFilterTable(200);
			return;
		} else {
			fetchAllCountries();
			hideFilterTable(500);
		}
	};

	return (
		<div className="filterDiv space-y-1 w-56 relative">
			<p
				className={`flex items-center justify-between border-2 cursor-pointer py-3 px-5 rounded-lg font-semibold hover:border-slate-300 ${
					theme
						? 'bg-darkModeElement border-lightModeInput/5'
						: 'bg-darkModeText border-lightModeInput/5'
				}`}
				onClick={showFilter}
			>
				<span>Filter By Region </span>
				<span>
					{!showFilterTable ? (
						<MdKeyboardArrowDown size={23} />
					) : (
						<MdKeyboardArrowUp size={23} />
					)}
				</span>
			</p>
			{showFilterTable && (
				<div
					data-testid="regionTable"
					className={`absolute top-54 w-56 border-2 shadow-md font-semibold ${
						theme
							? 'bg-darkModeElement border-lightModeInput/5'
							: 'bg-darkModeText border-lightModeInput/5'
					} rounded-lg p-2`}
				>
					<p
						className="p-2 cursor-pointer hover:bg-lightModeInput/50 rounded-md"
						onClick={handleFetch}
					>
						All Regions
					</p>
					{filterTexts.map((filterText) => (
						<p
							key={filterText}
							className="p-2 cursor-pointer hover:bg-lightModeInput/50 rounded-md capitalize"
							onClick={() => filterRegionCountries(filterText)}
						>
							{filterText}
						</p>
					))}
				</div>
			)}
		</div>
	);
};
export default FilterCountry;
