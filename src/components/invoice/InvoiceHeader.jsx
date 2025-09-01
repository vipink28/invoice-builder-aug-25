import { Image } from "lucide-react";
import { useContext, useState } from "react";
import InvoiceContext from "../../context/InvoiceContext";
import { convertBase64, formatDate } from "../../helper";

const InvoiceHeader = () => {
    const { handleInvoice } = useContext(InvoiceContext);
    const now = new Date();
    const today = formatDate(now)
    const futuredate = formatDate(new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000));

    const init = {
        logo: null,
        invoicetype: "invoice",
        invoicenumber: "0001",
        issuedate: today,
        duedate: futuredate
    }
    const [headerData, setHeaderData] = useState(init);
    const handleHeaderData = (e) => {
        const { name, value } = e.target;
        setHeaderData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleLogo = async (e) => {
        const file = e.target.files[0];
        const imgString = await convertBase64(file);
        setHeaderData((prev) => ({
            ...prev,
            logo: imgString
        }))
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-2">
                    <label htmlFor="logoselector" className="flex items-center gap-2 h-10 border border-gray-200 px-2">
                        <Image className="w-5 h-5" />
                        <span>{headerData?.logo ? "Change logo" : "Choose a logo"}</span>
                    </label>
                    <input type="file" id="logoselector" name="logo" className="hidden" onChange={handleLogo} />
                    {
                        headerData?.logo &&
                        <img src={headerData.logo} alt="logo" className="h-20 object-contain mt-4" />
                    }
                </div>
                <div>
                    <select name="invoicetype" defaultValue={headerData.invoicetype} className="appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 px-3 focus:outline-none" onChange={handleHeaderData} onBlur={() => handleInvoice(headerData)}>
                        <option value="invoice">Invoice</option>
                        <option value="bill">Bill</option>
                        <option value="estimate">Estimate</option>
                    </select>
                </div>
                <div>
                    <input type="text" name="invoicenumber" className="appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 p-3 focus:outline-none" value={headerData.invoicenumber} onChange={handleHeaderData} onBlur={() => handleInvoice(headerData)} />
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex flex-col">
                    <div>
                        <label>Issue Date</label>
                        <input type="date" name="issuedate" onChange={handleHeaderData} className="appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 p-3 focus:outline-none" value={headerData.issuedate} onBlur={() => handleInvoice(headerData)} />
                    </div>
                    <div>
                        <label>Due Date</label>
                        <input type="date" name="duedate" onChange={handleHeaderData} className="appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 p-3 focus:outline-none" value={headerData.duedate} onBlur={() => handleInvoice(headerData)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceHeader