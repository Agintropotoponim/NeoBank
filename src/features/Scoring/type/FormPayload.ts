export interface EmploymentDetails {
    employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
    employerINN: string;
    salary: number;
    position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
    workExperienceTotal: number;
    workExperienceCurrent: number;
}

export interface FormPayload {
    gender: 'MALE' | 'FEMALE';
    maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employment: EmploymentDetails;
    account: string
}