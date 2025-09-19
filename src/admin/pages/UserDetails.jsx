import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthContext from "../../auth/AuthContext";
import Button from "../../components/forms/Button";
import InputField from "../../components/forms/InputField";
import Container from "../../components/layout/Container";

const UserDetails = () => {
    const { updateUser } = useContext(AuthContext);
    const init = {
        fullname: "",
        email: "",
        password: "",
        phone: "",
        about: ""
    }
    const { id, type } = useParams();
    const [user, setUser] = useState(init);
    const [isView, setIsView] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const fetchUserById = async (id) => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);

        setUser((prev) => ({
            ...prev,
            ...response.data
        }));
    }

    const saveUser = () => {
        updateUser(user)
    }

    useEffect(() => {
        if (id) {
            fetchUserById(id);
        }
        if (type === "view") {
            setIsView(true);
        } else {
            setIsView(false);
        }
    }, [id])

    return (
        <Container>
            <h2 className="mb-5 font-bold text-2xl">User Details</h2>
            <div className="flex flex-col">
                <InputField name="fullname" readOnly={isView} label="Full Name" className={isView && "!bg-slate-600 !border-slate-600"} value={user.fullname} onChange={handleChange} />
                <InputField name="email" readOnly={isView} label="Email" value={user.email} onChange={handleChange} />
                <InputField name="password" readOnly={isView} label="Password" value={user.password} onChange={handleChange} />
                <InputField name="phone" readOnly={isView} label="Phone" value={user.phone} onChange={handleChange} />
                <InputField name="about" readOnly={isView} label="About" value={user.about} onChange={handleChange} />
            </div>
            {
                !isView &&
                <Button style="primary" onClick={saveUser}>Save</Button>
            }
        </Container>
    )
}

export default UserDetails