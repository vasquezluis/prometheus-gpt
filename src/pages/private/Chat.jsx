import './textArea.css'

import { useState, useEffect } from 'react'
import { fetchChatMessage } from '../../services/chatgpt'
import { getMessages, createMessages } from '../../services/messages'

// * components
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/Topbar'
import Messages from '../../components/Messages'
import UserInput from '../../components/UserInput'

const Chat = () => {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState(null)
  const [previousChat, setPreviousChat] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

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
        { title: currentTitle, role: 'bot', content: message }
      ]

      setPreviousChat(updatedChat)

      // save user-bot data in database
      const data = [
        { title: currentTitle, role: 'user', content: value },
        { title: currentTitle, role: 'bot', content: message }
      ]
      createMessages(data)
    }
  }, [message, currentTitle])

  // load previous chat messages from database on component mount
  useEffect(() => {
    const getPreviousChat = async () => {
      const response = await getMessages()
      if (response) {
        setPreviousChat(response)
      }
    }
    getPreviousChat()
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
    <div className={darkMode ? 'dark' : ''}>
      <div className='flex h-screen max-h-screen py-5 px-28 bg-gray-200 dark:bg-[#343541]'>

        {/* Sidebar */}
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          createNewChat={createNewChat}
          uniqueTitles={uniqueTitles}
          handlePreviousChats={handlePreviousChats}
        />

        {/* Main Content */}
        <div className='flex flex-col flex-1 px-3'>

          {/* Top Bar */}
          <TopBar />

          {/* Scrollable Section for Chats */}
          <Messages
            currentTitle={currentTitle}
            currentChat={currentChat}
          />

          {/* Footer */}
          <footer className='relative'>
            <UserInput
              handleSubmit={handleSubmit}
              value={value}
              setValue={setValue}
            />
          </footer>

        </div>

      </div>
    </div>
  )
}

export default Chat
