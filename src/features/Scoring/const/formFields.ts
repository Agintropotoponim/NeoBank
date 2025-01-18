import { ScoringForm } from "../type/ScoringForm";

interface FieldConfig<T> {
    name: keyof T;
    label: string;
    required: boolean;
    type?: 'text' | 'number' | 'select';
    placeholder?: string;
    options?: string[];
    maxLength?: number;
}


export const formFields: FieldConfig<ScoringForm>[] = [
    { name: "gender", label: "What's your gender", required: true, options: ["", "MALE", "FEMALE"] },
    { name: "maritalStatus", label: "Your marital status", required: true, options: ["", "MARRIED", "DIVORCED", "SINGLE", "WIDOW_WIDOWER"] },
    { name: "dependentAmount", label: "Your number of dependents", required: true, type: "text", maxLength: 2 },
    { name: "passportIssueDate", label: "Date of issue of the passport", required: true, placeholder: "Select Date and Time" },
    { name: "passportIssueBranch", label: "Division code", required: true, type: "text", placeholder: "000000" },
];

export const employmentFormFields: FieldConfig<ScoringForm>[] = [
    { name: "employmentStatus", label: "Your employment status", required: true, options: ["", "UNEMPLOYED", "SELF_EMPLOYED", "EMPLOYED", "BUSINESS_OWNER"] },
    { name: "employerINN", label: "Your employer INN", required: true, placeholder: "000000000000" },
    { name: "salary", label: "Your salary", required: true, placeholder: "For example 100 000", type: "text" },
    { name: "position", label: "Your position", required: true, options: ["", "WORKER", "MID_MANAGER", "TOP_MANAGER", "OWNER"] },
    { name: "workExperienceTotal", label: "Your work experience total", required: true, placeholder: "For example 10", type: "text" },
    { name: "workExperienceCurrent", label: "Your work experience current", required: true, placeholder: "For example 2", type: "text" },
];