import { Input } from 'shared/ui/Input';
import { ReactComponent as NotOkIcon } from '../assets/not_ok_icon.svg';
import { ReactComponent as OkIcon } from '../assets/ok_icon.svg';
import { ErrorMessage, FieldContainer, IconWrapper, InputWrapper, Label, Required } from '../components/formFieldComponents';

interface InputFieldProps {
    label: string;
    placeholder: string;
    required?: boolean;
    isError: boolean;
    errorMessage?: string;
    touched: boolean;
    registerProps: any;
    type?: string;
}

export const InputFieldContainer: React.FC<InputFieldProps & { customWidth?: string }> = ({
    label, placeholder, required, isError, errorMessage, touched, registerProps, type = 'text', customWidth
}) => (
    <FieldContainer>
        <Label>
            {label} {required && <Required>*</Required>}
        </Label>
        <InputWrapper>
            <Input
                type={type}
                placeholder={placeholder}
                isError={isError}
                {...registerProps}
                customWidth={customWidth}
            />
            <IconWrapper>
                {isError ? <NotOkIcon /> : touched ? <OkIcon /> : null}
            </IconWrapper>
        </InputWrapper>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldContainer>
);