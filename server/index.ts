import { PORT } from './config/config'
import app from './app'

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
