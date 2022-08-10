import { useContext } from 'react';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextTypes;

	return (
		<header
			className={`fixed w-full z-10
				${
					theme
						? 'bg-darkModeElement text-darkModeText'
						: 'bg-darkModeText text-lightModeText'
				}`}
		>
			<nav className="appContainer md:px-8 lg:px-12">
				<div className="flex justify-between items-center py-6">
					<h3 className="font-extrabold text-lg lg:text-xl">
						<Link to="/">Where in the world?</Link>
					</h3>

					<p
						className="flex space-x-2 items-center cursor-pointer lg:text-lg"
						onClick={toggleTheme}
					>
						<span>{theme ? <BsMoonFill /> : <BsSun />}</span>

						<span>{theme ? 'Dark Mode' : 'Light Mode'}</span>
					</p>
				</div>
			</nav>
		</header>
	);
};
export default Navbar;
