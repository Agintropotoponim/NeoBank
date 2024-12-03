import React from "react";
import { email, send } from "./consts/icons";
import styled from "styled-components";

interface ICustomInputProps {
    value: string;
    onChange: (value: string) => void;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.customInput.background};
    border: 1px solid ${({ theme }) => theme.colors.customInput.border};
    border-radius: 20px;
    padding: 5px 10px;
    box-shadow: 0px 10px 20px ${({ theme }) => theme.colors.customInput.shadow};
    width: 524.8px;
    box-sizing: border-box;

    @media (max-width: 920px) {
        width: 450px;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.customInput.text};
`;

const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.customInput.text};
    height: 78px;
    box-sizing: border-box;
    padding-left: 10px;

    @media (max-width: 500px) {
        width: 100%;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.customInput.placeholder};
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.customInput.buttonBackground};
    color: ${({ theme }) => theme.colors.customInput.buttonText};
    border: none;
    border-radius: 20px;
    padding: 10px 16px;
    cursor: pointer;
    transition: 0.3s;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 126.9%;

    width: 161.48px;
    height: 44.92px;
    box-sizing: border-box;

    @media (max-width: 500px) {
        width: fit-content;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.customInput.buttonHover};
    }
`;

const SendIcon = styled.span`
    margin-right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
        width: fit-content;
    }
`;

const SubscribeText = styled.span`
    @media (max-width: 500px) {
        display: none;
    }
`;

export const CustomInput: React.FC<ICustomInputProps> = ({ value, onChange }) => {
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <Container>
            <IconContainer>
                <img src={email} alt="email" />
            </IconContainer>
            <Input
                type="email"
                placeholder="Your email"
                value={value}
                onChange={onChangeHandler}
            />
            <Button>
                <SendIcon>
                    <img src={send} alt="send" />
                </SendIcon>
                <SubscribeText>Subscribe</SubscribeText>
            </Button>
        </Container>
    );
};