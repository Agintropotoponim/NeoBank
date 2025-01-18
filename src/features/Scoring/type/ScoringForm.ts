export interface ScoringForm {
    applicationId?: number,
    gender: 'MALE' | 'FEMALE';
    maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
    employerINN: string;
    salary: number;
    position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
    workExperienceTotal: number;
    workExperienceCurrent: number;
}