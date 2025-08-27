
const ViewCompany = ({ data }) => {
    const { id, companyname, firstname, lastname, taxnumber, addressline1, addressline2, city, state, country, pincode, email, phone, website } = data;
    return (
        <>
            <p>{taxnumber}</p>
            <h1>{companyname}</h1>
            <p>{firstname} {lastname}</p>
            <p>{addressline1}</p>
            <p>{addressline2}</p>
            <p>{city}, {state}</p>
            <p>{pincode}</p>
            <p>{country}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </>
    )
}

export default ViewCompany