import { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import InvoiceContext from "../../context/InvoiceContext";
import Button from "./Button";
import InputField from "./InputField";

const CompanyForm = ({ setShowCompanyForm }) => {
    const { addCompany } = useContext(InvoiceContext);
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
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
        addCompany(formData);
    }

    return (
        <div className="p-3">
            <h2 className="font-bold text-lg mb-4">Add Company Details</h2>
            <div className="grid grid-cols-2 gap-3">
                <InputField name="companyname" id="companyname" label="Company Name" required={true} onChange={handleChange} />
                <InputField name="taxnumber" id="taxnumber" label="Tax Number" onChange={handleChange} />
                <InputField name="firstname" id="firstname" label="First Name" onChange={handleChange} />
                <InputField name="lastname" id="lastname" label="Last Name" onChange={handleChange} />
                <InputField name="addressline1" id="addressline1" label="Address Line 1" onChange={handleChange} />
                <InputField name="addressline2" id="addressline2" label="Address Line 2" onChange={handleChange} />
                <InputField name="city" id="city" label="City" onChange={handleChange} />
                <InputField name="state" id="state" label="State" onChange={handleChange} />
                <InputField name="pincode" id="pincode" label="Pin Code" onChange={handleChange} />
                <InputField name="country" id="country" label="Country" onChange={handleChange} />
                <InputField name="email" id="email" label="Email" onChange={handleChange} />
                <InputField name="phone" id="phone" label="Phone" onChange={handleChange} />
                <InputField name="website" id="website" label="Website" onChange={handleChange} />
            </div>
            <div className="flex gap-3 mt-5">
                <Button style="primary" onClick={saveForm}>Add Company</Button>
                <Button style="secondary" onClick={() => setShowCompanyForm(false)}>Cancel</Button>
            </div>
        </div>
    )
}

export default CompanyForm