import { ReactNode } from "react";
import { HomePage } from "pages/HomePage/index";
import { ERoutes } from "shared/types/routesEnum";
import { LoanPage } from "pages/LoanPage";

interface IRoute {
    path: ERoutes;
    element: ReactNode;
    exact: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: ERoutes.HOMEPAGE, element: <HomePage />, exact: false },
    { path: ERoutes.CREDIT_CARD, element: <LoanPage />, exact: false },
];