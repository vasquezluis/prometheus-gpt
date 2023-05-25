/* eslint-disable react/prop-types */
import { TbArrowBigRightFilled } from 'react-icons/tb'

const UserInput = ({ handleSubmit, value, setValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className='w-full border-none font-[16px] bg-white dark:bg-[#ffffff0d] py-2 px-3 shadow-lg text-black dark:text-gray-300 outline-none rounded-lg'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='Haz una consulta...'
      />
      <div
        className='absolute flex items-center bottom-5 right-10 cursor-pointer bg-gray-300 text-black hover:bg-gray-200 rounded-lg'
        onClick={handleSubmit}
      >
        <div className='text-black text-2xl p-2 cursor-pointer'>
          <TbArrowBigRightFilled className='' />
        </div>
        <span className='mr-2'>Enviar</span>
      </div>
    </form>
  )
}

export default UserInput
