import * as yup from 'yup';

export const validationSchema = yup.object({
    gender: yup
        .mixed<'MALE' | 'FEMALE'>()
        .required("Select one of the options")
        .oneOf(['MALE', 'FEMALE'], "Select one of the options"),
    maritalStatus: yup
        .mixed<'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER'>()
        .nullable()
        .required("Select one of the options")
        .oneOf(['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'], "Select one of the options"),
    dependentAmount: yup
        .number()
        .typeError("Select one of the options")
        .required("Select one of the options"),
    passportIssueDate: yup
        .string()
        .required('Incorrect date of passport issue date')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in format YYYY-MM-DD')
        .test('is-valid-date', 'Incorrect date of passport issue date', (value) => {
            if (!value) return false;
            return new Date(value) <= new Date();
        }),
    // passportIssueBranch: yup
    //     .string()
    //     .required("The series must be 6 digits")
    //     .matches(/^\d{6}$/, "The series must be 6 digits"),
    passportIssueBranch: yup
        .string()
        .required("The series must be in the format XXX-XXX")
        .matches(/^\d{3}-\d{3}$/, "The series must be in the format XXX-XXX"),
    employmentStatus: yup
        .mixed<'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER'>()
        .required("Select one of the options")
        .oneOf(['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'], "Select one of the options"),
    employerINN: yup
        .string()
        .required("Department code must be 12 digits")
        .matches(/^\d{12}$/, "Department code must be 12 digits"),
    salary: yup
        .number()
        .required("Enter your salary")
        .typeError("Salary must be a number"),
    position: yup
        .mixed<'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER'>()
        .required("Select one of the options")
        .oneOf(['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'], "Select one of the options"),
    workExperienceTotal: yup
        .number()
        .typeError("Enter your work experience total")
        .required("Enter your work experience total")
        .min(0, "Experience cannot be negative")
        .max(99, "Maximum is 99 years"),
    workExperienceCurrent: yup
        .number()
        .typeError("Enter your work experience total")
        .required("Enter your work experience current")
        .min(0, "Experience cannot be negative")
        .max(99, "Maximum is 99 years"),
});