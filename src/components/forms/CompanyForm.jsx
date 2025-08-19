import Button from "./Button"
import InputField from "./InputField"

const CompanyForm = () => {
    // Company Name, First Name, Last Name, email, phone, addressline1, addressline2, city, state, country, pincode, taxInfo, website
    return (
        <div className="p-3">
            <h2 className="font-bold text-lg mb-4">Add Company Details</h2>
            <div className="grid grid-cols-2 gap-3">
                <InputField name="companyname" id="companyname" label="Company Name" required={true} />
                <InputField name="taxnumber" id="taxnumber" label="Tax Number" />
                <InputField name="firstname" id="firstname" label="First Name" />
                <InputField name="lastname" id="lastname" label="Last Name" />
                <InputField name="addressline1" id="addressline1" label="Address Line 1" />
                <InputField name="addressline2" id="addressline2" label="Address Line 2" />
                <InputField name="city" id="city" label="City" />
                <InputField name="state" id="state" label="State" />
                <InputField name="pincode" id="pincode" label="Pin Code" />
                <InputField name="country" id="country" label="Country" />
                <InputField name="email" id="email" label="Email" />
                <InputField name="website" id="website" label="Website" />
            </div>
            <div className="flex gap-3 mt-5">
                <Button style="primary">Add Company</Button>
                <Button style="secondary">Cancel</Button>
            </div>
        </div>
    )
}

export default CompanyForm