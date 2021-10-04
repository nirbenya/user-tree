import React from 'react';
import styled from 'styled-components';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const StyledContent = styled(HoverCardPrimitive.Content)`
	background-color: red;
`;

// Exports
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
