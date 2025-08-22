import { X } from "lucide-react";
import CompanyForm from "./forms/CompanyForm";

const Popup = ({ state, onClose }) => {
    const { type, data } = state;
    return (
        <div className="fixed w-screen h-screen left-0 top-0 z-30 bg-black/50 flex flex-col justify-center items-center">
            <div className="bg-white text-slate-950 w-full max-w-3xl">
                <div className="p-2 flex justify-end">
                    <button className="p-2 cursor-pointer" onClick={onClose}><X className="w-5 h-5" /></button>
                </div>
                <div className="p-4">
                    {
                        type === "view" ?
                            <div>View</div>
                            : type === "edit" ?
                                <div>
                                    <CompanyForm />
                                </div>
                                : <div>Delete</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Popup