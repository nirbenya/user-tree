export const grays: { [key: string]: string } = {
	gray30: '#4d4d4d',
	gray40: '#666',
	gray50: '#808080',
	gray80: '#ccc',
	gray90: '#e6e6e6',
	gray95: '#f2f2f2',
};

const colors: { [key: string]: string } = {
	white: '#fff',
	tangerine: '#ff6347',
	blackish: '#333',
	black: '#000',
	transparent: 'rgba(0,0,0,0)',
	action: '#1a7dff',
	actionLight: '#DAEAFF',
	...grays,
};

export default colors;
