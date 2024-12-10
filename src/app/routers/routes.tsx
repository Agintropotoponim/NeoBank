import { ReactNode } from "react";
import { HomePage } from "pages/HomePage/index";
import { ERoutes } from "shared/types/routesEnum";

interface IRoute {
    path: ERoutes;
    element: ReactNode;
    exact: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: ERoutes.HOMEPAGE, element: <HomePage />, exact: false },
];