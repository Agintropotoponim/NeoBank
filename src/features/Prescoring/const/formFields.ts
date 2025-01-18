import { termOptions } from '../const/termOptions';
import { PrescoringForm } from '../type/PrescoringForm';



// export const formFields = [


//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Amount",
//       placeholder: "Enter amount",
//       required: true,
//       type: "text",
//       registerName: "amount",
//       onChangeHandler: (setAmount: (value: number | null) => void) => (e: React.ChangeEvent<HTMLInputElement>) => 
//         setAmount(Number(e.target.value) || null),
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your last name",
//       placeholder: "For Example Doe",
//       required: true,
//       type: "text",
//       registerName: "lastName",
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your first name",
//       placeholder: "For Example John",
//       required: true,
//       type: "text",
//       registerName: "firstName",
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your patronymic",
//       placeholder: "For Example Victorovich",
//       required: false,
//       type: "text",
//       registerName: "middleName",
//     },
//   },
//   {
//     component: SelectFieldContainer,
//     props: {
//       label: "Select term",
//       required: true,
//       options: termOptions,
//       registerName: "term",
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your email",
//       placeholder: "test@gmail.com",
//       required: true,
//       type: "email",
//       registerName: "email",
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your date of birth",
//       placeholder: "Select Date and Time",
//       required: true,
//       type: "text",
//       registerName: "birthdate",
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your passport series",
//       placeholder: "0000",
//       required: true,
//       type: "text",
//       registerName: "passportSeries",
//     },
//   },
//   {
//     component: InputFieldContainer,
//     props: {
//       label: "Your passport number",
//       placeholder: "000000",
//       required: true,
//       type: "text",
//       registerName: "passportNumber",
//     },
//   },
// ];

// export const formFields = [
//     {
//         type: 'input',
//         label: 'Your last name',
//         placeholder: 'For Example Doe',
//         required: true,
//         name: 'lastName',
//     },
//     {
//         type: 'input',
//         label: 'Your first name',
//         placeholder: 'For Example John',
//         required: true,
//         name: 'firstName',
//     },
//     {
//         type: 'select',
//         label: 'Select term',
//         required: true,
//         name: 'term',
//         options: [
//             { value: 6, title: '6 months' },
//             { value: 12, title: '12 months' },
//             { value: 24, title: '24 months' },
//         ],
//     },
// ];

interface FieldConfig<T> {
    name: keyof T;
    label: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    options?: { value: string | number; title: string }[];
}
  
export const formFields: FieldConfig<PrescoringForm>[] = [
    //{ name: "amount", label: "Amount", placeholder: "Enter amount", required: true, type: "text" },
    { name: "lastName", label: "Your last name", placeholder: "For Example Doe", required: true },
    { name: "firstName", label: "Your first name", placeholder: "For Example John", required: true },
    { name: "middleName", label: "Your patronymic", placeholder: "For Example Victorovich" },
    { name: "term", label: "Select term", required: true, options: termOptions },
    { name: "email", label: "Your email", placeholder: "test@gmail.com", required: true, type: "email" },
    { name: "birthdate", label: "Your date of birth", placeholder: "Select Date and Time", required: true },
    { name: "passportSeries", label: "Your passport series", placeholder: "0000", required: true },
    { name: "passportNumber", label: "Your passport number", placeholder: "000000", required: true },
];
