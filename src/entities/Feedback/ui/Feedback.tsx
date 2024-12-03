import { useState } from 'react';
import { CustomInput } from 'shared/ui/CustomInput';
import styled from 'styled-components';

const FeedbackContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const SupportTitle = styled.h3`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.feedbackContainerSupport};
`;

const SubscribeTitle = styled.h3`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const BankNewsTitle = styled.h3`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Feedback: React.FC = () => {

    const [value, setValue] = useState<string>("");

    const onChange = (newValue: string) => setValue(newValue);

    return (
        <FeedbackContainer>
            <SupportTitle>
                Support
            </SupportTitle>
            <SubscribeTitle>
                Subscribe Newsletter & get
            </SubscribeTitle>
            <BankNewsTitle>
                Bank News
            </BankNewsTitle>
            <CustomInput value={value} onChange={onChange} />
        </FeedbackContainer>
    )
}