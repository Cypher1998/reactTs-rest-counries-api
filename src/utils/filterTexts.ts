export const filterTexts = ['africa', 'asia', 'america', 'europe', 'oceania'];

export const formatUrlText = (text: string): string => {
	const oldText = text?.split('-');
	const newText = oldText?.join(' ');
	return newText;
};

export const formatLinkText = (text: string): string => {
	const oldText = text.split(' ');
	const newText = oldText.join('-');
	return newText;
};
