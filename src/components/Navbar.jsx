import { UserCircle2 } from "lucide-react"
import { useState } from "react"
import Container from "./layout/Container"
import MenuLink from "./MenuLink"

const Navbar = ({ user, logout, adminEmail }) => {

    const [dropdown, setDropdown] = useState(false);
    const links = [
        { path: "/", text: "Home", icon: "house" },
        { path: "/auth", text: "Login", icon: "user" },
        { path: "/auth/signup", text: "Signup", icon: "user-pen" },
    ]

    const authenticatedLinks = [
        { path: "/create-invoice", text: "Create Invoice", icon: "file-pen" },
        { path: "/my-invoices", text: "My Invoices", icon: "list" },
        { path: "/companies", text: "Companies", icon: "building" },
    ]

    const adminLinks = [
        { path: "/admin", text: "Dashboard", icon: "layout-dashboard" },
        { path: "/admin/users", text: "Users List", icon: "book-user" }
    ]


    return (
        <div className="bg-slate-950 text-white py-2">
            <Container>
                <div className="flex items-center">
                    <div>Logo</div>
                    <div className="flex items-center ms-auto">
                        {
                            user ?
                                <>
                                    {
                                        user.email === adminEmail ?
                                            adminLinks.map((link) => (
                                                <MenuLink key={link.path} path={link.path} icon={link.icon}>{link.text}</MenuLink>
                                            )) :
                                            authenticatedLinks.map((link) => (
                                                <MenuLink key={link.path} path={link.path} icon={link.icon}>{link.text}</MenuLink>
                                            ))
                                    }
                                </>
                                :
                                links.map((link) => (
                                    <MenuLink key={link.path} path={link.path} icon={link.icon}>{link.text}</MenuLink>
                                ))
                        }
                        {
                            user &&
                            <div className="relative">
                                <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-2"><UserCircle2 /> {user?.fullname}</button>
                                {
                                    dropdown &&
                                    <div className="absolute right-0 top-10 w-44 bg-slate-950">
                                        <div className="border-b border-b-gray-200">
                                            <button onClick={logout} className="w-full p-2 cursor-pointer">Logout</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar