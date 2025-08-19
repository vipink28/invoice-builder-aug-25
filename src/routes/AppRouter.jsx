import { BrowserRouter, Route, Routes } from "react-router"
import { AuthProvider } from "../auth/AuthContext"
import ProtectedRoute from "../auth/ProtectedRoute"
import Navbar from "../components/Navbar"
import Companies from "../pages/Companies"
import CreateInvoice from "../pages/CreateInvoice"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MyInvoices from "../pages/MyInvoices"
import PageNotFound from "../pages/PageNotFound"
import SignUp from "../pages/SignUp"
import AuthLayout from "../pages/layouts/AuthLayout"
import MainLayout from "../pages/layouts/MainLayout"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route index element={<Login />}></Route>
                        <Route path="signup" element={<SignUp />}></Route>
                    </Route>

                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="create-invoice" element={<ProtectedRoute><CreateInvoice /></ProtectedRoute>}></Route>
                        <Route path="companies" element={<ProtectedRoute> <Companies /> </ProtectedRoute>}></Route>
                        <Route path="my-invoices" element={<ProtectedRoute> <MyInvoices /> </ProtectedRoute>}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter