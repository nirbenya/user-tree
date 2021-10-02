import _ from 'lodash';
import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import colors from '../../style/colors';

// components
import { sizes, variants } from './style';

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface AvatarProps {
	photo?: string;
	name?: string;
	className?: string;
	children?: React.ReactNode;
	markup?: React.ReactNode;
	disabled?: boolean;
	text?: string | React.ReactElement;
	'data-id'?: number | string;
	initials?: string;
	style?: React.CSSProperties;
	size?: keyof typeof sizes;
	variant?: keyof typeof variants;
	flexShrink?: 0 | 1;
	flexGrow?: 0 | 1;
	userId?: number;
}

const getInitialsFromFullName = (name?: string) => {
	name = _.trim(name);

	if (!name) {
		return '?';
	}

	const names = _.split(_.trim(name), ' ');
	const initials: string[] = [];

	_.map(names, name => {
		const firstLetter = name.charAt(0);
		initials.push(firstLetter);
	});

	if (_.isEmpty(initials)) {
		return '?';
	}

	return _.slice(initials, 0, 2).join('');
};

const useImageLoadingStatus = (src?: string) => {
	const [loadingStatus, setLoadingStatus] = React.useState<ImageLoadingStatus>('idle');

	React.useEffect(() => {
		if (!src) {
			setLoadingStatus('error');
			return;
		}

		let isMounted = true;
		const image = new window.Image();

		const updateStatus = (status: ImageLoadingStatus) => () => {
			if (!isMounted) return;
			setLoadingStatus(status);
		};

		setLoadingStatus('loading');
		image.onload = updateStatus('loaded');
		image.onerror = updateStatus('error');
		image.src = src;

		return () => {
			isMounted = false;
		};
	}, [src]);

	return loadingStatus;
};

const AvatarComponent = React.memo(
	({ photo, name, className, children, markup, disabled, text, 'data-id': dataId, initials, style }: AvatarProps) => {
		const imageLoadingStatus = useImageLoadingStatus(photo);
		const isBroken = imageLoadingStatus === 'error';

		const parsedInitials = initials || getInitialsFromFullName(name);
		const shouldShowInitials = ((isBroken || (!photo && !_.isEmpty(parsedInitials))) && !markup) || text;
		const isInitialsEmpty = parsedInitials === '?';
		const shouldShowImage = !isBroken && photo;

		return (
			<div
				className={classNames('box-avatar', className, { disabled })}
				data-id={dataId}
				data-name={'avatar'}
				style={style}
			>
				<div className={'content-container'}>
					{shouldShowImage && (
						<img
							alt={name}
							data-name={'photo'}
							src={photo}
							className={classNames({ shown: imageLoadingStatus === 'loaded' })}
						/>
					)}
					{shouldShowInitials && (
						<span data-name={'initials'} className="initials">
							{text || (
								<span className={classNames({ 'empty-initials': isInitialsEmpty })}>
									{parsedInitials}
								</span>
							)}
						</span>
					)}
					{markup}
				</div>
				{children}
			</div>
		);
	},
);

const StyledAvatar = styled(AvatarComponent)<Omit<AvatarProps, 'size'> & { size: keyof typeof sizes }>`
	width: ${props => sizes[props.size]?.width};
	height: ${props => sizes[props.size]?.height};
	color: white;
	letter-spacing: -1px;
	border-radius: 50%;

	text-transform: uppercase;
	font-size: 25px;
	text-align: center;
	line-height: 60px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: ${props => props.flexShrink};

	${props =>
		props.flexGrow &&
		css`
			flex-grow: ${props.flexGrow};
		`};

	background: ${colors.gray80};

	${variants['gray-80']};

	&.disabled {
		&:after {
			background: rgba(204, 204, 204, 0.7);
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			border-radius: 50%;
			content: '';
		}
	}

	.content-container {
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		&,
		& > img {
			flex-grow: 1;
			height: 100%; // IE 11 fix for min-height and flex
			vertical-align: initial;
			border-radius: 50%;
			max-height: 100%; // IE 11 fix for svg images
			max-width: 100%; // IE 11 fix for svg images
			min-width: 100%; // IE 11 fix for svg images
			min-height: 100%;
			object-fit: cover;
		}

		img {
			display: block;
			vertical-align: initial;
			max-height: 100%; // IE 11 fix for svg images
			max-width: 100%; // IE 11 fix for svg images
			min-width: 100%; // IE 11 fix for svg images
			object-fit: cover;
			opacity: 0;

			&.shown {
				opacity: 1;
			}
		}
	}

	.initials {
		color: inherit;
		letter-spacing: 0;
		font-weight: 500;
		font-size: ${props => sizes[props.size]?.fontSize};

		.empty-initials {
			color: ${colors.white};
		}
	}
`;

const Avatar: React.FC<AvatarProps> & {} = ({ variant, size, ...rest }: AvatarProps) => (
	<StyledAvatar flexShrink={0} size={size || 'lg'} variant={variant} {...rest} />
);

export default Avatar;
