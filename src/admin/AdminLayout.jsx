import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { greeting } from "./features/userSlice";

const AdminLayout = () => {
    const data = useSelector((state) => state.admin.greetings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(greeting())
    }, [])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AdminLayout