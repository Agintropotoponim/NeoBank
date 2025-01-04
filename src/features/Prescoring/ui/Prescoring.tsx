import { yupResolver } from '@hookform/resolvers/yup';
import React, { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ApplyButton } from 'shared/ui/ApplyButton';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Select } from 'shared/ui/Select';
import styled from 'styled-components';
import * as yup from 'yup';
import { ReactComponent as NotOkIcon } from '../assets/not_ok_icon.svg';
import { ReactComponent as OkIcon } from '../assets/ok_icon.svg';
import { termOptions } from '../const/termOptions';
import { useSubmitApplication } from '../hooks/useSubmitApplication';
import { PrescoringForm } from '../type/PrescoringForm';
import { device } from 'shared/config/theme/device';

const validationSchema = yup.object({
    amount: yup
        .number()
        .typeError('Incorrect value')
        .required('Amount is required')
        .min(15000, 'Minimum is 15,000')
        .max(600000, 'Maximum is 600,000'),
    term: yup.number().required('Term is required'),
    firstName: yup
        .string()
        .required('Enter your first name')
        .trim()
        .min(2, 'First name must be at least 2 characters')
        .matches(/^[A-Za-z-]+$/, 'Invalid value'),
    lastName: yup
        .string()
        .required('Enter your last name')
        .trim()
        .min(2, 'Last name must be at least 2 characters')
        .matches(/^[A-Za-z-]+$/, 'Invalid value'),
    middleName: yup
        .string()
        .nullable()
        .default(null)
        .trim()
        .test(
            'min-length',
            'Invalid value',
            (value) => !value || value.length >= 2
        )
        .matches(
            /^[A-Za-z-]*$/,
            'Invalid value'
        ),
    email: yup
        .string()
        .required('Email is required')
        .trim()
        .matches(
            /^[^@]{2,}@[a-zA-Z0-9]{2,}.*$/,
            'Invalid format'
        ),
    birthdate: yup
        .string()
        .required('Birthdate is required')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in format YYYY-MM-DD')
        .test('is-over-18', 'You must be at least 18 years old', (value) => {
            if (!value) return false;

            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1 >= 18;
            }
            return age >= 18;
        }),
    passportSeries: yup
        .string()
        .matches(/^\d{4}$/, 'The series must be 4 digits')
        .required('Passport series is required'),
    passportNumber: yup
        .string()
        .matches(/^\d{6}$/, 'The series must be 6 digits')
        .required('Passport number is required'),
});

const FormContainer = styled.div`
    width: 100%;
    height: 584px;
    margin: 0 auto;
    padding: 20px;
    background: ${({ theme }) => theme.colors.prescoring.background};
    box-shadow: ${({ theme }) => theme.colors.prescoring.boxShadow};
    border-radius: 28px;

    @media ${device.desktopS} {
        height: auto;
    }

`;

const FormContainerUpperSection = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.desktopS} {
        flex-direction: column;
        align-items: center;
    }

`;

const FormContainerLowerSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${device.laptopS} {
        justify-content: center;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const AmountContainer = styled.div`
    width: 568px;
`;

const AmountUpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media ${device.laptopS} {
        flex-direction: column;
    }
`;

const AmountLowerSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ChosenSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 568px;

    @media ${device.desktopS} {
        align-items: center;
    }
`;

const CustomizeTitle = styled.h2`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.prescoring.textPrimary};


`;

const Value = styled.h4`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.prescoring.textPrimary};
`;

const Subtitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.prescoring.textPrimary};
`;

const Separator = styled.div`
    border: ${({ theme }) => theme.colors.prescoring.separatorBorder};
    height: 232px;

    @media ${device.desktopS} {
        display: none;
    }
`;

const ChosenAmountSeparator = styled.div`
    border: ${({ theme }) => theme.colors.prescoring.chosenAmountSeparatorBorder};
    width: 220px;
`;

const FieldContainer = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const ErrorMessage = styled.span`
    margin-top: 5px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.fieldContainer.errorMessage};
`;

const Required = styled.span`
    color: ${({ theme }) => theme.colors.input.required};
    margin-left: 4px;
`;

const IconWrapper = styled.div`
    position: absolute;
    right: 12px;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;


export const Prescoring = forwardRef<HTMLDivElement>((props, ref) => {
    const [amount, setAmount] = useState<number | null>(0);

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm<PrescoringForm>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });

    const [formData, setFormData] = useState<PrescoringForm | null>(null);
    const { response, isLoading, error } = useSubmitApplication({ data: formData });

    const onSubmit = (data: PrescoringForm) => {
        const payload = {
            ...data,
            middleName: data.middleName || null,
        };

        setFormData(payload);
    };

    const options = termOptions.map((opt) => (
        <option value={opt.value} key={opt.value}>{opt.title}</option>
    ))

    return (
        <FormContainer ref={ref}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainerUpperSection>
                    <AmountContainer>
                        <AmountUpperSection>
                            <CustomizeTitle>Customize your card</CustomizeTitle>
                            <Value>Step 1 of 5</Value>
                        </AmountUpperSection>

                        <AmountLowerSection>
                            <FieldContainer>
                                <Label>
                                    Amount <Required>*</Required>
                                </Label>
                                <InputWrapper>
                                    <Input
                                        type="text"
                                        placeholder="Enter amount"
                                        isError={!!errors.amount}

                                        {...register('amount', {
                                            onChange: (e) => setAmount(Number(e.target.value) || null),
                                        })}
                                    />
                                    <IconWrapper>
                                        {errors.amount ? <NotOkIcon /> : !touchedFields.amount ? null : <OkIcon />}
                                    </IconWrapper>
                                </InputWrapper>
                                {errors.amount && <ErrorMessage>{errors.amount.message}</ErrorMessage>}
                            </FieldContainer>
                        </AmountLowerSection>
                    </AmountContainer>
                    <Separator />
                    <ChosenSection>
                        <Subtitle>
                            You have chosen the amount
                        </Subtitle>
                        <Value>
                            {`${amount} ₽`}
                        </Value>
                        <ChosenAmountSeparator />
                    </ChosenSection>

                </FormContainerUpperSection>
                <Subtitle>Contact information</Subtitle>
                <FormContainerLowerSection>
                    <FieldContainer>
                        <Label>
                            Your last name <Required>*</Required>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="For Example Doe"
                                isError={!!errors.lastName}
                                {...register('lastName')}
                            />
                            <IconWrapper>
                                {errors.lastName ? <NotOkIcon /> : !touchedFields.lastName ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                        {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                    </FieldContainer>

                    <FieldContainer>
                        <Label>
                            Your first name <Required>*</Required>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="For Example John"
                                isError={!!errors.firstName}
                                {...register('firstName')}
                            />
                            <IconWrapper>
                                {errors.firstName ? <NotOkIcon /> : !touchedFields.firstName ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                    </FieldContainer>

                    <FieldContainer>
                        <Label>Your patronymic</Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="For Example Victorovich"
                                isError={!!errors.middleName}
                                {...register('middleName')}
                            />
                            <IconWrapper>
                                {errors.middleName ? <NotOkIcon /> : !touchedFields.middleName ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                    </FieldContainer>

                    <FieldContainer>
                        <Label>
                            Select term <Required>*</Required>
                        </Label>
                        <Select isError={!!errors.term} {...register('term')}>
                            {options}
                        </Select>
                        {errors.term && <ErrorMessage>{errors.term.message}</ErrorMessage>}
                    </FieldContainer>

                    <FieldContainer>
                        <Label>
                            Your email <Required>*</Required>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="email"
                                placeholder="test@gmail.com"
                                isError={!!errors.email}
                                {...register('email')}
                            />
                            <IconWrapper>
                                {errors.email ? <NotOkIcon /> : !touchedFields.email ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FieldContainer>

                    <FieldContainer>
                        <Label>
                            Your date of birth <Required>*</Required>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="Select Date and Time"
                                isError={!!errors.birthdate}
                                {...register('birthdate')}
                            />
                            <IconWrapper>
                                {errors.birthdate ? <NotOkIcon /> : !touchedFields.birthdate ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                        {errors.birthdate && <ErrorMessage>{errors.birthdate.message}</ErrorMessage>}
                    </FieldContainer>

                    <FieldContainer>
                        <Label>
                            Your passport series <Required>*</Required>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="0000"
                                isError={!!errors.passportSeries}
                                {...register('passportSeries')}
                            />
                            <IconWrapper>
                                {errors.passportSeries ? <NotOkIcon /> : !touchedFields.passportSeries ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                        {errors.passportSeries && <ErrorMessage>{errors.passportSeries.message}</ErrorMessage>}
                    </FieldContainer>

                    <FieldContainer>
                        <Label>
                            Your passport number <Required>*</Required>
                        </Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                placeholder="000000"
                                isError={!!errors.passportNumber}
                                {...register('passportNumber')}
                            />
                            <IconWrapper>
                                {errors.passportNumber ? <NotOkIcon /> : !touchedFields.passportNumber ? null : <OkIcon />}
                            </IconWrapper>
                        </InputWrapper>
                        {errors.passportNumber && <ErrorMessage>{errors.passportNumber.message}</ErrorMessage>}
                    </FieldContainer>
                </FormContainerLowerSection>

                {isLoading && <Loader />}
                {error && <p>{error.message}</p>}
                {response && <p>Form submitted successfully!</p>}

                <ButtonContainer>
                    <ApplyButton type="submit">Continue</ApplyButton>
                </ButtonContainer>
            </form>
        </FormContainer >
    );
});