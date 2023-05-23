import * as yup from 'yup'

const regex = /^[^0-9]*$/

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .matches(regex, { message: 'El usuario no debe contener caracters numericos' })
    .required('El usuario es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
})
