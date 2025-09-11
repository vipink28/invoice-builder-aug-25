import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useContext, useRef } from "react";
import AuthContext from "../../auth/AuthContext";
import InvoiceContext from "../../context/InvoiceContext";
import Button from "../forms/Button";

const InvoicePreview = ({ onClose }) => {
    const { user } = useContext(AuthContext)
    const { invoice, addInvoice } = useContext(InvoiceContext);
    const invoiceRef = useRef(null);



    const handleDownloadPDF = async () => {
        const invoiceElement = invoiceRef.current;
        if (!invoiceElement) return;

        try {
            const canvas = await html2canvas(invoiceElement, {
                scale: 3,
                useCORS: true,
                backgroundColor: "#fff"
            });

            const imgData = canvas.toDataURL("image/png", 1.0);
            const pdf = new jsPDF("p", "mm", "a4");

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();


            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;


            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;


            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }


            const timestamp = new Date().toISOString().split("T")[0];
            const fileName = `${invoice.recipient.companyname || "Invoice"}_${invoice.issuedate}_${timestamp}.pdf`;
            addInvoice({ ...invoice, userid: user.id })
            pdf.save(fileName);

        } catch (err) {
            console.error("PDF generation failed:", err);
        }
    };

    return (
        <div className="flex justify-center items-center fixed h-screen w-screen top-0 left-0 bg-black/60">
            <div className="w-full max-w-7xl bg-white h-full">
                <div ref={invoiceRef} className="w-full overflow-scroll h-[calc(100%-100px)] p-6">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <img className="h-20 object-contain mt-4" src={invoice.logo} alt="logo" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-medium uppercase">{invoice.invoicetype}</h3>
                                <p><strong>Issue Date</strong>: {invoice.issuedate}</p>
                                <p><strong>Due Date</strong>: {invoice.duedate}</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="p-4">
                                <p>From:</p>
                                {
                                    invoice.sender.companyname !== "" &&
                                    <h2>{invoice.sender.companyname}</h2>
                                }
                                <p>{invoice.sender.email}</p>
                            </div>
                            <div className="p-4">
                                <p>To:</p>
                                <h2>{invoice.recipient.companyname}</h2>
                                <p>{invoice.recipient.email}</p>
                            </div>
                        </div>

                        <div className="p-2">
                            <table className="text-left w-full border border-gray-200">
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-2">Name</th>
                                        <th className="p-2">Quantity</th>
                                        <th className="p-2">Unit Price</th>
                                        <th className="p-2">Tax</th>
                                        <th className="p-2">Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        invoice.invoiceitems.map((item) => (
                                            <tr key={item.id} className="text-left">
                                                <td className="p-2">{item.name}</td>
                                                <td className="p-2">{item.quantity}</td>
                                                <td className="p-2">{item.unitprice}</td>
                                                <td className="p-2">{item.taxname} {item.taxvalue}%</td>
                                                <td className="p-2">{item.subtotal}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-10 flex justify-end">
                            <div className="w-96 flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <p className="font-semibold">Sub Total:</p>
                                    <p>{invoice.subtotal}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold">Tax:</p>
                                    <p>{invoice.tax}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold">Total:</p>
                                    <p>{invoice.total}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button style="primary" onClick={handleDownloadPDF}>Download</Button>
                    <Button style="secondary" onClick={onClose}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default InvoicePreview