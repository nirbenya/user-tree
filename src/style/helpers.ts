import { darken as makeDarker, lighten as makeLighter } from 'polished';

export const darken = (amount: number, color: string) => {
	if (!color) return '';

	return makeDarker(amount, color);
};

export const lighten = (amount: number, color: string) => {
	if (!color) return '';

	return makeLighter(amount, color);
};
