import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

export const bounceKeyframes = keyframes`
    0%,
    80%,
    100% { transform: scale(0) }
    40% { transform: scale(1.0) }
`;

import colors from '../../style/colors';

export const sizes = {
	xxs: {
		width: '4px',
		height: '4px',
		margin: '1px',
	},
	xs: {
		width: '8px',
		height: '8px',
		margin: '2px',
	},
	sm: {
		width: '12px',
		height: '12px',
		margin: '3px',
	},
	md: {
		width: '18px',
		height: '18px',
		margin: '4px',
	},
	lg: {
		width: '24px',
		height: '24px',
		margin: '6px',
	},
};

export const variants = {
	white: {
		background: colors.white,
	},
	'gray-80': {
		background: colors.gray80,
	},
	blackish: {
		background: colors.blackish,
	},
	brand: {
		background: colors.mainColor,
	},
};


interface DotsLoaderProps {
	alignSelf?: 'center' | 'flex-end' | 'flex-start';
	size: keyof typeof sizes;
	variant: keyof typeof variants;
	justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
	className?: string;
	absoluteCenter?: boolean;
}

const DotsLoaderWrapper = styled.div<DotsLoaderProps>`
	display: flex;
	justify-content: center;

	align-self: ${props => props.alignSelf};

	& > i {
		width: ${props => _.get(sizes, [props.size, 'width'])};
		height: ${props => _.get(sizes, [props.size, 'height'])};
		margin: ${props => _.get(sizes, [props.size, 'margin'])};
		border-radius: 50%;
		display: inline-block;
		background: ${props => _.get(variants, [props.variant, 'background'])};
		animation: ${bounceKeyframes} 800ms infinite ease-in-out both;

		&:last-child {
			margin-right: 0;
		}

		&:nth-child(1) {
			animation-delay: -320ms;
		}

		&:nth-child(2) {
			animation-delay: -160ms;
		}
	}

	&.absolute-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const DotsLoader = ({ className, absoluteCenter, ...rest }: DotsLoaderProps) => (
	<DotsLoaderWrapper
		data-name={'dots-loader-wrapper'}
		justifyContent={'center'}
		className={classNames({ 'absolute-center': absoluteCenter }, className)}
		{...rest}
	>
		<i />
		<i />
		<i />
	</DotsLoaderWrapper>
);

DotsLoader.defaultProps = {
	variant: 'gray-80',
	size: 'xs',
};


export default DotsLoader;
