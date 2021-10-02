import { colors } from '../../style';
import { css } from 'styled-components';

const variants = {
	'gray-80': css`
		background: ${colors.gray80};
	`,
};

const sizes = {
	xs: {
		width: '32px',
		height: '32px',
		fontSize: '14px',
	},
	sm: {
		width: '40px',
		height: '40px',
		fontSize: '16px',
	},
	md: {
		width: '48px',
		height: '48px',
		fontSize: '18px',
	},
	lg: {
		width: '64px',
		height: '64px',
		fontSize: '22px',
	},
	xl: {
		width: '80px',
		height: '80px',
		fontSize: '26px',
	},
	xxl: {
		width: '96px',
		height: '96px',
		fontSize: '30px',
	},
};

export { sizes, variants };
