import axios from 'axios'

const messagesAPI = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

export const getMessages = async () => {
  const response = await messagesAPI.get('/messages')

  return response.data.body
}

export const getMessagesByUserId = async (userId) => {
  try {
    // endpont to retreive data from database for the current user
    const response = await messagesAPI.get(`/users/${userId}/messages`)

    return response.data.body
  } catch (error) {
    console.log(error.message)
  }
}

export const createMessages = async (messages, userId) => {
  try {
    // endpoint to create data in database for every message
    const response = await messagesAPI.post('/messages', { messages, userId })

    return response.data
  } catch (error) {
    console.log(error.message)
  }
}
