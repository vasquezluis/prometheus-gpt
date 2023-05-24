import './textarea.css'
import { useState, useEffect } from 'react'
import { fetchChatMessage } from '../../services/chatgpt'
import { TbArrowBigRightFilled } from 'react-icons/tb'

const Chat = () => {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState(null)
  const [previousChat, setPreviousChat] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)

  // -> create new chat removing all data in page
  const createNewChat = () => {
    setMessage(null)
    setValue('')
    setCurrentTitle(null)
  }

  // -> select a chat from previous chat list and show the messages
  const handlePreviousChats = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue('')
  }

  // -> fetch the message from the api usgin the value
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('value: ', value)
      const response = await fetchChatMessage(value)
      setMessage(response)
      console.log('response: ', response)
    } catch (error) {
      console.log('error in submit: ', error.message)
    }
  }

  // useEffect when message is received or when a new chat is created
  useEffect(() => {
    // the currentTitle is null, a value exists and a message exists, set the currentTitle
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }
    // if the currentTitle exists, a value exists and a message exists, set the previousChat
    if (currentTitle && value && message) {
      // get al values of previousChat and add the new values
      const updatedChat = [
        ...previousChat,
        { title: currentTitle, role: 'user', content: value },
        { title: currentTitle, role: 'chat', content: message }
      ]

      setPreviousChat(updatedChat)

      // save updatedChat in localStorage
      localStorage.setItem('chatMessages', JSON.stringify(updatedChat))
    }
  }, [message, currentTitle, value])

  // Load previous chat messages from local storage on component mount
  useEffect(() => {
    const storedChatMessages = localStorage.getItem('chatMessages')
    if (storedChatMessages) {
      setPreviousChat(JSON.parse(storedChatMessages))
    }
  }, [])

  // filter the previousChat to show the current title in sidebar
  // by clicking the history, the messages of that current title will be shown

  // currentChat is an array of objects with the same title
  const currentChat = previousChat.filter(
    (previousChat) => previousChat.title === currentTitle
  )

  // filter the title of all chats with the same title, and get just one
  const uniqueTitles = Array.from(
    new Set(previousChat.map((previousChat) => previousChat.title))
  )

  return (
    <div className='flex h-screen max-h-screen py-5 px-28 bg-gray-200'>

      {/* Sidebar */}
      <aside className='w-1/6 bg-white flex flex-col justify-between rounded-lg p-3'>
        <div className='flex justify-center'>
          <button
            className='border bg-gray-500 p-2 m-2 w-40 h-20 hover:bg-gray-600 rounded-lg'
            onClick={createNewChat}
          ><span className='font-bold text-white'>+ New Chat</span>
          </button>
        </div>
        {/* history */}
        <ul className='p-1 m-1 h-full'>
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li
              className='hover:bg-gray-500 hover:text-gray-50 list-none p-3 my-3 cursor-pointer text-gray-500 rounded-lg'
              key={index}
              onClick={() => handlePreviousChats(uniqueTitle)}
            >
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav className='p-2 m-2'>
          <p className='text-center font-bold text-gray-300'>PrometheusGPT</p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className='flex flex-col flex-1 px-3'>
        {/* Top Bar */}
        <div className='bg-gray-200 h-12 mb-4 flex justify-end'>
          <button className='mx-2'>Profile</button>
          <button className='mx-2'>settings</button>
        </div>

        {/* Scrollable Section for Chats */}
        <div className='flex-1 bg-gray-200 overflow-y-auto mb-4'>
          {!currentTitle && <h1 className='text-center text-gray-300'>PrometheusGPT</h1>}
          <ul className='w-full p-0'>
            {/* map all messages with the same title */}
            {currentChat?.map((chatMessage, index) => (
              <li
                key={index}
                className='flex p-6 my-0 mx-0 w-full bg-gray-700 text-gray-800 text-base text-left odd:bg-gray-300 even:bg-gray-400'
              >
                <p className='min-w-[100px]'>{chatMessage.role}</p>
                <p>{chatMessage.content}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        {/* <div className='bg-gray-300 h-12'> */}
        <footer className='relative'>
          <form onSubmit={handleSubmit}>
            <textarea
              // ref={textareaRef}
              className='w-full border-none font-[16px] bg-white py-2 px-3 shadow-lg text-black outline-none rounded-lg'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type='text'
              placeholder='Haz una consulta...'
            />
            <div
              className='absolute flex items-center bottom-5 right-10 cursor-pointer bg-gray-300 text-black rounded-lg'
              onClick={handleSubmit}
            >
              <div className='text-black text-2xl p-2 cursor-pointer'>
                <TbArrowBigRightFilled className='' />
              </div>
              <span className='mr-2'>Enviar</span>
            </div>
          </form>
        </footer>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Chat
