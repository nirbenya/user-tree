import { css } from 'styled-components';
import colors from '../../style/colors';

const types = {
	'p': '',
	'span': '',
	label: '',
	h1: css`
		font-size: 40px;
		line-height: 48px;
	`,
	h2: css`
		font-size: 32px;
		line-height: 40px;
	`,
	h3: css`
		font-size: 24px;
		line-height: 32px;
	`,
	h4: css`
		font-size: 20px;
		line-height: 28px;
	`,
	h5: css`
		font-size: 16px;
		line-height: 24px;
	`,
	h6: css`
		font-size: 14px;
		line-height: 22px;
	`,
};

const variants = {
	blackish: css`
		color: ${colors.blackish};
	`,
	white: css`
		color: ${colors.white};
	`,
	'gray-30': css`
		color: ${colors.gray30};
	`,
	'gray-40': css`
		color: ${colors.gray40};
	`,
	'gray-50': css`
		color: ${colors.gray50};
	`,
	'gray-80': css`
		color: ${colors.gray80};
	`,
	tangerine: css`
		color: ${colors.tangerine};
	`,
	shamrock: css`
		color: ${colors.shamrock};
	`,
	action: css`
		color: ${props => props.theme.actionColor};
	`,
	pine: css`
		color: ${colors.pine};
	`,
	'american-rose': css`
		color: ${colors.americanRose};
	`,
	inherit: css`
		color: inherit;
	`,
	'ucla-gold': css`
		color: ${colors.uclaGold};
	`,
};

export { variants, types };
