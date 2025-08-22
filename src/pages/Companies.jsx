import { Eye, Pen, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import Button from "../components/forms/Button";
import CompanyForm from "../components/forms/CompanyForm";
import Popup from "../components/Popup";
import InvoiceContext from "../context/InvoiceContext";

const Companies = () => {

    const { getCompaniesList } = useContext(InvoiceContext);
    const { user } = useContext(AuthContext);
    const [showCompanyForm, setShowCompanyForm] = useState(false);
    const [companyList, setCompanyList] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    //useReducer - for complex state handling



    const getCompanies = async (userid) => {
        let companies = await getCompaniesList(userid);
        setCompanyList(companies);
    }

    useEffect(() => {
        if (user) {
            getCompanies(user.id);
        }
    }, [user])

    return (
        <>
            {
                showCompanyForm &&
                <div className="fixed w-screen h-screen left-0 top-0 bg-black/30 flex justify-center items-center z-20">
                    <div className="bg-slate-800 w-full max-w-3xl p-4">
                        <CompanyForm setShowCompanyForm={setShowCompanyForm} />
                    </div>
                </div>
            }
            <div className="flex flex-col gap-6">
                <div className="p-5 flex justify-between">
                    <div>Filters</div>
                    <Button onClick={() => setShowCompanyForm(true)} style="primary" className="uppercase">Add New</Button>
                </div>

                <div className="py-6">
                    <table className="w-full">
                        <thead className="bg-slate-300 text-slate-900 text-lg text-left">
                            <tr>
                                <th className="p-2">Company Name</th>
                                <th className="p-2">Phone</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">City</th>
                                <th className="p-2">Pincode</th>
                                <th className="p-2">Tax Number</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                companyList ?
                                    companyList.map(({ companyname, phone, email, city, pincode, taxnumber }) => (
                                        <tr className="border-b border-b-slate-400">
                                            <td className="p-2">{companyname}</td>
                                            <td className="p-2">{phone}</td>
                                            <td className="p-2">{email}</td>
                                            <td className="p-2">{city}</td>
                                            <td className="p-2">{pincode}</td>
                                            <td className="p-2">{taxnumber}</td>
                                            <td className="p-2">
                                                <button className="p-2 cursor-pointer" onClick={() => setShowPopup(true)}><Eye className="w-5 h-5 text-green-500" /></button>
                                                <button className="p-2 cursor-pointer" onClick={() => setShowPopup(true)}><Pen className="w-5 h-5 text-blue-400" /></button>
                                                <button className="p-2 cursor-pointer" onClick={() => setShowPopup(true)}><Trash className="w-5 h-5 text-red-500" /></button>
                                            </td>
                                        </tr>
                                    )) :
                                    <tr>
                                        <td>No Data</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                showPopup &&
                <Popup type="view" onClose={() => { setShowPopup(false) }} />
            }
        </>
    )
}

export default Companies