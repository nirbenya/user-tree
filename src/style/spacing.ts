import { css } from 'styled-components';

export const spacing = {
	none: '0',
	tiny: '2px',
	xxs: '4px',
	xs: '8px',
	sm: '16px',
	md: '24px',
	lg: '32px',
	xl: '40px',
	xxl: '48px',
	'2xxl': '56px',
	'3xxl': '64px',
	'4xxl': '72px',
	'5xxl': '80px',
	'6xxl': '88px',
	'7xxl': '96px',
	'8xxl': '102px',
	auto: 'auto',
};

export const spacingNames = [
	'marginTop',
	'margin',
	'marginBottom',
	'marginLeft',
	'marginRight',
	'marginVertical',
	'marginHorizontal',
	'padding',
	'paddingTop',
	'paddingBottom',
	'paddingRight',
	'paddingLeft',
	'paddingVertical',
	'paddingHorizontal',
];
export const withSpacing = props => css`
	margin: ${props.margin && spacing[props.margin]};
	margin-right: ${(props.marginRight && spacing[props.marginRight]) ||
	(props.marginHorizontal && spacing[props.marginHorizontal])};
	margin-left: ${(props.marginLeft && spacing[props.marginLeft]) ||
	(props.marginHorizontal && spacing[props.marginHorizontal])};
	margin-top: ${(props.marginTop && spacing[props.marginTop]) ||
	(props.marginVertical && spacing[props.marginVertical])};
	margin-bottom: ${(props.marginBottom && spacing[props.marginBottom]) ||
	(props.marginVertical && spacing[props.marginVertical])};

	padding: ${props.padding && spacing[props.padding]};
	padding-right: ${(props.paddingRight && spacing[props.paddingRight]) ||
	(props.paddingHorizontal && spacing[props.paddingHorizontal])};
	padding-left: ${(props.paddingLeft && spacing[props.paddingLeft]) ||
	(props.paddingHorizontal && spacing[props.paddingHorizontal])};
	padding-top: ${(props.paddingTop && spacing[props.paddingTop]) ||
	(props.paddingVertical && spacing[props.paddingVertical])};
	padding-bottom: ${(props.paddingBottom && spacing[props.paddingBottom]) ||
	(props.paddingVertical && spacing[props.paddingVertical])};
`;
