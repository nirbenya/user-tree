import _ from 'lodash';
import * as React from 'react';
import classNames from 'classnames';
import { borderRadiusOptions } from './style';
import { spacing } from '../../style/spacing';
import styled, { css } from 'styled-components';
import { withSpacing } from '../../style/spacing';

export interface SpacingProps {
	marginTop?: keyof typeof spacing;
	margin?: keyof typeof spacing;
	marginBottom?: keyof typeof spacing;
	marginLeft?: keyof typeof spacing;
	marginRight?: keyof typeof spacing;
	marginVertical?: keyof typeof spacing;
	marginHorizontal?: keyof typeof spacing;
	padding?: keyof typeof spacing;
	paddingTop?: keyof typeof spacing;
	paddingBottom?: keyof typeof spacing;
	paddingRight?: keyof typeof spacing;
	paddingLeft?: keyof typeof spacing;
	paddingVertical?: keyof typeof spacing;
	paddingHorizontal?: keyof typeof spacing;
}

export interface BoxProps extends SpacingProps {
	componentClass?: any;
	className?: string;
	borderTop?: 'gray-90';
	align?: 'left' | 'center' | 'right';
	clickable?: boolean;
	block?: boolean;
	center?: boolean;
	borderRadius?: keyof typeof borderRadiusOptions;
	backgroundImage?: string;
	borderRadiusTop?: keyof typeof borderRadiusOptions;
	borderRadiusBottom?: keyof typeof borderRadiusOptions;
	verticalAlign?: 'middle' | 'top';
	alignSelf?: 'flex-start' | 'center' | 'flex-end';
	ellipsis?: boolean;
	display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'none';
	flex?: string;
	flexWrap?: 'wrap' | 'nowrap';
	flexDirectionSm?: 'column';
	flexGrow?: number;
	flexShrink?: number;
	position?: 'static' | 'relative' | 'absolute' | 'fixed';
	fixed?: boolean;
	boxRef?: any;
	cursor?: 'default';
	absoluteCenter?: boolean;
	disabled?: boolean;
	style?: React.CSSProperties;
	active?: boolean;
	maxWidth?: string;
	minWidth?: string | number;
	maxHeight?: string | number;
	gap?: keyof typeof spacing;
	height?: string;
	justifyContent?: React.CSSProperties['justifyContent'];
	overflow?: 'scroll' | 'auto' | 'hidden' | 'visible';
	overflowX?: 'scroll' | 'auto' | 'hidden' | 'visible';
	overflowY?: 'scroll' | 'auto' | 'hidden' | 'visible';
	flexDirection?: 'column' | 'row';
	alignContent?: 'center' | 'flex-start' | 'flex-end';
	alignItems?: 'center' | 'flex-start' | 'flex-end';
	children?: any;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	minHeight?: number | string;
	role?: React.AriaRole;
	type?: 'button';
	href?: string;
	to?: string;
	onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
	tabIndex?: 0;
}

const BoxComponent = ({
	componentClass: TagName,
	className,
	borderRadius,
	borderRadiusTop,
	borderRadiusBottom,
	block,
	ellipsis,
	boxRef,
	absoluteCenter,
	disabled,
	style,
	active,
	...rest
}: BoxProps) => {
	const generalClassNames = classNames({ block }, { ellipsis }, { active });

	const borderRadiusClassNames = classNames(
		{ [`border-radius-${borderRadius}`]: !!borderRadius },
		{ [`border-radius-top-${borderRadiusTop}`]: !!borderRadiusTop },
		{ [`border-radius-bottom-${borderRadiusBottom}`]: !!borderRadiusBottom },
		{ [`border-radius-bottom-${borderRadiusBottom}`]: !!borderRadiusBottom },
	);

	const computedClassName = classNames(borderRadiusClassNames, generalClassNames);

	return (
		<TagName
			className={classNames(
				'box-box',
				className,
				computedClassName,
				{ 'absolute-center': absoluteCenter },
				{ disabled },
			)}
			disabled={disabled}
			style={style}
			ref={boxRef}
			{...rest}
		/>
	);
};

const StyledBox = styled(BoxComponent).withConfig({
	shouldForwardProp: prop =>
		!_.includes(
			[
				'overflow',
				'overflowY',
				'overflowX',
				'margin',
				'marginBottom',
				'marginTop',
				'marginRight',
				'marginLeft',
				'marginVertical',
				'marginHorizontal',
				'paddingBottom',
				'padding',
				'paddingTop',
				'paddingLeft',
				'paddingRight',
				'paddingHorizontal',
				'paddingVertical',
				'flexDirection',
				'justifyContent',
				'alignContent',
				'clickable',
				'minWidth',
				'maxWidth',
				'maxHeight',
				'display',
				'flex',
				'flexGrow',
				'flexShrink',
				'flexWrap',
				'flexDirectionSm',
				'alignSelf',
				'alignItems',
				'position',
				'cursor',
				'height',
				'minHeight',
			],
			prop,
		),
})<BoxProps>`
	&.box-box {
		display: ${props => props.display};
		max-width: ${props => (_.isNumber(props.maxWidth) ? `${props.maxWidth}px` : props.maxWidth)};
		min-width: ${props => (_.isNumber(props.minWidth) ? `${props.minWidth}px` : props.minWidth)};
		max-height: ${props => (_.isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight)};
		min-height: ${props => (_.isNumber(props.minHeight) ? `${props.minHeight}px` : props.minHeight)};

		height: ${props => props.height};
		vertical-align: ${props => props.verticalAlign};
		overflow: ${props => props.overflow};
		overflow-y: ${props => props.overflowY};
		overflow-x: ${props => props.overflowX};
		position: ${props => props.position};
		flex: ${props => props.flex};
		flex-grow: ${props => props.flexGrow};
		gap: ${props => props.gap && spacing[props.gap]};
		flex-shrink: ${props => props.flexShrink};
		flex-direction: ${props => props.flexDirection};
		flex-wrap: ${props => props.flexWrap};
		align-items: ${props => props.alignItems};
		justify-content: ${props => props.justifyContent};
		align-content: ${props => props.alignContent};
		text-align: ${props => props.align};
		align-self: ${props => props.alignSelf};
		cursor: ${props => (props.clickable ? 'pointer' : props.cursor)};
		border-radius: ${props => props.borderRadius && _.get(borderRadiusOptions, [props.borderRadius, 'size'])};

		${props =>
			props.borderRadiusTop &&
			css`
				border-top-left-radius: ${borderRadiusOptions[props.borderRadiusTop || 'none']?.size};
				border-top-right-radius: ${borderRadiusOptions[props.borderRadiusTop || 'none']?.size};
			`};

		${props =>
			props.borderRadiusBottom &&
			css`
				border-bottom-left-radius: ${borderRadiusOptions[props.borderRadiusBottom || 'none']?.size};
				border-bottom-right-radius: ${borderRadiusOptions[props.borderRadiusBottom || 'none']?.size};
			`};

		${withSpacing};

		.ellipsis,
		&.ellipsis {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.block {
			width: 100%;
		}

		&.disabled,
		&.disabled * {
			cursor: not-allowed;
		}

		&.absolute-center {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;

const Box = (props: BoxProps): JSX.Element => <StyledBox {...props} />;

Box.defaultProps = {
	componentClass: 'div',
	style: {},
};

export const BoxWithRef = React.forwardRef((props: BoxProps, ref) => <Box {...props} boxRef={ref} />);

export const Section = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'section'} {...props} ref={ref} />
));
export const Flex = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'div'} display={'flex'} {...props} ref={ref} />
));
export const Div = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'div'} {...props} ref={ref} />
));
export const Span = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'span'} {...props} ref={ref} />
));

export const Article = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'article'} {...props} ref={ref} />
));

export const Aside = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'aside'} {...props} ref={ref} />
));
export const Footer = React.forwardRef((props: BoxProps, ref) => (
	<BoxWithRef componentClass={'footer'} {...props} ref={ref} />
));

export default Box;
