import styled from "styled-components";

export const FieldContainer = styled.div`
    margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`;

export const ErrorMessage = styled.span`
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

export const Required = styled.span`
    color: ${({ theme }) => theme.colors.input.required};
    margin-left: 4px;
`;

export const IconWrapper = styled.div`
    position: absolute;
    right: 12px;
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;