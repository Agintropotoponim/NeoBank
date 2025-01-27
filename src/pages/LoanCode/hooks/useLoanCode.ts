import { useState } from "react";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { LoanStep } from "shared/types/loanStep";
import { useVerifyCode } from "../hooks/useVerifyCode";
import { REGEX_ONLY_DIGIT } from "../consts/regex";

export const useLoanCode = (applicationId: number | null) => {
    const { setCurrentStep } = useLoanStore();
    const { verifyCode } = useVerifyCode({ applicationId });

    const [code, setCode] = useState(["", "", "", ""]);
    const [error, setError] = useState(false);

    const handleChange = (index: number, value: string) => {
        if (!REGEX_ONLY_DIGIT.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            document.getElementById(`code-input-${index + 1}`)?.focus();
        }

        if (newCode.every((digit) => digit !== "")) {
            handleSubmit(newCode.join(""));
        }
    };

    const handleSubmit = (enteredCode: string) => {
        verifyCode(enteredCode, {
            onSuccess: () => setCurrentStep(LoanStep.FINAL),
            onError: () => {
                setError(true);
                setCode(["", "", "", ""]);
                document.getElementById("code-input-0")?.focus();
            },
        });
    };

    return { code, error, handleChange };
};