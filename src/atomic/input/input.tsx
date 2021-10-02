import _ from 'lodash';
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import { sizes, variants } from './style';
import colors from '../../style/colors';
import { spacing } from '../../style/spacing';

type Ref = HTMLInputElement;

export interface InputProps {
	componentClass?: React.ElementType;
	variant?: keyof typeof variants;
	focused?: boolean;
	block?: boolean;
	size?: keyof typeof sizes;
	focusOnMount?: boolean;
	onDragStart?: () => void;
	onDrop?: () => void;
	'data-name'?: string;
	'data-action'?: string;
	'data-bi'?: string;
	onBlur?: () => void;
	// eslint-disable-next-line no-unused-vars
	onChange?: (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
	onFocus?: () => void;
	onKeyDown?: () => void;
	onClick?: () => void;
	textAlign?: 'center' | 'left' | 'right';
	role?: 'input';
	resize?: string;
	readOnly?: boolean;
	className?: string;
	disabled?: boolean;
	placeholder?: string;
	type?: 'text' | 'number' | 'password';
	value?: any;
	name?: string;
	maxLength?: number;
	id?: string;
	children?: React.ElementType | string;
}

const InputComponent = React.forwardRef<Ref, InputProps>(
	(
		{
			componentClass: Component = 'input',
			className,
			disabled,
			focused,
			block = true,
			focusOnMount,
			placeholder,
			type = 'text',
			value,
			name,
			maxLength,
			onBlur,
			onChange = _.noop,
			onFocus,
			readOnly,
			onKeyDown,
			onClick,
			onDragStart,
			onDrop,
			'data-name': dataName,
			'data-action': dataAction,
			'data-bi': dataBi,
			role = 'input',
			id,
			children,
		},
		ref,
	) => {
		const inputRef = ref || React.useRef(null);

		React.useEffect(() => {
			if (focusOnMount) {
				_.invoke(inputRef, 'current.focus');
			}
		}, [inputRef, focusOnMount]);

		return (
			<Component
				ref={inputRef}
				className={classNames('box-input', className, { disabled }, { block }, { focus: focused }, Component)}
				maxLength={maxLength}
				disabled={disabled}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				readOnly={!onChange || readOnly}
				onKeyDown={onKeyDown}
				placeholder={placeholder}
				type={type}
				value={value}
				name={name}
				data-name={dataName}
				data-action={dataAction}
				data-bi={dataBi}
				onClick={onClick}
				onDragStart={onDragStart}
				onDrop={onDrop}
				role={role}
				id={id}
			>
				{children}
			</Component>
		);
	},
);

const Input = styled(InputComponent)<InputProps>`
	border-radius: 4px;
	font-size: 16px;
	text-align: ${props => props.textAlign};
	border: 1px solid ${colors.gray90};
	resize: ${props => props.resize || 'none'};
	height: ${props => _.get(sizes, [props.size || 'lg', 'height'])};
	box-shadow: none;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	padding: ${spacing.xs} ${spacing.sm};
	outline: none;
	color: ${colors.blackish};

	${props => variants[props.variant || 'action']};

	line-height: 1.42857;

	fieldset[disabled] &,
	&.disabled,
	&[disabled] {
		background: ${colors.gray95};
		color: ${colors.gray50};
		cursor: not-allowed;
	}

	&.block {
		width: 100%;
	}

	&.textarea {
		font-size: 16px;
		line-height: 1.5;
	}
`;

export default Input;
