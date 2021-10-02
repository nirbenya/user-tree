import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

// components
import Title, { TitleProps } from '../title';

// style
import { sizes } from './style';
import { SpacingProps } from '../box/box';
import { spacingNames, withSpacing } from '../../style/spacing';

export interface TextProps extends Omit<TitleProps, 'componentClass'>, SpacingProps {
	size?: keyof typeof sizes;
	componentClass?: 'label' | 'p' | 'span';
}

const Text = styled(({ className, ...rest }: TextProps) => (
	<Title
		className={classNames('box-text', className)}
		marginBottom={'none'}
		weight={400}
		display={'block'}
		componentClass={'span'}
		{...rest}
	/>
))`
	${withSpacing}
	${(props: TextProps) => sizes[props.size || 'lg']};
`;

Text.displayName = 'Text';

const Label = (props: TextProps): JSX.Element => <Text weight={500} componentClass={'label'} {...props} />;

const Paragraph = ({ ...rest }: TextProps): JSX.Element => <Text marginBottom={'xs'} componentClass={'p'} {...rest} />;

export { Paragraph, Label };

export default Text;
