import { useContext } from 'react';
import ThemeContext from '../context/themecontext/themeContext';
import { ThemeContextTypes } from '../context/themecontext/ThemeTypes';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { theme, setTheme } = useContext(ThemeContext) as ThemeContextTypes;

	const changeTheme = () => {
		setTheme((prevState) => !prevState);
	};

	return (
		<header
			className={`fixed w-full z-10
				${
					theme
						? 'bg-darkModeElement text-darkModeText'
						: 'bg-darkModeText text-lightModeText'
				}`}
		>
			<nav className="appContainer md:px-12 lg:px-16 xl:px-12">
				<div className="flex justify-between items-center py-5 md:py-6">
					<h3 className="font-extrabold text-lg">
						<Link to="/">Where in the world?</Link>
					</h3>
					{theme ? (
						<p
							className="flex space-x-2 items-center cursor-pointer"
							onClick={changeTheme}
							data-testid="changeToLight"
						>
							<span>
								<BsMoonFill />
							</span>
							<span>Dark Mode</span>
						</p>
					) : (
						<p
							className="flex space-x-2 items-center cursor-pointer"
							onClick={changeTheme}
							data-testid="changeToDark"
						>
							<span>
								<BsSun />
							</span>
							<span>Light Mode</span>
						</p>
					)}
				</div>
			</nav>
		</header>
	);
};
export default Navbar;
