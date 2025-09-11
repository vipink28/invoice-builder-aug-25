export const invoiceSchema = {
    logo: null,
    invoicenumber: "",
    invoicetype: "",
    issuedate: "",
    duedate: "",
    sender: {
        companyname: "", firstname: "", lastname: "", taxnumber: "", addressline1: "", addressline2: "", city: "", state: "", country: "", pincode: "", email: "", phone: "", website: "", companyType: "sender"
    },
    recipient: {
        companyname: "", firstname: "", lastname: "", taxnumber: "", addressline1: "", addressline2: "", city: "", state: "", country: "", pincode: "", email: "", phone: "", website: "", companyType: "recipient"
    },
    invoiceitems: [
        { name: "", quantity: 0, unitprice: 0, taxname: "", taxvalue: 0, subtotal: 0, description: "" }
    ],
    subtotal: 0,
    totaltax: 0,
    total: 0,
    notes: "",
}