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
		if (allCountries === null) {
			fetchAllCountries();
		} else {
			return;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filteredCountries = allCountries?.filter((countries) =>
		countries.name.common.toLowerCase().startsWith(query.toLowerCase())
	);

	return (
		<section>
			{loading ? (
				<Spinner />
			) : !allCountries && error ? (
				<ErrorInfo error={error} />
			) : filteredCountries && filteredCountries?.length > 0 ? (
				<div
					className="allCountries px-4 md:px-0 grid gap-12 items-stretch w-11/12 sm:w-10/12 mx-auto md:gap-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-full"
					data-testid="countriesDiv"
				>
					{filteredCountries?.map((country) => (
						<CountryList key={country.flags.png} country={country} />
					))}
				</div>
			) : (
				filteredCountries?.length === 0 && (
					<p className="text-lg">No Countries found...</p>
				)
			)}
		</section>
	);
};
export default AllCountries;
