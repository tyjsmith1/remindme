function InputField({id, type, label, placeholder, value, onChange}) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className='block text-sm font-medium'>{label}</label>
            <input
                type={type}
                id={id}
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField