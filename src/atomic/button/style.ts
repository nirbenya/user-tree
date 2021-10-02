import { css } from 'styled-components';
import { colors, darken } from '../../style';

export const variants = {
	'brand-secondary': css`
		background: rgba(0, 0, 0, 0.2);
		border-color: transparent;
		outline: none;
		color: white;

		&:hover {
			background: rgba(0, 0, 0, 0.3);
		}

		&:active,
		&.active {
			background: rgba(0, 0, 0, 0.4);
		}
	`,
	'secondary-clean': css`
		background: transparent;
		border-color: transparent;
		outline: none;
		color: ${colors.black};

		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}

		&:active,
		&.active {
			background: rgba(0, 0, 0, 0.2);
		}
	`,
	'brand': css`
		background: ${colors.action};
		border-color: transparent;
		outline: none;
		color: white;

		&:hover {
			background: ${darken(0.05, colors.action)};
		}

		&:active,
		&.active {
			background: ${darken(0.07, colors.action)};
		}
	`,
};

export const sizes = {
	auto: {
		padding: 0,
		height: 'auto',
		fontSize: '16px',
		fontWeight: 600,
	},
	xs: {
		padding: '6px 12px',
		height: '24px',
		fontSize: '12px',
		fontWeight: 400,
		loaderProps: { size: 'xxs' },
	},
	sm: {
		padding: '6px 8px',
		height: '32px',
		fontSize: '14px',
		loaderProps: { size: 'xxs' },
		fontWeight: 600,
	},
	md: {
		padding: '8px 10px',
		height: '40px',
		fontSize: '16px',
		loaderProps: { size: 'xs' },
		fontWeight: 600,
	},
	lg: {
		padding: '6px 16px',
		height: '48px',
		fontSize: '16px',
		loaderProps: { size: 'xs' },
		fontWeight: 600,
	},
	xl: {
		padding: '6px 16px',
		height: '56px',
		fontSize: '16px',
		loaderProps: { size: 'sm' },
		fontWeight: 600,
	},
	xxl: {
		padding: '6px 16px',
		height: '64px',
		fontSize: '18px',
		loaderProps: { size: 'sm' },
		fontWeight: 600,
	},
};
