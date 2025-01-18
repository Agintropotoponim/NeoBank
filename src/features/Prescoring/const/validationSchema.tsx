import * as yup from 'yup';

export const validationSchema = yup.object({
    amount: yup
        .number()
        .typeError('Incorrect value')
        .required('Amount is required')
        .min(15000, 'Minimum is 15,000')
        .max(600000, 'Maximum is 600,000'),
    term: yup.number().required('Term is required'),
    firstName: yup
        .string()
        .required('Enter your first name')
        .trim()
        .min(2, 'First name must be at least 2 characters')
        .matches(/^[A-Za-z-]+$/, 'Invalid value'),
    lastName: yup
        .string()
        .required('Enter your last name')
        .trim()
        .min(2, 'Last name must be at least 2 characters')
        .matches(/^[A-Za-z-]+$/, 'Invalid value'),
    middleName: yup
        .string()
        .nullable()
        .default(null)
        .trim()
        .test(
            'min-length',
            'Invalid value',
            (value) => !value || value.length >= 2
        )
        .matches(
            /^[A-Za-z-]*$/,
            'Invalid value'
        ),
    email: yup
        .string()
        .required('Email is required')
        .trim()
        .matches(
            /^[^@]{2,}@[a-zA-Z0-9]{2,}.*$/,
            'Invalid format'
        ),
    birthdate: yup
        .string()
        .required('Birthdate is required')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in format YYYY-MM-DD')
        .test('is-over-18', 'You must be at least 18 years old', (value) => {
            if (!value) return false;

            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1 >= 18;
            }
            return age >= 18;
        }),
    passportSeries: yup
        .string()
        .matches(/^\d{4}$/, 'The series must be 4 digits')
        .required('Passport series is required'),
    passportNumber: yup
        .string()
        .matches(/^\d{6}$/, 'The series must be 6 digits')
        .required('Passport number is required'),
});