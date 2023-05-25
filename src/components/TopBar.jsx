import { IoMdSettings } from 'react-icons/io'

const Topbar = () => {
  return (
    <div className='bg-gray-200 dark:bg-[#343541] h-12 mb-4 flex justify-end items-center'>
      <button className='mx-2 dark:text-white'>Ayuda</button>
      <span className='dark:text-white'>|</span>
      <IoMdSettings className='inline-block cursor-pointer mx-2 w-5 h-5 dark:text-white' title='Configuracion' />
    </div>
  )
}

export default Topbar
