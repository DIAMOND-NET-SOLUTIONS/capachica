import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/public/index"

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
