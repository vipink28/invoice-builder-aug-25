import InvoiceCompanies from "../components/invoice/InvoiceCompanies"
import InvoiceDetails from "../components/invoice/InvoiceDetails"
import InvoiceHeader from "../components/invoice/InvoiceHeader"

const CreateInvoice = () => {
    return (
        <div className="bg-white text-slate-950 p-4 flex flex-col gap-8">
            <InvoiceHeader />
            <InvoiceCompanies />
            <InvoiceDetails />
        </div>
    )
}

export default CreateInvoice