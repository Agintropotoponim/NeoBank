import { ReactNode } from "react";
import { HomePage } from "pages/HomePage/index";
import { ERoutes } from "shared/types/routesEnum";
import { LoanPage } from "pages/LoanPage";
import { LoanApplicationContinuation } from "pages/LoanApplicationContinuation/ui/LoanApplicationContinuation";
import { LoanDocument } from "pages/LoanDocument/ui/LoanDocument";
import { LoanDocumentSign } from "pages/LoanDocumentSign";
import { LoanCode } from "pages/LoanCode/ui/LoanCode";

interface IRoute {
    path: ERoutes;
    element: ReactNode;
    exact: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: ERoutes.HOMEPAGE, element: <HomePage />, exact: false },
    { path: ERoutes.CREDIT_CARD, element: <LoanPage />, exact: false },
    { path: ERoutes.LOAN_CONTINUATION, element: <LoanApplicationContinuation />, exact: true },
    { path: ERoutes.LOAN_DOCUMENT, element: <LoanDocument />, exact: true },
    { path: ERoutes.LOAN_DOCUMENT_SIGN, element: <LoanDocumentSign />, exact: true },
    { path: ERoutes.LOAN_CODE, element: <LoanCode />, exact: true },
];