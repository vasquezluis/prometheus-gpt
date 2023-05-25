// * FROMIK
import { Formik, Form } from 'formik'
import { loginSchema } from '../schemas/loginSchema'
import CustomInput from './CustomInput'

// * REACT-QUERY
import { useMutation } from 'react-query'
import { authFunction } from '../services/auth'

// * REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  // React-query mutation to login
  // Uses auth Function in services auth.js
  const loginMutation = useMutation({
    mutationFn: authFunction,
    onSuccess: (data) => {
      console.log(data)
      navigate('/chat')
    },
    onError: (error) => {
      console.log(error.message)
    }
  })

  // onSubmit handler to use login mutation and formik for data
  // values and actions are formik props
  const onSubmit = async (values, actions) => {
    try {
      loginMutation.mutate({ email: values.email, password: values.password })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          className='w-[400px] bg-slate-800 p-5 rounded-md'
        >

          <h1 className='text-2xl font-bold mb-3 text-white text-center'>Login</h1>

          <CustomInput
            label='Correo'
            name='email'
            type='text'
            placeholder='Introduce tu correo'
          />

          <CustomInput
            label='Contraseña'
            name='password'
            type='password'
            placeholder='Introduce tu contraseña'
          />

          <button disabled={isSubmitting} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4'>
            Iniciar sesión
          </button>

        </Form>
      )}

    </Formik>
  )
}

export default LoginForm
