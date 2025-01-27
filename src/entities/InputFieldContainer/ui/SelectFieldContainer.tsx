import { Select } from "shared/ui/Select";
import { ErrorMessage, FieldContainer, Label, Required } from "../components/formFieldComponents";

interface SelectFieldProps {
    label: string;
    required?: boolean;
    isError: boolean;
    errorMessage?: string;
    registerProps: any;
    options: { value: string | number; title: string }[];
}

export const SelectFieldContainer: React.FC<SelectFieldProps & { customWidth?: string }> = ({
    label, required, isError, errorMessage, registerProps, options, customWidth
}) => (
    <FieldContainer>
        <Label>
            {label} {required && <Required>*</Required>}
        </Label>
        <Select isError={isError} customWidth={customWidth} {...registerProps}>
            {options.map((opt) => (
                <option value={opt.value} key={opt.value}>
                    {opt.title}
                </option>
            ))}
        </Select>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldContainer>
);