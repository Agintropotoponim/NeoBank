import { ReactNode } from "react";
import { HomePage } from "../../pages/HomePage/ui/HomePage";

interface IRoute {
    path: string;
    element: ReactNode;
    exact: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: '/', element: <HomePage />, exact: false },
];