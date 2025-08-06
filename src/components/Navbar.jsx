import { NavLink } from "react-router"
import Container from "./layout/Container"

const Navbar = () => {
    return (
        <div className="bg-slate-950 text-white py-2">
            <Container>
                <div className="flex items-center">
                    <div>Logo</div>
                    <div className="flex items-center ms-auto">
                        <NavLink to="/" className="p-2">Home</NavLink>
                        <NavLink to="/create-invoice" className="p-2">Create Invoice</NavLink>
                        <NavLink to="/companies" className="p-2">Companies</NavLink>
                        <NavLink to="/my-invoices" className="p-2">My Invoices</NavLink>
                        <NavLink to="/login" className="p-2">Login</NavLink>
                        <NavLink to="/signup" className="p-2">Signup</NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar