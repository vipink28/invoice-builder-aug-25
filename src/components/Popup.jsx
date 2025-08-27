import { X } from "lucide-react";
import { useContext } from "react";
import InvoiceContext from "../context/InvoiceContext";
import Button from "./forms/Button";
import CompanyForm from "./forms/CompanyForm";
import ViewCompany from "./ViewCompany";

const Popup = ({ state, onClose }) => {
    const { type, data } = state;
    const { deleteCompany } = useContext(InvoiceContext);
    return (
        <div className="fixed w-screen h-screen left-0 top-0 z-30 bg-black/50 flex flex-col justify-center items-center">
            <div className="bg-white text-slate-950 w-full max-w-3xl">
                <div className="p-2 flex justify-end">
                    <button className="p-2 cursor-pointer" onClick={onClose}><X className="w-5 h-5" /></button>
                </div>
                <div className="p-4">
                    {
                        type === "view" ?
                            <ViewCompany data={data} />
                            : type === "edit" ?
                                <div>
                                    <CompanyForm edit={true} data={data} onClose={onClose} />
                                </div>
                                : <div className="flex flex-col">
                                    <p>Do you want to delete "{data?.companyname}" ?</p>
                                    <div className="flex gap-2 justify-end">
                                        <Button style="alternate" onClick={() => deleteCompany(data.id)}>Yes</Button>
                                        <Button style="secondary" onClick={onClose}>No</Button>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Popup