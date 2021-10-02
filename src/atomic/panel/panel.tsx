import _ from 'lodash';
import Box from '../box';
import { BoxProps } from '../box/box';
import styled, { css } from 'styled-components';
import colors from '../../style/colors';

export const variants = {
	'white-border': css`
		background: ${colors.white};
		border: 1px solid ${colors.gray90};
	`,
	'white-border-shadow': css`
		background: ${colors.white};
		border: 1px solid ${colors.gray90};
		box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.12);
	`,
	'white-border-gray-80': css`
		background: ${colors.white};
		border: 1px solid ${colors.gray80};
	`,
	shadow: css`
		background: ${colors.white};
		box-shadow: 0 4px 22px rgba(0, 0, 0, 0.07);
		border-radius: 8px;
	`,
	blackish: css`
		background: ${colors.blackish};
	`,
	'gray-90': css`
		background: ${colors.gray90};
	`,
	'gray-95': css`
		background: ${colors.gray95};
	`,
	shamrock: css`
		background: ${colors.shamrock};
	`,
	white: css`
		background: ${colors.white};
	`,
	'main-color': css`
		background: ${props => props.theme.mainColor};
	`,
	'action-light': css`
		background: ${props => props.theme.actionLight};
	`,
	'action': css`
		background: ${props => props.theme.actionColor};
	`,
	'misty-rose': css`
		background: ${colors.mistyRose};
		color: ${colors.blackish};
	`,
	'border-bottom-gray-with-shadow': css`
		border-bottom: 1px solid ${colors.gray90};
		box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.12);
	`,
	'border-top-gray-90': css`
		border-top: 1px solid ${colors.gray90};
	`,
	'border-bottom-gray-90': css`
		border-bottom: 1px solid ${colors.gray90};
	`,
	'border-right-gray-90': css`
		border-right: 1px solid ${colors.gray90};
	`,
	'yellow-light': css`
		background: ${colors.yellowLight};
		color: ${colors.blackish};
	`,
	'eggplant': css`
		background: ${colors.eggplant};
		color: ${colors.white};
	`,
	'white-action-border': css`
		background: ${colors.white};
		border: 1px solid ${props => props.theme.actionColor};
	`,
};

interface PanelProps extends BoxProps {
	variant?: keyof typeof variants;
}

const Panel = styled(Box).withConfig({
	shouldForwardProp: prop => !_.includes(['variant'], prop),
})<PanelProps>`
	${props => props.variant && variants[props.variant]};
`;

export default Panel;
