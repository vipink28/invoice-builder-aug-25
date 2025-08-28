import { Image } from "lucide-react"
import { useState } from "react"
import InputField from "../forms/InputField"

const InvoiceHeader = () => {
    const [headerData, setHeaderData] = useState(null)
    const handleHeaderData = (e) => {
        const { name, value } = e.target;
        setHeaderData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-2">
                    <label htmlFor="logoselector" className="flex items-center gap-2 h-10 border border-gray-200 px-2">
                        <Image className="w-5 h-5" />
                        <span>Choose a logo</span>
                    </label>
                    <input type="file" id="logoselector" name="logo" className="hidden" />
                </div>
                <div>
                    <select name="invoicetype" className="appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 px-3 focus:outline-none" onChange={handleHeaderData}>
                        <option value="invoice">Invoice</option>
                        <option value="bill">Bill</option>
                        <option value="estimate">Estimate</option>
                    </select>
                </div>
                <div>
                    <InputField name="invoicenumber" type="text" placeholder="0001" onChange={handleHeaderData} />
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex flex-col">
                    <div>
                        <label>Issue Date</label>
                        <InputField type="date" name="issuedate" onChange={handleHeaderData} />
                    </div>
                    <div>
                        <label>Due Date</label>
                        <InputField type="date" name="duedate" onChange={handleHeaderData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceHeader