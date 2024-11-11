import { Route, Routes } from "react-router-dom"
import Users from "../users/Users"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Users />} />
        </Routes>
    )
}