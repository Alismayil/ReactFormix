import React, { useEffect, useState } from 'react'
import './_formik.scss'
import {ErrorMessage, Formik, Form, Field} from "formik"
import {object , string } from "yup"


const SignUpSchema=object().shape({
    firstName:string().matches(/^[a-zA-Z]/,"Adınızı düzgün daxil edin").min(3,"Minimum 3 rəqəm ola bilər").max(15,"Maximum 15 rəqəm ola bilər").required("Adınız daxil edin"),
    lastName:string().matches(/^[a-zA-Z]/,"Soyadınızı düzgün daxil edin").min(5,"Minimum 6 rəqəm  ola bilər").max(15,"Maximum 15 rəqəm ola bilər").required("Soyadınızı daxil edin"),
    password:string().matches(/^[a-zA-Z.0-9]/,"Rəqəmləri düzgün daxil et").min(4,"Minimum 4 reqem ola bilər").max(16,"Maximum 16 rəqəm ola bilər").required("Password daxil edin"),
    email:string().min(5,"Minimum 5 reqem ola bilər").max(17,"Maximum 17 rəqəm ola bilər").required("Email daxil edin")
})



const FormikYupProject = () => {
const [local, setLocal] = useState(localStorage.getItem("local") ? JSON.parse(localStorage.getItem("local") ): [])

useEffect(() => {
 localStorage.setItem("local",JSON.stringify(local))
}, [local])

function handleSubmit(values) {
    setLocal(values)
    console.log(values);
}

  return (
    <>
    <Formik
    initialValues={{firstName:"", lastName:"",  password:"", email:""}}
    validationSchema={SignUpSchema}
    onSubmit={(values)=>handleSubmit(values)}
    >
    {({ values })=>(
        <Form >
        <div className='FormValudation'>
            <h1>SIGN UP</h1>
        <div className='box'>
        <label htmlFor="">First name</label>
        <Field type='text' name="firstName" placeholder='First name (English)' />
        <span><ErrorMessage name="firstName" /></span>

        <label htmlFor="">Last name</label>
        <Field type='text' name="lastName" placeholder='Last name (English)' />
        <span><ErrorMessage name="lastName" /></span>

        <label htmlFor="">Email address</label>
        <Field type='email' name="email" placeholder='Enter email (English)' />
        <span><ErrorMessage name="email" /></span>

        <label htmlFor="">Password</label>
        <Field type='password' name="password" placeholder='Enter password (English)' />
        <span><ErrorMessage name="password" /></span>

        <button type='submit' disabled={Object.values(values).some(x => x === "")} >Sign Up</button>
        <p className='remember'>Already registrerd <a href="">Sign in?</a></p>
        </div>
        </div>
    </Form>
    )}
    
    </Formik>
    </>
  )
}

export default FormikYupProject