import { useContext } from 'react';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';
import { Link } from 'react-router-dom';
import { formatLinkText } from '../utils/filterTexts';

interface CountryListProps {
	country: { [key: string]: any };
}

const CountryList = ({ country }: CountryListProps) => {
	const { name, population, flags, region, capital } = country;
	const { theme } = useContext(ThemeContext) as ThemeContextTypes;

	return (
		<Link to={`/name/${formatLinkText(name.official)}`}>
			<div
				className={`country space-y-4 rounded-md shadow-md  ${
					theme ? 'bg-darkModeElement' : 'bg-darkModeText'
				}`}
			>
				<div className="countryInfo">
					<img
						src={flags.png}
						alt={name.common}
						className="w-full rounded-t-md"
					/>
				</div>
				<div className="px-4 space-y-1 pb-4">
					<h3 className="font-bold mb-2">{name.common}</h3>
					<p className="font-semibold">
						Population:{' '}
						<span className="font-light">
							{population.toLocaleString('en-us')}
						</span>{' '}
					</p>
					<p className="font-semibold">
						Region: <span className="font-light">{region}</span>{' '}
					</p>
					<p className="font-semibold">
						Capital:{' '}
						<span className="font-light">
							{capital?.map((capital: string) => capital)}
						</span>{' '}
					</p>
				</div>
			</div>
		</Link>
	);
};
export default CountryList;
