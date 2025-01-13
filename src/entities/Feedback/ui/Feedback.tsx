import { useEffect, useState } from 'react';
import { CustomInput } from 'shared/ui/CustomInput';
import { Loader } from 'shared/ui/Loader';
import styled from 'styled-components';
import { useSubscribeEmail } from '../hooks/useSubscribeEmail';

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
    const [value, setValue] = useState<string>('');
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);

    const { mutate, status, isSuccess, isError, error } = useSubscribeEmail();

    useEffect(() => {
        const savedSubscriptionStatus = localStorage.getItem('isSubscribed');
        if (savedSubscriptionStatus === 'true') {
            setIsSubscribed(true);
        }
        setIsLoading(false);
    }, []);

    const handleSubmit = () => {
        const emailPattern = /^[^@]{2,}@[a-zA-Z0-9]{2,}.*$/;
        if (emailPattern.test(value)) {
            mutate(value);
        } else {
            alert('Пожалуйста, введите корректный email');
        }
    };

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('isSubscribed', 'true');
            setIsSubscribed(true);
        }
        setIsLoading(false);
    }, [isSuccess]);

    { if (status === 'pending' || isLoading) return <Loader /> }

    return (
        <FeedbackContainer>
            <SupportTitle>Support</SupportTitle>
            <SubscribeTitle>Subscribe Newsletter & get</SubscribeTitle>
            <BankNewsTitle>Bank News</BankNewsTitle>
            {!isSubscribed ? (
                <CustomInput
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    onSubmit={handleSubmit}

                />
            ) : (
                <p>You are already subscribed to the bank's newsletter.</p>
            )}
            {isError && <p>Error: {error?.message}</p>}
        </FeedbackContainer>
    );
};