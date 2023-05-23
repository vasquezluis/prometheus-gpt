import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' />
      </form>
      <Link to='/chat'>
        Chat
      </Link>
    </div>
  )
}

export default Form
