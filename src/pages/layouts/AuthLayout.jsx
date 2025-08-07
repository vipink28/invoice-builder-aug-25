import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-56px)]">
            <div className="w-full max-w-lg bg-slate-950 p-8 rounded-2xl">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout