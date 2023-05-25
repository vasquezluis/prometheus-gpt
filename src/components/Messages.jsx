/* eslint-disable react/prop-types */
const Messages = ({ currentTitle, currentChat }) => {
  return (
    <div className='flex-1 bg-gray-200 dark:bg-[#343541] overflow-y-auto mb-4'>
      {!currentTitle && <h1 className='text-center text-gray-600 dark:text-gray-300'>PrometheusGPT</h1>}
      <ul className='w-full p-0'>
        {/* map all messages with the same title */}
        {currentChat?.map((chatMessage, index) => (
          <li
            key={index}
            className='flex p-6 my-0 mx-0 w-full dark:text-gray-300 text-base text-left odd:bg-gray-300 even:bg-gray-400 dark:odd:bg-[#444654] dark:even:bg-[#353740]'
          >
            <p className='min-w-[100px]'>{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Messages
