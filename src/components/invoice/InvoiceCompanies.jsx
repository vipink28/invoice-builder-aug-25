import CompanyBlock from "./CompanyBlock"

const InvoiceCompanies = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <CompanyBlock companyType="sender" />
            <CompanyBlock companyType="recipient" />
        </div>
    )
}

export default InvoiceCompanies