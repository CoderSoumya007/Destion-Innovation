import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useNavigate } from 'react-router-dom'
const LoginForm = ({ onSwitchToSignup }) => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
  
    // Yup validation schema
    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Password is required')
    })
  
    return (
      //Formik form validation
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // handle form submission
          console.log(values)
          const username="Soumya Ranjan Panda"; //mick username
  
          await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
          navigate('/dashboard',{state:{username,email:values.email}});
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Field
                as={Input}
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" /> : <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />}
              </button>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">Forgot your password?</a>
              </div>
            </div>
            <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isSubmitting}>
              Sign in
            </Button>
            <p className="mt-2 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <button onClick={onSwitchToSignup} className="font-medium text-indigo-400 hover:text-indigo-300">Sign up</button>
            </p>
          </Form>
        )}
      </Formik>
    )
  }

  export default LoginForm;