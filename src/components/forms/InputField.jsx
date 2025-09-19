
const InputField = ({ type, name, placeholder, readOnly, label, value, className, onChange, onBlur, id, required }) => {

    return (
        <div className="mb-3">
            {
                label &&
                <label htmlFor={id} className="font-semibold mb-3 block">{label} {required && <span>*</span>}</label>
            }
            <input type={type ? type : "text"} name={name} value={value || ""} placeholder={placeholder} id={id} onChange={onChange} required={required} readOnly={readOnly} onBlur={onBlur} className={`appearance-none border border-slate-400 bg-white text-slate-950 w-full h-10 p-3 focus:outline-none ${className || ""}`} />
        </div>
    )
}

export default InputField