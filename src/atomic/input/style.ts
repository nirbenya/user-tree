import { css } from 'styled-components';
import colors from '../../style/colors';

const sizes = {
	xxxl: {
		height: '118px',
	},
	xl: {
		height: '56px',
	},
	lg: {
		height: '40px',
	},
	md: {
		height: '24px',
	},
	auto: {
		height: 'auto',
	},
};

const types = {
	textarea: {},
	input: {},
};

const variants = {
	action: css`
		background: ${colors.white};

		&:focus,
		&.focus {
			border: 1px solid ${colors.action};
			box-shadow: 0 0 0 5px ${colors.actionLight};
		}
	`,
};

export { sizes, types, variants };
