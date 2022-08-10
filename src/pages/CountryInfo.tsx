import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import CountryContext from '../context/countriescontext/countriesContext';
import { CountriesContextTypes } from '../context/countriescontext/countriesTypes';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';
import Spinner from '../components/Spinner';
import ErrorInfo from '../components/ErrorInfo';
import { formatUrlText } from '../utils/filterTexts';

const CountryInfo = () => {
	const { country } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const {
		fetchSingleCountry,
		fetchAlphaCountry,
		singleCountry,
		loading,
		error,
	} = useContext(CountryContext) as CountriesContextTypes;

	const { theme } = useContext(ThemeContext) as ThemeContextTypes;

	useEffect(() => {
		if (location.pathname === `/alpha/${country}`) {
			fetchAlphaCountry(country as string);
		} else {
			fetchSingleCountry(formatUrlText(country as string));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [country]);

	return (
		<main
			className={`shadow-inner pt-24 pb-16 md:pt-28
		${
			theme
				? 'bg-darkModeBg text-darkModeText'
				: 'bg-lightModeBg text-lightModeText'
		}`}
		>
			<div className="appContainer singleCountry md:px-12 lg:px-16">
				<button
					onClick={() => navigate(-1)}
					className={`capitalize py-2 px-5 md:py-3 md:px-8 rounded-md flex items-center space-x-3 shadow-lg ring-2 ring-darkModeElement/5 ${
						theme
							? 'bg-darkModeElement text-darkModeText hover:bg-darkModeText hover:text-lightModeText'
							: 'bg-darkModeText text-lightModeText hover:bg-darkModeElement hover:text-darkModeText '
					}`}
				>
					<BsArrowLeft size={20} />
					<span>back</span>
				</button>
				{loading ? (
					<Spinner />
				) : singleCountry && singleCountry.length > 0 ? (
					singleCountry.map((country) => {
						const {
							flags,
							name,
							population,
							region,
							subregion,
							tld,
							currencies,
							languages,
							borders,
						} = country;

						const cur: { name: string; symbol: string }[] =
							Object.values(currencies);
						const lang: string[] = Object.values(languages);

						return (
							<div
								key={name.common}
								className="countryDetails mt-10 grid lg:grid-cols-2 gap-10 lg:gap-20"
							>
								<img
									src={flags.png}
									alt={name.common}
									className="rounded-sm w-96 h-auto md:h-48  lg:w-full"
								/>
								<div className="space-y-6">
									<h3 className="font-extrabold text-2xl">{name.common}</h3>
									<div className="grid gap-6 md:grid-cols-2">
										<div className="space-y-2">
											<p className="font-bold">
												Official Name:{' '}
												<span className="font-normal">{name.official}</span>
											</p>
											<p className="font-bold">
												Population:{' '}
												<span className="font-normal">{population}</span>
											</p>
											<p className="font-bold">
												Region: <span className="font-normal">{region}</span>
											</p>
											<p className="font-bold">
												Sub Region:{' '}
												<span className="font-normal">{subregion}</span>
											</p>
											<p className="font-bold">
												Capital:{' '}
												<span className="font-normal">
													{country.capital[0]}
												</span>
											</p>
										</div>
										<div className="space-y-2">
											<p className="font-bold">
												Top Level Domain:{' '}
												<span className="font-normal">{tld[0]}</span>
											</p>
											<p className="font-bold">
												Currencies:{' '}
												<span className="font-normal">{cur[0].name}</span>
											</p>
											<p className="font-bold">
												Languages:{' '}
												<span className="font-normal">{lang.join(', ')}</span>
											</p>
										</div>
									</div>
									{borders && (
										<div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
											<p className="font-semibold text-lg w-52">
												Border Countries:
											</p>
											<div className="flex flex-wrap">
												{borders?.map((border: string) => (
													<Link
														to={`/alpha/${border}`}
														className="mx-1 mb-3"
														key={border}
													>
														<span
															className={`font-normal text-sm py-1 px-6 rounded-md border ${
																theme
																	? 'bg-darkModeElement text-darkModeText border-slate-700 hover:bg-white hover:text-lightModeText hover:border-slate-200'
																	: 'bg-white text-lightModeText border-slate-200 hover:bg-darkModeElement hover:text-darkModeText hover:border-slate-700'
															}`}
														>
															{border}
														</span>
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						);
					})
				) : (
					error !== null && <ErrorInfo error={error} />
				)}
			</div>
		</main>
	);
};

export default CountryInfo;
