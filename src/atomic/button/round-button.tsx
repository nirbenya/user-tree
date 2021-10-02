import styled from 'styled-components';
import SquareButton from './square-button';

import { SquareButtonProps } from './square-button';

const RoundButton = styled(SquareButton)<SquareButtonProps>`
	border-radius: 50%;
`;

export default RoundButton;
