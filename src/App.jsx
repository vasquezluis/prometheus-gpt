import Chat from './pages/private/Chat'

// import './styles.css'
import { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

const fetchChatMessage = async (value) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      message: `${value}`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch('http://localhost:4000/api/v1/chatgpt/chat', options)
    const data = await response.json()

    return data?.body
  } catch (error) {
    console.error(error.message)
  }
}

function ChatGPT () {
  const [input, setInput] = useState('')
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

  // -> select a chat from previous chat list
  const handlePreviousChats = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetchChatMessage(value)
      console.log('response', response)

      setMessage(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleTextArea = async (message) => {
    try {
      console.log(message)
      setMessage(message)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }
    if (currentTitle && value && message) {
      setPreviousChat(prevChats => (
        [...prevChats,
          { title: currentTitle, role: 'user', content: value },
          { title: currentTitle, role: 'chat', content: message }
        ]
      ))
    }
  }, [message, currentTitle])

  // TODO revisar
  const currentChat = previousChat.filter((previousChat) => previousChat.title === currentTitle)
  const uniqueTitles = Array.from(new Set(previousChat.map(previousChat => previousChat.title)))

  return (
  // <div className='bg-[#343541] relative lg:flex'>

  //   {/* desktop nav */}
  //   <section className='bg-[#202123] h-[100vh] w-[244px] sm:flex hidden flex-col justify-between'>
  //     <button className='border bg-gray-500 p-2 m-2 hover:bg-gray-600' onClick={createNewChat}>+ New Chat</button>
  //     <ul className='p-2 m-2 h-full'>
  //       {uniqueTitles?.map((uniqueTitle, index) => <li className='hover:bg-gray-800 list-none p-3 my-3 cursor-pointer text-gray-200' key={index} onClick={() => handlePreviousChats(uniqueTitle)}>{uniqueTitle}</li>)}
  //     </ul>
  //     <nav className='border-t-2 p-2 m-2'>
  //       <p className='text-center'>ChatGPT clone</p>
  //     </nav>
  //   </section>

  //   {/* mobile nav */}
  //   <div className='sm:hidden flex relative'>
  //     <button>Prev</button>
  //     <section className='bg-[#202123] h-[100vh] w-[244px] sm:hidden flex flex-col relative justify-between'>
  //       <button className='border bg-gray-500 p-2 m-2 hover:bg-gray-600' onClick={createNewChat}>+ New Chat</button>
  //       <ul className='p-2 m-2 h-full'>
  //         {uniqueTitles?.map((uniqueTitle, index) => <li className='hover:bg-gray-800 list-none p-3 my-3 cursor-pointer text-gray-200' key={index} onClick={() => handlePreviousChats(uniqueTitle)}>{uniqueTitle}</li>)}
  //       </ul>
  //       <nav className='border-t-2 p-2 m-2'>
  //         <p className='text-center'>ChatGPT clone</p>
  //       </nav>
  //     </section>
  //   </div>

  //   <div className='w-full h-[100vh] flex justify-center'>
  //     <div className='h-[100vh] w-full lg:w-[75%] flex flex-col justify-between items-center'>

  //       {/* chat section */}
  //       {!currentTitle && <h1>PrometheusGPT</h1>}
  //       <ul className='overflow-y-scroll overflow-x-hidden w-full p-0'>
  //         {currentChat?.map((chatMessage, index) => (
  //           <li
  //             className='flex p-6 my-0 mx-0 w-full bg-gray-700 text-gray-100 text-base text-left odd:bg-[#444654] even:bg-[#353740]'
  //             key={index}
  //           >
  //             <p className='min-w-[100px]'>{chatMessage.role}</p>
  //             <p>{chatMessage.content}</p>
  //           </li>
  //         ))}
  //       </ul>

  //       {/* form section */}
  //       <div className='w-full flex flex-col justify-center items-center'>
  //         <div className='relative w-full max-w-[650px]'>
  //           {/* <TextareaAutosize
  //             rows={2}
  //             onKeyDown={async (e) => {
  //               if (e.key === 'Enter' && !e.shiftKey) {
  //                 e.preventDefault()

  //                 try {
  //                   const response = await fetchChatMessage(input)

  //                   handleTextArea(response)
  //                 } catch (error) {
  //                   console.log(error.message)
  //                 }
  //               }
  //             }}
  //             maxRows={4}
  //             autoFocus
  //             value={input}
  //             onChange={(e) => setInput(e.target.value)}
  //             placeholder='todavia no funciona...'
  //             className='w-full border-none font-[16px] bg-[#ffffff0d] py-2 px-3 shadow-lg text-white outline-none'
  //           /> */}
  //           <form onSubmit={handleSubmit}>
  //             <textarea className='w-full border-none font-[16px] bg-[#ffffff0d] py-2 px-3 shadow-lg text-white outline-none' value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='funciona...' />
  //             <button className='absolute bottom-3 right-2 cursor-pointer text-white' id='submit'> ▶ </button>
  //           </form>
  //         </div>
  //         <p className='text-gray-500'>Chatbot de prometheus!</p>
  //       </div>
  //     </div>
  //   </div>
  // </div>

    <Chat />
  )
}

export default ChatGPT
