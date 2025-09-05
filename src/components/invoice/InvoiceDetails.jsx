import { Check, Pen, Trash } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import InvoiceContext from "../../context/InvoiceContext";
import InputField from "../forms/InputField";

const InvoiceDetails = () => {
    const { handleInvoice } = useContext(InvoiceContext)
    const init = { id: 0, name: "", quantity: 0, unitprice: 0, taxname: "", taxvalue: 0, subtotal: 0, description: "", saved: false }
    const [itemsList, setItemsList] = useState([]);
    const [itemData, setItemData] = useState(init);
    const [invoiceTotal, setInvoiceTotal] = useState({
        subTotal: 0,
        tax: 0,
        grandTotal: 0
    })
    const calculateTotal = () => {
        let subtotal = 0;
        let tax = 0
        itemsList.map((item) => {
            subtotal += Number(item.subtotal)
            tax += Number(item.taxvalue)
        })

        setInvoiceTotal({ subtotal, tax, grandtotal: subtotal + tax })
    }

    const handleAddNewItem = () => {
        const prevId = itemsList.length > 0 ? itemsList[itemsList.length - 1].id + 1 : 0;
        setItemsList((prev) => [
            ...prev,
            { ...init, id: prevId }
        ])
    }

    const handleItemData = (e) => {
        const { name, value } = e.target;
        setItemData((prev) => ({
            ...prev,
            [name]: value
        }))
        setItemData((prev) => ({
            ...prev,
            subtotal: (prev.quantity) * (prev.unitprice)
        }))
    }

    const handleSaveItem = (id) => {
        setItemsList((prev) => prev.map((item) => item.id === id ? { ...itemData, id: id, saved: true } : item));
        setItemData(init);
        handleInvoice({ invoiceItems: itemsList })
    }

    const handleItemEdit = (id) => {
        const selectedItem = itemsList.find((item) => item.id === id);
        setItemsList((prev) => prev.map((item) => item.id === id ? { ...item, saved: false } : item));
        setItemData({ ...selectedItem, saved: false })
    }

    useEffect(() => {
        if (itemsList.length > 0) {

            calculateTotal();
        }
    }, [itemsList])

    return (
        <>
            {
                itemsList.length > 0 &&
                <>
                    <div className="grid grid-cols-6 gap-4 font-bold bg-gray-200 border border-gray-300">
                        <div className="col-span-2 p-2">
                            Name
                        </div>
                        <div className="p-2">
                            Quantity
                        </div>
                        <div className="p-2">
                            Unit Price
                        </div>
                        <div className="p-2">
                            Tax
                        </div>
                        <div className="p-2">
                            Sub Total
                        </div>
                    </div>
                    {
                        itemsList.map((item, index) => (
                            <div key={item.id} className="grid grid-cols-6 gap-4">
                                <div className="col-span-2 p-2">
                                    {
                                        item.saved ?
                                            <p>{item.name}</p> :
                                            <InputField name="name" value={itemData.name} onChange={handleItemData} />
                                    }
                                </div>
                                <div className="p-2">
                                    {
                                        item.saved ?
                                            <p>{item.quantity}</p> :
                                            <InputField name="quantity" value={itemData.quantity} onChange={handleItemData} />
                                    }
                                </div>
                                <div className="p-2">
                                    {
                                        item.saved ?
                                            <p>{item.unitprice}</p> :
                                            <InputField name="unitprice" value={itemData.unitprice} onChange={handleItemData} />
                                    }
                                </div>
                                <div className="p-2">
                                    Tax
                                </div>
                                <div className="p-2">
                                    {
                                        item.saved ?
                                            <p>₹{item.subtotal}</p> :
                                            <p>₹{itemData.subtotal}</p>
                                    }
                                </div>

                                <div className="col-span-4 p-2">
                                    {
                                        item.saved ?
                                            <p>{item.description}</p> :
                                            <InputField name="description" value={itemData.description} onChange={handleItemData} />
                                    }
                                </div>
                                <div className="p-2">
                                    {
                                        item.saved ?
                                            <button onClick={() => handleItemEdit(item.id)}>
                                                <Pen className="w-5 h-5" />
                                            </button>
                                            :
                                            <button onClick={() => handleSaveItem(item.id)}>
                                                <Check className="w-5 h-5" />
                                            </button>
                                    }
                                    <button>
                                        <Trash className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </>
            }
            <button onClick={handleAddNewItem}>Add New Item</button>


        </>
    )
}

export default InvoiceDetails