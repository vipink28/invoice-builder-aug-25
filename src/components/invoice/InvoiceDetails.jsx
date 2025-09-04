import { Check, Trash } from "lucide-react";
import { useState } from "react";
import InputField from "../forms/InputField";

const InvoiceDetails = () => {
    const init = { id: 0, name: "", quantity: 0, unitprice: 0, taxname: "", taxvalue: 0, subtotal: 0, description: "" }
    const [itemsList, setItemsList] = useState([]);
    const [itemData, setItemData] = useState(init);

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
        console.log(id)
        setItemsList([])
    }

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
                                    <InputField name="name" value={itemData.name} onChange={handleItemData} />
                                </div>
                                <div className="p-2">
                                    <InputField name="quantity" value={itemData.quantity} onChange={handleItemData} />
                                </div>
                                <div className="p-2">
                                    <InputField name="unitprice" value={itemData.unitprice} onChange={handleItemData} />
                                </div>
                                <div className="p-2">
                                    Tax
                                </div>
                                <div className="p-2">
                                    ₹{itemData.subtotal}
                                </div>

                                <div className="col-span-4 p-2">
                                    <InputField name="description" value={itemData.description} onChange={handleItemData} />
                                </div>
                                <div className="p-2">
                                    <button onClick={() => handleSaveItem(item.id)}>
                                        <Check className="w-5 h-5" />
                                    </button>
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