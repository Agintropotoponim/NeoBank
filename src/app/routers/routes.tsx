import { ReactNode } from "react";
import App from "../App";

interface IRoute {
    path: string;
    element: ReactNode;
    exact: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: '/', element: <App />, exact: false },
];