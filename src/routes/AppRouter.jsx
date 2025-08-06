import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "../components/Navbar"
import Companies from "../pages/Companies"
import CreateInvoice from "../pages/CreateInvoice"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MyInvoices from "../pages/MyInvoices"
import PageNotFound from "../pages/PageNotFound"
import SignUp from "../pages/SignUp"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create-invoice" element={<CreateInvoice />}></Route>
                <Route path="/companies" element={<Companies />}></Route>
                <Route path="/my-invoices" element={<MyInvoices />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter