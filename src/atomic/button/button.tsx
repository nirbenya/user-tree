import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

// components
import DotsLoader from '../dots-loader';
import { variants, sizes } from './style';
import { colors } from '../../style';

export interface ButtonProps {
	variant: keyof typeof variants;
	isLoading?: boolean;
	children?: React.ReactNode | string;
	className?: string;
	active?: boolean;
	type?: 'button' | 'submit';
	size: keyof typeof sizes;
	loaderProps?: { loading?: boolean; variant?: any };
	disabled?: boolean;
	'data-name'?: string;
	'data-action'?: string;
	'data-value'?: string;
	'data-id'?: string;
	'aria-label'?: string;
	componentClass?: React.ElementType;
	to?: string;
	weight?: 500 | 600;
	alignItems?: 'center' | 'flex-start' | 'flex-end';
	block?: boolean;
	justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between';
	display?: 'block' | 'flex' | 'inline-flex';
	animation?: string;
	flexShrink?: 1 | 0;
	textAlign?: 'left' | 'right' | 'center';
	height?: string;
	whiteSpace?: string;
	onClick?: React.MouseEventHandler<any>;
	textTransform?: 'capitalize';
	position?: 'relative' | 'absolute' | 'fixed' | 'static';
	flexGrow?: number;
}

const ButtonComponent = styled(
	({
		onClick,
		className,
		children,
		isLoading,
		componentClass: Component = 'button',
		type = 'button',
		block,
		...rest
	}: ButtonProps) => {
		return (
			<Component
				type={Component === 'button' ? type : undefined}
				onClick={onClick}
				className={classNames({ block }, className)}
				{...rest}
			>
				{isLoading ? <DotsLoader variant={'white'} className="center-block" /> : children}
			</Component>
		);
	},
)<ButtonProps>`
	${props => variants[props.variant || 'default']};

	padding: ${props => sizes[props.size]?.padding};
	height: ${props => props.height || sizes[props.size].height};
	border-radius: 8px;
	text-transform: ${props => props.textTransform};
	transition: all 160ms ease;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
	display: ${props => (props.block ? 'flex' : 'inline-flex')};
	align-items: ${props => props.alignItems || 'center'};
	justify-content: ${props => props.justifyContent || 'center'};
	font-size: ${props => sizes[props.size].fontSize};
	position: ${props => props.position || 'relative'};

	&:focus-visible {
		box-shadow: 0 0 7px cornflowerblue;
	}

	${props =>
		props.isLoading &&
		css`
			&,
			& > *:not(.button-loader) {
				color: transparent !important;
			}
		`};

	${props =>
		props.block &&
		css`
			width: 100%;
		`};

	${props =>
		props.display === 'block' &&
		css`
			display: block;
		`};

	${props =>
		props.animation &&
		css`
			&:hover:not([disabled]):not(.disabled) {
				& > * {
					animation: ${props.animation} 600ms 2;
				}
			}
		`};

	${props => css`
		flex-shrink: ${props.flexShrink};
	`};

	${props => css`
		flex-grow: ${props.flexGrow};
	`};

	${props =>
		props.whiteSpace &&
		css`
			white-space: ${props.whiteSpace};
		`};

	${props =>
		props.textAlign &&
		css`
			text-align: ${props.textAlign};
		`};

	&,
	& * {
		font-weight: ${props => sizes[props.size]?.fontWeight};
	}

	&[disabled] {
		cursor: not-allowed;
		background: ${colors.gray50};
		color: ${colors.gray80};
	}
`;

const Button = (props: ButtonProps) => <ButtonComponent {...props} />;

Button.defaultProps = {
	size: 'xxl',
	variant: 'brand',
	type: 'button',
};

export default Button;
