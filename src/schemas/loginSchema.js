import * as yup from 'yup'

// the email must belong to the company
// -> toponmind.com
// -> prometheus.com
// -> easygo.com

const regex = /^.*@(prometheus|toponmind|easygo)\.com$/

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(regex, { message: 'El correo no pertenece a nuestra empresa 💔' })
    .required('El correo es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
})
