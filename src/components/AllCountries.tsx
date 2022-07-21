import { useContext, useEffect } from 'react';
import CountryContext from '../context/countriescontext/countriesContext';
import { CountriesContextTypes } from '../context/countriescontext/countriesTypes';
import Spinner from './Spinner';
import ErrorInfo from './ErrorInfo';
import CountryList from './CountryList';

interface AllCountriesProps {
	query: string;
}

const AllCountries = ({ query }: AllCountriesProps) => {
	const { fetchAllCountries, allCountries, loading, error } = useContext(
		CountryContext
	) as CountriesContextTypes;

	useEffect(() => {
		fetchAllCountries();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filteredCountries = allCountries?.filter((countries) =>
		countries.name.common.toLowerCase().startsWith(query.toLowerCase())
	);

	return (
		<section>
			{loading ? (
				<Spinner />
			) : allCountries && allCountries?.length > 0 ? (
				<div className="allCountries px-4 md:px-0 grid gap-10 items-stretch lg:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{filteredCountries?.map((country) => (
						<CountryList key={country.flags.png} country={country} />
					))}
				</div>
			) : filteredCountries?.length === 0 ? (
				<p className="text-lg">No Countries found...</p>
			) : (
				error !== null && <ErrorInfo error={error} />
			)}
		</section>
	);
};
export default AllCountries;
