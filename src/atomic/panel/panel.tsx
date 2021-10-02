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
	'card': css`
		background: ${colors.gray95};
		box-shadow: 0 4px 2px -4px rgba(0, 0, 0, 0.12);
	`,
	shadow: css`
		background: ${colors.white};
		box-shadow: 0 4px 22px rgba(0, 0, 0, 0.07);
		border-radius: 8px;
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
