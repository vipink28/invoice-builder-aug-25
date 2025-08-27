import { useContext, useEffect, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import InvoiceContext from "../../context/InvoiceContext";
import Button from "./Button";
import InputField from "./InputField";

const CompanyForm = ({ setShowCompanyForm, edit, data, onClose }) => {
    const init = {
        companyname: "", firstname: "", lastname: "", taxnumber: "", addressline1: "", addressline2: "", city: "", state: "", country: "", pincode: "", email: "", phone: "", website: ""
    }
    const { addCompany, updateCompany } = useContext(InvoiceContext);
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState(init);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    const saveForm = async () => {
        if (edit) {
            updateCompany(formData);
        } else {
            addCompany(formData);
        }
    }

    const handleCancel = () => {
        if (edit) {
            onClose();
        } else {
            setShowCompanyForm(false);
        }
    }

    useEffect(() => {
        if (edit) {
            setFormData(data)
        }
    }, [edit])


    return (
        <div className="p-3">
            <h2 className="font-bold text-lg mb-4">Add Company Details</h2>
            <div className="grid grid-cols-2 gap-3">
                <InputField name="companyname" id="companyname" label="Company Name" required={true} onChange={handleChange} value={formData.companyname} />
                <InputField name="taxnumber" id="taxnumber" label="Tax Number" onChange={handleChange} value={formData.taxnumber} />
                <InputField name="firstname" id="firstname" label="First Name" onChange={handleChange} value={formData.firstname} />
                <InputField name="lastname" id="lastname" label="Last Name" onChange={handleChange} value={formData.lastname} />
                <InputField name="addressline1" id="addressline1" label="Address Line 1" onChange={handleChange} value={formData.addressline1} />
                <InputField name="addressline2" id="addressline2" label="Address Line 2" onChange={handleChange} value={formData.addressline2} />
                <InputField name="city" id="city" label="City" onChange={handleChange} value={formData.city} />
                <InputField name="state" id="state" label="State" onChange={handleChange} value={formData.state} />
                <InputField name="pincode" id="pincode" label="Pin Code" onChange={handleChange} value={formData.pincode} />
                <InputField name="country" id="country" label="Country" onChange={handleChange} value={formData.country} />
                <InputField name="email" id="email" label="Email" onChange={handleChange} value={formData.email} />
                <InputField name="phone" id="phone" label="Phone" onChange={handleChange} value={formData.phone} />
                <InputField name="website" id="website" label="Website" onChange={handleChange} value={formData.website} />
            </div>
            <div className="flex gap-3 mt-5">
                <Button style="primary" onClick={saveForm}>{edit ? "Update Comapany" : "Add Company"}</Button>
                <Button style="secondary" onClick={handleCancel}>Cancel</Button>
            </div>
        </div>
    )
}

export default CompanyForm