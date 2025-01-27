import { MaskType } from 'shared/consts/inputMasks';
import { termOptions } from '../const/termOptions';
import { PrescoringForm } from '../type/PrescoringForm';

interface FieldConfig<T> {
    name: keyof T;
    label: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    options?: { value: string | number; title: string }[];
    mask?: MaskType;
}

export const formFields: FieldConfig<PrescoringForm>[] = [
    { name: "lastName", label: "Your last name", placeholder: "For Example Doe", required: true, mask: "letters" },
    { name: "firstName", label: "Your first name", placeholder: "For Example John", required: true, mask: "letters" },
    { name: "middleName", label: "Your patronymic", placeholder: "For Example Victorovich", mask: "letters" },
    { name: "term", label: "Select term", required: true, options: termOptions },
    { name: "email", label: "Your email", placeholder: "test@gmail.com", required: true, type: "email", mask: "email" },
    { name: "birthdate", label: "Your date of birth", placeholder: "Select Date and Time", required: true, mask: "date" },
    { name: "passportSeries", label: "Your passport series", placeholder: "0000", required: true, mask: "passportSeries" },
    { name: "passportNumber", label: "Your passport number", placeholder: "000000", required: true, mask: "passportNumber" },
];
