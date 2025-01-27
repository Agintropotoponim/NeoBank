import { Input } from 'shared/ui/Input';
import { ReactComponent as NotOkIcon } from '../assets/not_ok_icon.svg';
import { ReactComponent as OkIcon } from '../assets/ok_icon.svg';
import { ErrorMessage, FieldContainer, IconWrapper, InputWrapper, Label, Required } from '../components/formFieldComponents';
import { inputMasks, MaskType } from 'shared/consts/inputMasks';

interface InputFieldProps {
    label: string;
    placeholder: string;
    required?: boolean;
    isError: boolean;
    errorMessage?: string;
    touched: boolean;
    registerProps: any;
    type?: string;
    customWidth?: string;
    mask?: MaskType;
}

export const InputFieldContainer: React.FC<InputFieldProps> = ({
    label, placeholder, required, isError, errorMessage, touched, registerProps, type = 'text', customWidth, mask
}) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (mask && inputMasks[mask]) {
            event.target.value = inputMasks[mask](event.target.value);
        }

        if (registerProps?.onChange) {
            registerProps.onChange(event);
        }
    };


    return (
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
                    onChange={handleInputChange}
                />
                <IconWrapper>
                    {isError ? <NotOkIcon /> : touched ? <OkIcon /> : null}
                </IconWrapper>
            </InputWrapper>
            {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FieldContainer>
    );
};
