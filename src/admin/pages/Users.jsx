import { Eye, Pen, Trash } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/layout/Container";
import { fetchUsers } from "../features/userSlice";

const Users = () => {
    const { users } = useSelector((state) => state.admin);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    return (
        <Container>
            <div className="py-6">
                <table className="w-full">
                    <thead className="bg-slate-300 text-slate-900 text-lg text-left">
                        <tr>
                            <th className="p-2">Id</th>
                            <th className="p-2">Username</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.status === "loading" ?
                                <p>...loading</p> :
                                users.status === "success" ?
                                    <>
                                        {
                                            users.data.length > 0 ?
                                                users.data.map((user) => (
                                                    <tr key={user.id} className="border-b border-b-slate-400">
                                                        <td className="p-2">{user.id}</td>
                                                        <td className="p-2">{user.fullname}</td>
                                                        <td className="p-2">{user.email}</td>
                                                        <td className="p-2">
                                                            <button className="p-2 cursor-pointer"><Eye className="w-5 h-5 text-green-500" /></button>
                                                            <button className="p-2 cursor-pointer"><Pen className="w-5 h-5 text-blue-400" /></button>
                                                            <button className="p-2 cursor-pointer"><Trash className="w-5 h-5 text-red-500" /></button>
                                                        </td>
                                                    </tr>
                                                )) :
                                                <tr>
                                                    <td>No Data</td>
                                                </tr>
                                        }
                                    </>
                                    :
                                    <p>Something went wrong</p>

                        }
                    </tbody>
                </table>
            </div>
        </Container>
    )
}

export default Users