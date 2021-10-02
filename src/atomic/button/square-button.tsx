import styled from 'styled-components';
import Button, { ButtonProps } from './button';
import { sizes } from './style';

export interface SquareButtonProps extends ButtonProps {
	'aria-label': string;
}

const SquareButton = styled(Button)<SquareButtonProps>`
	width: ${props => sizes[props.size || 'lg'].height};
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export default SquareButton;
