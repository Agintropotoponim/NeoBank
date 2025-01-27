import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ApplyButton } from 'shared/ui/ApplyButton';
import { Loader } from 'shared/ui/Loader';
import styled from 'styled-components';

import { InputFieldContainer, SelectFieldContainer } from 'entities/InputFieldContainer';
import { device } from 'shared/config/theme/device';
import { useLoanStore } from 'shared/hooks/useLoanStore';
import { formFields } from '../const/formFields';
import { validationSchema } from '../const/validationSchema';
import { useSubmitApplication } from '../hooks/useSubmitApplication';
import { PrescoringForm } from '../type/PrescoringForm';
import { LoanStep } from 'shared/types/loanStep';

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

    const { setLoanOffers, setCurrentStep } = useLoanStore();

    const [formData, setFormData] = useState<PrescoringForm | null>(null);
    const { response, isLoading, error } = useSubmitApplication({ data: formData });

    const onSubmit = (data: PrescoringForm) => {
        const payload = {
            ...data,
            middleName: data.middleName || null,
        };

        setFormData(payload);
    };

    useEffect(() => {
        if (response) {
            setLoanOffers(response, response[0].applicationId);
            setCurrentStep(LoanStep.PREAPPROVAL);
        }
    }, [response, setLoanOffers, setCurrentStep]);


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
                            <InputFieldContainer
                                label={"Amount"}
                                placeholder={"Enter amount"}
                                required={true}
                                type={"text"}
                                mask={"digits"}
                                isError={!!errors.amount}
                                errorMessage={errors.amount?.message}
                                touched={!!touchedFields.amount}
                                registerProps={register("amount", {
                                    onChange: (e) => setAmount(Number(e.target.value) || 0),
                                })}
                            />
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
                    {formFields.map((field) => (
                        field.options ? (
                            <SelectFieldContainer
                                key={field.name}
                                label={field.label}
                                required={field.required}
                                isError={!!errors[field.name]}
                                errorMessage={errors[field.name]?.message}
                                registerProps={register(field.name)}
                                options={field.options}
                            />
                        ) : (
                            <InputFieldContainer
                                key={field.name}
                                label={field.label}
                                placeholder={field.placeholder || ""}
                                required={field.required}
                                type={field.type}
                                mask={field.mask}
                                isError={!!errors[field.name]}
                                errorMessage={errors[field.name]?.message}
                                touched={!!touchedFields[field.name]}
                                registerProps={register(field.name)}
                            />
                        )
                    ))}

                </FormContainerLowerSection>

                {isLoading && <Loader />}
                {error && <p>{error.message}</p>}

                <ButtonContainer>
                    <ApplyButton type="submit">Continue</ApplyButton>
                </ButtonContainer>
            </form>
        </FormContainer >
    );
});