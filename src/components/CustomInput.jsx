import { useField } from 'formik'

function CustomInput ({ label, ...props }) {
  const [field, meta] = useField(props)

  return (
    <div className='flex flex-col justify-start w-full'>
      <label
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
        htmlFor=''
      >{label}
      </label>
      <input
        {...field}
        {...props}
        className={` 
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        ${meta.touched && meta.error ? 'input-error' : ''}`}
      />
      {meta.touched && meta.error && <div className='text-red-500'>{meta.error}</div>}
    </div>
  )
}

export default CustomInput
