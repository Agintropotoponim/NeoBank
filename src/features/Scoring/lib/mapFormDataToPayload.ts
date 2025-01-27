import { ScoringForm } from "../type/ScoringForm";
import { FormPayload } from "../type/FormPayload";

export const mapFormDataToPayload = (data: ScoringForm): FormPayload => {
    const account = "11223344556677889900";

    return {
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        dependentAmount: data.dependentAmount,
        passportIssueDate: data.passportIssueDate,
        passportIssueBranch: data.passportIssueBranch,
        employment: {
            employmentStatus: data.employmentStatus,
            employerINN: data.employerINN,
            salary: data.salary,
            position: data.position,
            workExperienceTotal: data.workExperienceTotal,
            workExperienceCurrent: data.workExperienceCurrent,
        },
        account: account,
    };
};