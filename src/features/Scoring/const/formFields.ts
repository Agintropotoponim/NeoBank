import { MaskType } from "shared/consts/inputMasks";
import { ScoringForm } from "../type/ScoringForm";

interface FieldConfig<T> {
    name: keyof T;
    label: string;
    required: boolean;
    type?: 'text' | 'number' | 'select';
    placeholder?: string;
    options?: string[];
    maxLength?: number;
    mask?: MaskType;
}

export const formFields: FieldConfig<ScoringForm>[] = [
    { name: "gender", label: "What's your gender", required: true, options: ["", "MALE", "FEMALE"] },
    { name: "maritalStatus", label: "Your marital status", required: true, options: ["", "MARRIED", "DIVORCED", "SINGLE", "WIDOW_WIDOWER"] },
    { name: "dependentAmount", label: "Your number of dependents", required: true, type: "text", mask: "dependents" },
    { name: "passportIssueDate", label: "Date of issue of the passport", required: true, placeholder: "Select Date and Time", mask: "date" },
    { name: "passportIssueBranch", label: "Division code", required: true, type: "text", placeholder: "000000", mask: "divisionCode" },
];

export const employmentFormFields: FieldConfig<ScoringForm>[] = [
    { name: "employmentStatus", label: "Your employment status", required: true, options: ["", "UNEMPLOYED", "SELF_EMPLOYED", "EMPLOYED", "BUSINESS_OWNER"] },
    { name: "employerINN", label: "Your employer INN", required: true, placeholder: "000000000000", mask: "employerINN" },
    { name: "salary", label: "Your salary", required: true, placeholder: "For example 100 000", type: "text", mask: "digits" },
    { name: "position", label: "Your position", required: true, options: ["", "WORKER", "MID_MANAGER", "TOP_MANAGER", "OWNER"] },
    { name: "workExperienceTotal", label: "Your work experience total", required: true, placeholder: "For example 10", type: "text", mask: "digits" },
    { name: "workExperienceCurrent", label: "Your work experience current", required: true, placeholder: "For example 2", type: "text", mask: "digits" },
];