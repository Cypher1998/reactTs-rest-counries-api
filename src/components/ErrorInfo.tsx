import { useLocation } from 'react-router-dom';

interface ErrorProps {
	error: string;
}

const ErrorInfo = ({ error }: ErrorProps) => {
	const location = useLocation();
	return (
		<div className="space-y-2 mt-6">
			{error === 'Network Error' ? (
				<>
					<p className="text-lg">
						{error}. Unable to fetch{' '}
						{location.pathname === '/' ? 'countries' : 'country'}.
					</p>
					<p className="text-xl text-red-500">Reload page!</p>
				</>
			) : (
				<>
					<p className="text-lg">{error}.</p>
					<p className="text-xl text-red-500">Country does not exist.</p>
				</>
			)}
		</div>
	);
};
export default ErrorInfo;
