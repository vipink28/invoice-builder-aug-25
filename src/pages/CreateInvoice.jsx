import InvoiceCompanies from "../components/invoice/InvoiceCompanies"
import InvoiceHeader from "../components/invoice/InvoiceHeader"

const CreateInvoice = () => {
    return (
        <div className="bg-white text-slate-950 p-4 flex flex-col gap-8">
            <InvoiceHeader />
            <InvoiceCompanies />
        </div>
    )
}

export default CreateInvoice