import { Building2 } from "lucide-react";
import { useState } from "react";
import CompanyForm from "../forms/CompanyForm";

const CompanyBlock = ({ companyType }) => {
    const [openCompanyForm, setOpenCompanyForm] = useState(false);
    const [companyData, setCompanyData] = useState(null);
    const addCompanyData = (data) => {
        setCompanyData(data);
        setOpenCompanyForm(false);
    }
    return (
        <>
            <div className="border border-gray-200 p-4 cursor-pointer" onClick={() => setOpenCompanyForm(true)}>
                <h5 className="font-medium mb-3">{companyType === "sender" ? "From" : "To"}</h5>
                {
                    companyData ?
                        <div>
                            <h5>{companyData.companyname}</h5>
                            <p>{companyData.firstname} {companyData.lastname}</p>
                            <p>{companyData.email}</p>
                            <p>{companyData?.companyType}</p>
                        </div> :
                        <div className="flex gap-4 items-center">
                            <div>
                                <Building2 className="w-10 h-10" />
                            </div>
                            <div className="flex flex-col">
                                <h5 className="font-medium text-lg">{companyType === "sender" ? "Sender" : "Recipient"} Name</h5>
                                <p>{companyType === "sender" ? "Sender" : "Recipient"} company details</p>
                            </div>
                        </div>
                }
            </div>
            {
                openCompanyForm &&
                <div className="fixed w-screen h-screen left-0 top-0 bg-black/30 flex justify-center items-center z-20">
                    <div className="bg-slate-800 text-white w-full max-w-3xl p-4">
                        <CompanyForm onClose={() => setOpenCompanyForm(false)} companyType={companyType} addCompanyData={addCompanyData} />
                    </div>
                </div>
            }
        </>
    )
}

export default CompanyBlock