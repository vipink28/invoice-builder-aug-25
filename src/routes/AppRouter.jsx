import { useContext } from "react"
import { Provider } from "react-redux"
import { Navigate, Route, Routes } from "react-router"
import AdminLayout from "../admin/AdminLayout"
import { store } from "../admin/app/store"
import Dashboard from "../admin/pages/Dashboard"
import Users from "../admin/pages/Users"
import AuthContext from "../auth/AuthContext"
import ProtectedRoute from "../auth/ProtectedRoute"
import Navbar from "../components/Navbar"
import { InvoiceProvider } from "../context/InvoiceContext"
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
    const adminEmail = "vipin@gmail.com";
    const { user, logout } = useContext(AuthContext);

    return (
        <InvoiceProvider>
            <Navbar user={user} logout={logout} adminEmail={adminEmail} />
            {
                user &&
                <>
                    {
                        user.email !== adminEmail ?
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
                            :
                            <Provider store={store}>
                                <Routes>
                                    <Route path="/admin" element={<AdminLayout />}>
                                        <Route index element={<Dashboard />}></Route>
                                        <Route path="users" element={<Users />}></Route>
                                    </Route>
                                    <Route path="*" element={<Navigate to="/admin" />}></Route>
                                </Routes>
                            </Provider>
                    }
                </>
            }
        </InvoiceProvider >
    )
}

export default AppRouter