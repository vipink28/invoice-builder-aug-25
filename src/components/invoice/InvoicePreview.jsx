import { useContext } from "react";
import InvoiceContext from "../../context/InvoiceContext";

const InvoicePreview = () => {
    const { invoice } = useContext(InvoiceContext);

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