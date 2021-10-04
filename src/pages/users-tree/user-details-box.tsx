import { useDispatch } from 'react-redux';
import * as React from 'react';

// components
import Panel from '../../atomic/panel';
import Button from '../../atomic/button';
import Input from '../../atomic/input';
import { Flex, Span } from '../../atomic/box';
import RoundButton from '../../atomic/button/round-button';
import Icon from '../../atomic/icon';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card';
import { Field, FieldProps, Formik } from 'formik';
import { Div } from '../../atomic/box';
import { H5 } from '../../atomic/title';
import Avatar from '../../atomic/avatar';
import Text from '../../atomic/text';

// types
import { User } from '../../types/user';

// actions
import { updateUserDetails } from '../../redux/people/people-actions';

const UserDetailsBox = ({ user, isManager }: { user?: User; isManager?: boolean }) => {
	const dispatch = useDispatch();

	const [step, setStep] = React.useState('start');

	if (!user?.id) {
		return null;
	}

	const onUpdate = async (values: { firstName?: string; lastName?: string }) => {
		try {
			await dispatch(updateUserDetails({ data: values, id: user.id }));
			setStep('start');
		} catch (e) {
			alert(e);
		}
	};

	return (
		<Panel componentClass={'article'} variant={'card'} borderRadius={'md'} padding={'sm'} marginBottom={'xs'}>
			<Formik
				enableReinitialize
				onSubmit={onUpdate}
				initialValues={{ firstName: user.firstName, lastName: user.lastName }}
			>
				{({ handleSubmit, isValid, dirty, resetForm, isSubmitting }) => (
					<HoverCard>
						<HoverCardTrigger>
							{step !== 'edit' && (
								<Flex gap={'xxs'} alignItems={'center'}>
									{isManager ? <Icon size={'xxl'} name={'PLUS'} /> : <Icon name={'MINUS'} />}

									<Span marginLeft={'xs'} marginRight={'xs'}>
										<Avatar
											photo={user.photo}
											size={'sm'}
											name={`${user.firstName} ${user.lastName}`}
										/>
									</Span>
									<div>
										<H5 marginBottom={'none'} marginTop={'none'}>
											{user.firstName} {user.lastName}
										</H5>
										<Text variant={'gray-50'}>{user.email}</Text>
									</div>
								</Flex>
							)}
						</HoverCardTrigger>
						{step === 'edit' && (
							<Panel borderRadius={'sm'} padding={'xs'} variant={'white-border-shadow'}>
								<form>
									<div>
										<Field
											name={'firstName'}
											validate={(value: string) => (value ? undefined : 'required')}
										>
											{({ field }: FieldProps) => (
												<Input
													name={field.name}
													value={field.value}
													placeholder={'firstName'}
													onChange={field.onChange}
												/>
											)}
										</Field>
										<Div marginTop={'xs'}>
											<Field
												name={'lastName'}
												validate={(value: string) => (value ? undefined : 'required')}
											>
												{({ field }: FieldProps) => (
													<Input
														name={field.name}
														value={field.value}
														placeholder={'lastName'}
														onChange={field.onChange}
													/>
												)}
											</Field>
										</Div>
									</div>
									<Flex marginTop={'sm'} gap={'xs'}>
										<Button
											block
											size={'sm'}
											variant={'secondary-clean'}
											onClick={() => {
												setStep('start');
												resetForm();
											}}
										>
											Cancel
										</Button>
										<Button
											isLoading={isSubmitting}
											size={'sm'}
											onClick={handleSubmit}
											disabled={!isValid || !dirty}
											block
										>
											Save
										</Button>
									</Flex>
								</form>
							</Panel>
						)}
						<HoverCardContent side={'right'}>
							<Panel padding={'xs'} variant={'shadow'}>
								<Flex justifyContent={'space-between'} gap={'xs'}>
									<RoundButton aria-label={'remove'} variant={'danger'} size={'sm'}>
										<Icon name={'TRASH'} />
									</RoundButton>
									<RoundButton
										onClick={() => setStep('edit')}
										aria-label={'edit'}
										variant={'secondary'}
										size={'sm'}
									>
										<Icon name={'PENCIL'} />
									</RoundButton>
								</Flex>
							</Panel>
						</HoverCardContent>
					</HoverCard>
				)}
			</Formik>
		</Panel>
	);
};

export default UserDetailsBox;
