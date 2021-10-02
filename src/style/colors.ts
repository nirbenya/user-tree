export const grays: { [key: string]: string } = {
	gray30: '#4d4d4d',
	gray40: '#666',
	gray50: '#808080',
	gray80: '#ccc',
	gray90: '#e6e6e6',
	gray95: '#f2f2f2',
};

export const avatars: { [key: string]: string } = {
	maroon: '#61062f',
	lightGreen: '#07BB93',
	green: '#00B968',
	purpleLight: '#7650ef',
	ceruleanBlue: '#325db3',
	steelBlue: '#4295b5',
	yellowGreen: '#78bc3c',
	salomonPink: '#ff9e9e',
	cherry: '#C51F55',
};

const colors: { [key: string]: string } = {
	white: '#fff',
	tangerine: '#ff6347',
	blackish: '#333',
	black: '#000',
	transparent: 'rgba(0,0,0,0)',
	purple: '#a543ff',
	lightBlue: '#0097eb',
	yellowLight: '#FFF3D6',
	uclaGold: '#faaf00',
	pine: '#008F85',
	pineLight: '#D6E3E1',
	action: '#1a7dff',
	linkedin: '#0071a1',
	gold: '#FFDC3d',
	rosePink: '#ee62d6',
	cardinal: '#d12440',
	shamrock: '#44d7b6',
	mistyRose: '#ffe6e0',
	ceruleanLight: '#ebf0f9',
	americanRose: '#ef073f',
	actionLight: '#DAEAFF',
	eggplant: '#191B33',
	eggplantLight: '#515565',
	...grays,
	...avatars,
};

export default colors;
