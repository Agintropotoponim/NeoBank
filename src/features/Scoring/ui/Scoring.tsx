import { yupResolver } from "@hookform/resolvers/yup";
import { InputFieldContainer, SelectFieldContainer } from "entities/InputFieldContainer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ApplyButton } from "shared/ui/ApplyButton";
import { Loader } from "shared/ui/Loader";
import styled from "styled-components";
import { employmentFormFields, formFields } from "../const/formFields";
import { validationSchema } from "../const/validationSchema";
import { useSubmitScoring } from "../hooks/useSubmitScoring";
import { FormPayload } from "../type/FormPayload";
import { ScoringForm } from "../type/ScoringForm";
import { LoanStep } from "shared/types/loanStep";
import { mapFormDataToPayload } from "../lib/mapFormDataToPayload";

const FormContainer = styled.div`
    width: 100%;
    min-height: 584px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    background: ${({ theme }) => theme.colors.scoring.background};
    box-shadow: ${({ theme }) => theme.colors.scoring.boxShadow};
    border-radius: 28px;
    box-sizing: border-box;

    @media ${device.desktopS} {
        height: auto;
    }
`;

const Title = styled.h2`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.scoring.textPrimary};
    width: fit-content;
`;

const SubTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.scoring.textPrimary};
    width: fit-content;
`;

const StepsBlock = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.scoring.textPrimary};
    width: fit-content;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0px 30px 60px 0px;

    @media ${device.desktopS} {
        display: flex;
        justify-content: center;
    }
`;

const Form = styled.form`
    width: 100%;

`;

const FieldsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


    @media ${device.desktopS} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

const FormUpperSection = styled.div`
    width: 100%;
    height: 50%;

    @media ${device.desktopS} {
        height: auto;
    }
`;

const FormLowerSection = styled.div`
    width: 100%;

`;

const SectionDescription = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    gap: 40px;

    @media ${device.desktopS} {
        height: auto;
        justify-content: center
    }

    @media ${device.laptopS} {
        flex-direction: column;
        align-items: center;
    }
`;

export const Scoring = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm<ScoringForm>({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema),
    });


    const { setCurrentStep, applicationId } = useLoanStore();
    const [formData, setFormData] = useState<FormPayload | null>(null);

    const { mutate, isSuccess, error } = useSubmitScoring({
        onSuccess: () => {
            setCurrentStep(LoanStep.PAYMENT_SCHEDULE);
        },
        onError: () => {
            console.error("Ошибка при отправке формы");
        }
    });

    const onSubmit = (data: ScoringForm) => {
        const payload = mapFormDataToPayload(data);
        mutate({ data: payload, applicationId: applicationId || -1 });
    };


    return (
        <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormUpperSection>
                    <SectionDescription>
                        <Title>
                            Continuation of the application
                        </Title>
                        <StepsBlock>
                            Step 2 of 5
                        </StepsBlock>
                    </SectionDescription>
                    <FieldsContainer>
                        {formFields.map((field, index) => (
                            field.options ? (
                                <SelectFieldContainer
                                    key={field.name}
                                    label={field.label}
                                    required={field.required}
                                    isError={!!errors[field.name]}
                                    errorMessage={errors[field.name]?.message}
                                    registerProps={register(field.name)}
                                    options={field.options.map(option => ({ value: option, title: option }))}
                                    customWidth={index < 3 ? "401.33px" : "608px"}
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
                                    customWidth={index < 3 ? "401.33px" : "608px"}
                                />
                            )
                        ))}
                    </FieldsContainer>
                </FormUpperSection>
                <FormLowerSection>
                    <SectionDescription>
                        <SubTitle>
                            Employment
                        </SubTitle>
                    </SectionDescription>
                    <FieldsContainer>
                        {employmentFormFields.map((field) => (
                            field.options ? (
                                <SelectFieldContainer
                                    key={field.name}
                                    label={field.label}
                                    required={field.required}
                                    isError={!!errors[field.name]}
                                    errorMessage={errors[field.name]?.message}
                                    registerProps={register(field.name)}
                                    options={field.options.map(option => ({ value: option, title: option }))}
                                    customWidth={"401.33px"}
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
                                    customWidth={"401.33px"}
                                />
                            )
                        ))}
                    </FieldsContainer>

                    {error && <StepsBlock>Check your email. If something went wrong, contact us or check the information you entered and try again.</StepsBlock>}

                    <ButtonContainer>
                        <ApplyButton type="submit">Continue</ApplyButton>
                    </ButtonContainer>
                </FormLowerSection>
            </Form>
        </FormContainer>
    );
};


