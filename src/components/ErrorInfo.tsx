interface ErrorProps {
	error: string;
}

const ErrorInfo = ({ error }: ErrorProps) => {
	return error === 'Network Error' ? (
		<section className="space-y-1 mt-5">
			<p className="text-lg">{error}. Unable to fetch countries.</p>
			<p className="text-xl text-red-500">Reload page!</p>
		</section>
	) : (
		<section className="space-y-1 mt-5">
			<p className="text-lg">{error}.</p>
			<p className="text-xl text-red-500">Country does not exist.</p>
		</section>
	);
};
export default ErrorInfo;
