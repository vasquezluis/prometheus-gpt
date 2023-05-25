import axios from 'axios'

const messagesAPI = axios.create({
  baseURL: 'http://localhost:3000/api/v1/messages'
})

export const getMessages = async () => {
  const response = await messagesAPI.get('/')

  return response.data.body
}

export const createMessages = async (messages, userId) => {
  console.log('messages', messages)
  const response = await messagesAPI.post('/', { messages })

  return response.data
}
