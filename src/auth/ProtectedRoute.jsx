import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const fetchUserStatus = async (email) => {
        try {
            const response = await fetch(`http://localhost:5000/users?email=${email}`, { method: "GET" })
            const user = await response.json();
            if (user.length > 0) {
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem("ibuser");
                setIsLoggedIn(false);
                navigate("/auth");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("ibuser"));
        if (localUser) {
            fetchUserStatus(localUser.email);
        } else {
            setIsLoggedIn(false);
            navigate("/auth");
        }
    }, [])

    return isLoggedIn ? children : null
}

export default ProtectedRoute