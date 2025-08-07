import { DynamicIcon } from 'lucide-react/dynamic';
import { NavLink } from "react-router";

const MenuLink = ({ path, children, icon }) => {
    return (
        <NavLink to={path} className={({ isActive }) => (
            `${isActive ? "text-white" : "text-slate-400"} py-2 px-4 flex items-center gap-2 hover:text-white transition duration-300`
        )
        }> <DynamicIcon name={icon} className='w-4 h-4' />  {children}</NavLink>
    )
}

export default MenuLink