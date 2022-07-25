const Spinner = () => {
	return (
		<div className="spinnerDiv fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center">
			<div
				className="spinner w-16 h-16 rounded-full border-8"
				data-testid="spinner"
			></div>
		</div>
	);
};
export default Spinner;
