import Container from "./layout/Container"
import MenuLink from "./MenuLink"

const Navbar = () => {
    const links = [
        { path: "/", text: "Home", icon: "house" },
        { path: "/create-invoice", text: "Create Invoice", icon: "file-pen" },
        { path: "/my-invoices", text: "My Invoices", icon: "list" },
        { path: "/companies", text: "Companies", icon: "building" },
        { path: "/auth", text: "Login", icon: "user" },
        { path: "/auth/signup", text: "Signup", icon: "user-pen" },
    ]
    return (
        <div className="bg-slate-950 text-white py-2">
            <Container>
                <div className="flex items-center">
                    <div>Logo</div>
                    <div className="flex items-center ms-auto">
                        {
                            links.map((link) => (
                                <MenuLink key={link.path} path={link.path} icon={link.icon}>{link.text}</MenuLink>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar