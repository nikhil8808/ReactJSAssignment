import { useState } from 'react'
import FormComponent from '../components/FormComponent'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { signInValidationSchema } from '../constants/validationSchemas';
import { useAuth } from '../context/AuthContext';
import type { SignInFormValues } from '../types'

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values: SignInFormValues) => {
      setIsLoading(true)
      setTimeout(() => {
        setUser(values)
        setIsLoading(false)
        navigate('/account-settings')
      }, 1000)
    },
  });

  const fields: any[] = [
    {
      name: "email",
      label: "Email Address",
      placeholder: "Enter email address",
      required: true,
      type: 'email',
      value: formik?.values?.email,
      error: formik?.errors?.email,
      touched: formik?.touched?.email,
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter  password",
      required: true,
      type: 'password',
      value: formik?.values?.password,
      error: formik?.errors?.password,
      touched: formik?.touched?.password,
    }
  ]

  return (
    <FormComponent
      fields={fields}
      heading='Signin to your PopX account'
      subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
      btnTitle='Login'
      formik={formik}
      isLoading={isLoading}
    />
  )
}

export default SignInPage