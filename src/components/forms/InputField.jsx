
const InputField = ({ type, name, placeholder, label, className, onChange, onBlur, id, required }) => {
    return (
        <div className="mb-3">
            {
                label &&
                <label htmlFor={id} className="font-semibold mb-3 block">{label} {required && <span>*</span>}</label>
            }
            <input type={type ? type : "text"} name={name} placeholder={placeholder} id={id} onChange={onChange} required={required} onBlur={onBlur} className="appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 p-3 focus:outline-none" />
        </div>
    )
}

export default InputField