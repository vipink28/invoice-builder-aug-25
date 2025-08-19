import { DynamicIcon } from "lucide-react/dynamic";

const Button = ({ children, type, onClick, className, icon, style }) => {
    const primary = "bg-slate-700 hover:bg-slate-600";
    const secondary = "bg-gray-200 text-slate-900 hover:bg-slate-300";
    const alternate = "bg-red-400 hover:bg-red-500";
    return (
        <button type={type ? type : "submit"} onClick={onClick} className={`py-3 px-5 rounded-md font-medium cursor-pointer ${style === "primary" ? primary : style === "secondary" ? secondary : style === "alternate" ? alternate : ""} ${className && className}`}> {icon && <DynamicIcon name={icon} className="w-5 h-5" />} {children}</button>
    )
}

export default Button