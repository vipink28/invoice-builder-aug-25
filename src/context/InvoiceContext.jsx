import { createContext } from "react";
import toast from "react-hot-toast";
import { baseUrl } from "../helper";

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {

    //add a company
    const addCompany = async (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        try {
            const response = await fetch(`${baseUrl}/companies`, config);
            if (response.status === 201) {
                toast.success("New company added");
            }
            return response;
        } catch (error) {
            console.log(error)
            toast.error("Failed operation, please try again")
        }
    }
    //update a company

    const updateCompany = async (data) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        try {
            const response = await fetch(`${baseUrl}/companies/${data.id}`, config);
            if (response.status === 200) {
                toast.success("company updated successfully");
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed operation, please try again")
        }
    }


    //get all companies
    const getCompaniesList = async (userid) => {
        const config = {
            method: "GET"
        }
        try {
            const response = await fetch(`${baseUrl}/companies?userid=${userid}`, config);
            const companies = await response.json();
            return companies;
        } catch (error) {
            console.log(error)
            toast.error("Failed operation, please try again")
        }
    }

    //get a company

    const getCompany = async (id) => {
        const config = {
            method: "GET"
        }
        try {
            const response = await fetch(`${baseUrl}/companies`, config);
            if (response.status === 200) {
                toast.success("New company added");
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed operation, please try again")
        }
    }


    //delete a company
    const deleteCompany = async (id) => {
        const config = {
            method: "DELETE"
        }
        try {
            const response = await fetch(`${baseUrl}/companies/${id}`, config);
            if (response.status === 200) {
                toast.success("New company added");
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed operation, please try again")
        }
    }

    return (
        <InvoiceContext.Provider value={{
            addCompany,
            getCompaniesList,
            updateCompany,
            deleteCompany
        }}>
            {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceContext;
// export const useInvoice = useContext(InvoiceContext); 