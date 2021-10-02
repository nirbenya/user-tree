import colors from '../../style/colors';
import { css } from 'styled-components';

const variants = {
	blackish: css`
		color: ${colors.blackish};
	`,
};

const sizes = {
	xs: '10px',
	sm: '12px',
	md: '14px',
	lg: '16px',
	xl: '20px',
	xxl: '24px',
	'2xxl': '32px',
	'3xxl': '40px',
	'4xxl': '50px',
};

export { sizes, variants };
