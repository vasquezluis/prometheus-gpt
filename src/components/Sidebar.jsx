/* eslint-disable react/prop-types */
import { GoPlus } from 'react-icons/go'
import { BsFillMoonStarsFill, BsFillSunFill, BsLayoutTextSidebarReverse, BsLayoutTextSidebar } from 'react-icons/bs'

const Sidebar = ({ darkMode, setDarkMode, createNewChat, uniqueTitles, handlePreviousChats }) => {
  return (
    <aside className='w-1/6 bg-white dark:bg-[#202123] flex flex-col justify-between rounded-lg p-2'>

      {/* Theme config section */}
      <div className='flex justify-center py-4'>
        <BsFillSunFill className='w-6 h-6 text-yellow-500' />
        {darkMode
          ? (
            <BsLayoutTextSidebar
              className='w-6 h-6 text-black dark:text-white mx-4 cursor-pointer'
              onClick={() => setDarkMode(!darkMode)}
            />)
          : (
            <BsLayoutTextSidebarReverse
              className='w-6 h-6 text-black dark:text-white mx-4 cursor-pointer'
              onClick={() => setDarkMode(!darkMode)}
            />
            )}
        <BsFillMoonStarsFill className='w-6 h-6 text-blue-500' />
      </div>

      {/* New chats sections */}
      <div className='flex justify-center pt-4'>
        <button
          className='border bg-gray-500 dark:bg-[#202123] dark:hover:bg-[#353740] p-2 m-2 w-40 h-20 hover:bg-gray-600 rounded-lg'
          onClick={createNewChat}
        >
          <span className='font-bold text-gray-300'>
            <GoPlus className='inline-block text-2xl' />
            <div className='text-xl'>
              Nuevo chat
            </div>
          </span>
        </button>
      </div>

      {/* history */}
      <ul className='overflow-y-auto my-1 h-full'>
        {uniqueTitles?.map((uniqueTitle, index) => (
          <li
            className='hover:bg-gray-400 dark:hover:bg-[#353740] hover:text-gray-50 list-none p-3 my-3 cursor-pointer text-gray-500 rounded-lg'
            key={index}
            onClick={() => handlePreviousChats(uniqueTitle)}
          >
            {uniqueTitle}
          </li>
        ))}
      </ul>
      {/* <div className='overflow-y-auto max-h-full bg-yellow-400'>
        <ul className='p-1 m-1'>
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li
              className='hover:bg-gray-400 dark:hover:bg-[#353740] hover:text-gray-50 list-none p-3 my-3 cursor-pointer text-gray-500 rounded-lg'
              key={index}
              onClick={() => handlePreviousChats(uniqueTitle)}
            >
              {uniqueTitle}
            </li>
          ))}
        </ul>
      </div> */}
      <nav className='p-2 m-2'>
        <p className='text-center font-bold text-gray-300'>PrometheusGPT</p>
      </nav>
    </aside>
  )
}

export default Sidebar
