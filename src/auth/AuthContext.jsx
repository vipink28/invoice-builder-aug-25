import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //signup
    const signUp = async (formData) => {
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
                    setUser(user);
                    navigate("/create-invoice")
                }
            }

        } catch (error) {
            alert(error);
        }
    }


    //login
    const login = async (formData) => {
        try {
            const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
            const users = await response.json();
            if (users.length > 0) {
                alert("user found, logged in")
                localStorage.setItem("ibuser", JSON.stringify(users[0]));
                setUser(users[0])
                navigate("/create-invoice")
            } else {
                alert("email/password is invalid");
            }
        } catch (error) {
            console.log(error)
        }
    }


    // check user status
    const fetchUserStatus = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/users?email=${email}`, { method: "GET" })
            const user = await response.json();
            if (user.length > 0) {
                setUser(user[0])
            } else {
                localStorage.removeItem("ibuser");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.removeItem("ibuser");
        setUser(null);
        navigate("/auth")
    }

    //get user from localstorage
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("ibuser"));
        if (localUser) {
            fetchUserStatus(localUser.email);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            signUp,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;