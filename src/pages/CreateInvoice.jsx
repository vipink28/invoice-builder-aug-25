import { useContext } from "react";
import { MainContext } from "../main";

const CreateInvoice = () => {
    const data = useContext(MainContext);
    return (
        <div>
            <h2>{data}</h2>
            CreateInvoice
        </div>
    )
}

export default CreateInvoice