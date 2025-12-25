import { useState } from 'react'
import FormComponent from '../components/FormComponent'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { signUpValidationSchema } from '../constants/validationSchemas';
import { useAuth } from '../context/AuthContext';
import type { SignUpFormValues } from '../types'

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
      isAgency: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values: SignUpFormValues) => {
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
      name: "full_name",
      label: "Full Name",
      placeholder: "Enter Full Name",
      required: true,
      type: 'text',
      value: formik?.values?.full_name,
      error: formik?.errors?.full_name,
      touched: formik?.touched?.full_name,

    },
    {
      name: "phone_number",
      label: "Phone number",
      placeholder: "Enter Full Phone Number",
      required: true,
      type: 'text',
      value: formik?.values?.phone_number,
      error: formik?.errors?.phone_number,
      touched: formik?.touched?.phone_number,
    },
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
    },
    {
      name: "isAgency",
      label: "Are you an Agency?",
      placeholder: "",
      required: true,
      type: 'radio',
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      value: formik?.values?.isAgency,
      error: formik?.errors?.isAgency,
      touched: formik?.touched?.isAgency,
    }
  ]

  return (
    <FormComponent
      fields={fields}
      heading='Create your PopX account'
      subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
      btnTitle='Create Account'
      formik={formik}
      isLoading={isLoading}
    />
  )
}

export default SignUpPage