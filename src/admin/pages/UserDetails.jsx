import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserDetails = () => {
    const { id, type } = useParams();
    const [user, setUser] = useState(null);
    const fetchUserById = async (id) => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(response.data);
    }

    useEffect(() => {
        if (id) {
            fetchUserById(id);
        }
    }, [id])

    return (
        <div>UserDetails</div>
    )
}

export default UserDetails