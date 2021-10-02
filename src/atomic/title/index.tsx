import styled, { css } from 'styled-components';
import * as React from 'react';
import classNames from 'classnames';
import { types, variants } from './style';
import { withSpacing } from '../../style';
import { SpacingProps } from '../box/box';

export type Weights = 700 | 500 | 400 | 'inherit';

export interface TitleProps extends SpacingProps {
	componentClass?: keyof typeof types | 'span' | 'label' | 'p';
	className?: string;
	underline?: boolean;
	variant?: keyof typeof variants;
	onClick?: () => void;
	capitalizeFirstLetter?: boolean;
	'data-name'?: string;
	'data-value'?: string;
	clickable?: boolean;
	children?: any;
	style?: React.CSSProperties;
	id?: string;
	htmlFor?: string;
	weight?: Weights;
	align?: 'left' | 'center' | 'right';
	display?: 'block' | 'flex' | 'inline-block' | 'inline';
	wordBreak?: 'break-all';
	whiteSpace?: 'pre-line' | 'break-spaces' | 'nowrap' | 'pre-wrap';
	decoration?: 'none' | 'underline';
	textTransform?: 'lowercase' | 'uppercase' | 'capitalize';
	fontStyle?: 'italic';
	flex?: boolean;
	alignItems?: 'flex-start' | 'center' | 'flex-end';
}

export const TitleComponent = ({
	componentClass: TagName = 'h3',
	className,
	onClick,
	capitalizeFirstLetter,
	'data-name': dataName,
	'data-value': dataValue,
	clickable,
	children,
	style,
	id,
	...rest
}: TitleProps): JSX.Element => (
	<TagName
		style={style}
		data-name={dataName}
		data-value={dataValue}
		onClick={onClick}
		id={id}
		className={classNames(
			'box-title',
			className,
			{ 'capitalize-first-letter': capitalizeFirstLetter },
			`box-${TagName}`,
		)}
		{...rest}
	>
		{children}
	</TagName>
);

const Title = styled(TitleComponent)<TitleProps>`
	${withSpacing};

	white-space: ${props => props.whiteSpace};
	text-align: ${props => props.align || 'left'};
	font-weight: ${props => props.weight || 500};
	text-decoration: ${props => props.decoration};
	word-break: ${props => props.wordBreak};
	text-transform: ${props => props.textTransform};
	font-style: ${props => props.fontStyle};

	${props =>
		props.display &&
		css`
			display: ${props.display};
		`};

	${props =>
		props.flex &&
		css`
			display: flex;
		`};

	${props =>
		props.alignItems &&
		css`
			align-items: ${props.alignItems};
		`};

	${props => props.componentClass && types[props.componentClass]};
	${props => variants[props.variant || 'blackish']};

	-webkit-font-smoothing: antialiased;
`;

export const H1: React.FC<TitleProps> = ({ ...rest }: TitleProps) => (
	<Title weight={700} {...rest} componentClass="h1" />
);
export const H2: React.FC<TitleProps> = ({ ...rest }: TitleProps) => (
	<Title weight={500} {...rest} componentClass="h2" />
);
export const H3: React.FC<TitleProps> = ({ ...rest }: TitleProps) => (
	<Title weight={500} {...rest} componentClass="h3" />
);
export const H4: React.FC<TitleProps> = ({ ...rest }: TitleProps) => (
	<Title weight={500} {...rest} componentClass="h4" />
);
export const H5: React.FC<TitleProps> = ({ ...rest }: TitleProps) => (
	<Title weight={500} {...rest} componentClass="h5" />
);
export const H6: React.FC<TitleProps> = ({ ...rest }: TitleProps) => (
	<Title weight={500} {...rest} componentClass="h6" />
);

export default Title;
