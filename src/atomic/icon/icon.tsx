import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

// constants
import materialIcons from './constants/material-icons-constants';

// style
import { sizes, variants } from './style';
import { css } from 'styled-components';

export interface IconProps {
	name: keyof typeof materialIcons;
	className?: string;
	children?: React.ReactNode | string;
	animation?: 'default';
	outlined?: boolean;
	disabled?: boolean;
	position?: 'relative' | 'absolute';
	'data-name'?: string;
	'data-value'?: string | number;
	onMouseEnter?: () => void;
	'aria-label'?: string;
	role?: string;
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	alignSelf?: 'flex-start' | 'flex-end' | 'center';
	flip?: boolean;
	cursor?: 'pointer' | 'not-allowed';
	rotate?: number;
	clickable?: boolean;
	weight?: 300 | 500;
}

export const IconComponent = ({
	name,
	className,
	children,
	animation,
	outlined,
	disabled,
	position,
	'data-name': dataName,
	'data-value': dataValue,
	onMouseEnter,
	'aria-label': ariaLabelProp,
	role,
}: IconProps) => {
	const icon = _.get(materialIcons, [name, 'icon']);
	const ariaLabel = materialIcons[name]?.label;

	return (
		<i
			className={classNames(
				'box-icon',
				position,
				className,
				animation,
				{ 'material-icons': icon && !outlined },
				{ 'material-icons-outlined': outlined },
				{ disabled },
			)}
			role={role}
			data-name={dataName}
			aria-hidden={true}
			data-value={dataValue}
			aria-label={ariaLabelProp || ariaLabel}
			onMouseEnter={onMouseEnter}
		>
			{icon}
			{children}
		</i>
	);
};

const StyledIcon = styled(IconComponent)<IconProps>`
	&.box-icon {
		${props => _.get(variants, props.variant || 'inherit')};
		font-size: ${props => _.get(sizes, props.size || 'lg')};

		&.disabled {
			cursor: not-allowed;
		}

		&.relative {
			position: relative;
		}

		&.absolute {
			position: absolute;
		}

		${props =>
			props.alignSelf &&
			css`
				align-self: ${props.alignSelf};
			`};

		${props =>
			props.flip &&
			css`
				transform: scaleX(-1);
			`};
		${props =>
			props.rotate &&
			css`
				transform: rotate(${props.rotate}deg);
			`}
		${props =>
			props.clickable &&
			css`
				&:not(.disabled) {
					cursor: pointer;
				}
			`}
		${props =>
			props.cursor &&
			css`
				cursor: ${props.cursor};
			`};
		${props =>
			props.weight &&
			css`
				font-weight: ${props.weight};
			`};
	}
`;

const Icon = (props: IconProps) => <StyledIcon {...props} />;

Icon.displayName = 'Icon';

export default Icon;
