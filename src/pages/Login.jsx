import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
            const users = await response.json();
            if (users.length > 0) {
                alert("user found, logged in")
                localStorage.setItem("ibuser", JSON.stringify(users[0]));
                navigate("/create-invoice")
            } else {
                alert("email/password is invalid");
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="py-2">
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Email</label>
                    <input type="email" name="email" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Password</label>
                    <input type="password" name="password" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" onChange={handleChange} />
                </div>

                <button onClick={handleLogin} className="bg-slate-300 text-slate-950 px-4 py-2 rounded-md font-bold cursor-pointer">Login</button>
            </form>
        </div>
    )
}

export default Login