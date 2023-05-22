export const fetchChatMessage = async (value) => {
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
    console.error('fetch data error: ', error.message)
  }
}
