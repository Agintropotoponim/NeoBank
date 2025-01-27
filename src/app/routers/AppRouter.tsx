import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {
                publicRoutes.map((route) =>
                    <Route path={route.path} element={route.element} key={route.path} />)
            }
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRouter;