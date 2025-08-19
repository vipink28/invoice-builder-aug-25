import { useState } from "react";
import Button from "../components/forms/Button";
import CompanyForm from "../components/forms/CompanyForm";

const Companies = () => {
    const [addCompany, setAddCompany] = useState(false);
    return (
        <>
            {
                addCompany &&
                <div className="fixed w-screen h-screen left-0 top-0 bg-black/30 flex justify-center items-center z-20">
                    <div className="bg-slate-800 w-full max-w-3xl p-4">
                        <CompanyForm />
                    </div>
                </div>
            }
            <div className="flex flex-col gap-6">
                <div className="p-5 flex justify-between">
                    <div>Filters</div>
                    <Button onClick={() => setAddCompany(true)} style="primary" className="uppercase">Add New</Button>
                </div>
            </div>
        </>
    )
}

export default Companies