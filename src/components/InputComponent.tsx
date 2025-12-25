import type { InputComponentProps } from '../types'

const InputComponent = ({ label, type, required, name, placeholder, options, value, handleChange, error, touched }: InputComponentProps) => {

  // Radio button variant
  if (type === "radio") {
    return (
      <div className='relative w-full'>
        <label className="bg-white px-1 text-xs font-medium text-purple-600">
          {label}
          {required && <span className='text-red-500'>*</span>}
        </label>
        <div className='flex items-center gap-4 mt-2'>
          {options?.map((option) => (
            <div key={option.value} className='flex items-center gap-2'>
              <input
                type="radio"
                name={name}
                value={option?.value}
                id={`${name}-${option?.value}`}
                onChange={handleChange}
                checked={value === option.value}
                className='w-4 h-4 accent-purple-600'
              />
              <label htmlFor={`${name}-${option?.value}`} className='cursor-pointer'>
                {option?.label}
              </label>
            </div>
          ))}
        </div>
        {error && touched && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
    )
  }

  // Select/Dropdown variant
  if (type === "select") {
    return (
      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
          {label}
          {required && <span className='text-red-500'>*</span>}
        </label>
        <select
          name={name}
          value={String(value)}
          onChange={handleChange}
          // required={required}
          className="w-full h-11.5 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
        >
          <option value="">Select an option</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && touched && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
    )
  }

  // Textarea variant
  if (type === "textarea") {
    return (
      <div className="relative w-full">
        <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
          {label}
          {required && <span className='text-red-500'>*</span>}
        </label>
        <textarea
          name={name}
          placeholder={placeholder}
          value={String(value)}
          onChange={handleChange as any}
          required={required}
          rows={4}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
        />
        {error && touched && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
    )
  }

  // Default input variant (text, email, password)
  return (
    <div className="relative w-full">
      <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-600">
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className="w-full h-11.5 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
        // required={required}
        onChange={handleChange}
        value={String(value)}
      />
      {error && touched && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default InputComponent