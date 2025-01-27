import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { LoanCodeService } from "../api/LoanCodeService";

interface IUseVerifyCodeOptions {
    applicationId: number | null;
}

export const useVerifyCode = ({ applicationId }: IUseVerifyCodeOptions) => {
    const { mutate: verifyCode, data: response, isSuccess, isError, error } = useMutation<AxiosResponse, Error, string>({
        mutationFn: async (code) => {
            const res = await LoanCodeService.verifyCode(applicationId, Number(code));
            return res;
        },
    });

    return { verifyCode, response, isSuccess, isError, error };
};
