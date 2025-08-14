import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSignUp = async (e) => {
        e.preventDefault();
        //http://localhost:5000/users
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        try {
            const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: "GET" });
            const user = await checkUser.json();
            if (user.length > 0) {
                alert("email already exist");
            } else {
                const response = await fetch("http://localhost:5000/users", config);
                const user = await response.json();
                if (response.ok) {
                    alert("user created")
                    localStorage.setItem("ibuser", JSON.stringify(user));
                    navigate("/create-invoice")
                }
            }

        } catch (error) {
            alert(error);
        }
    }


    return (
        <div className="py-2">
            <h2>Sign Up</h2>
            <form>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Full Name</label>
                    <input type="text" name="fullname" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Email</label>
                    <input type="email" name="email" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Password</label>
                    <input type="password" name="password" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" onChange={handleChange} />
                </div>

                <button onClick={handleSignUp} className="bg-slate-300 text-slate-950 px-4 py-2 rounded-md font-bold cursor-pointer">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp