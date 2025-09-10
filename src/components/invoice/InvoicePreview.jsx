import { useContext } from "react";
import InvoiceContext from "../../context/InvoiceContext";

const InvoicePreview = () => {
    const { invoice } = useContext(InvoiceContext);

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
            const fileName = `${invoice.recipient.companyname || "Invoice"}_${invoiceheader.issuedate}_${timestamp}.pdf`;

            pdf.save(fileName);
        } catch (err) {
            console.error("PDF generation failed:", err);
        }
    };


    return (
        <div className="flex justify-center items-center fixed h-screen w-screen top-0 left-0 bg-black/60">
            <div className="w-full max-w-7xl bg-white h-full">
                <div className="w-full overflow-scroll h-full p-6">
                    <h1>Invoice Preview</h1>
                </div>
            </div>
        </div>
    )
}

export default InvoicePreview