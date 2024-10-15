import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useNavigate } from 'react-router-dom'

const techTerms = [
  'Digital Transformation', 'Software Development', 'FinTech', 'Healthcare Tech',
  'Consumer Tech', 'Financial Services', 'Cloud Computing', 'AI', 'Machine Learning',
  'Blockchain', 'IoT', 'Big Data', 'DevOps', 'Agile', 'Cybersecurity'
]

// FloatingTerms component for floating tech words
const FloatingTerms = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techTerms.map((term, index) => (
        <div
          key={index}
          className={`absolute text-gray-600 opacity-20 select-none animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 15 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * (1.5 - 0.8) + 0.8}rem`
          }}
        >
          {term}
        </div>
      ))}
    </div>
  )
}


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

const SignupForm = ({ onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
  })

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);

        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
        navigate('/dashboard',{state:{username:values.username,email:values.email}});
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div>
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <Field
              as={Input}
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
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
          <div className="relative">
            <Label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </Label>
            <Field
              as={Input}
              id="confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" /> : <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />}
            </button>
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isSubmitting}>
            Sign up
          </Button>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <button onClick={onSwitchToLogin} className="font-medium text-indigo-400 hover:text-indigo-300">Sign in</button>
          </p>
        </Form>
      )}
    </Formik>
  )
}

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
      <FloatingTerms />
      <div className="w-full max-w-md space-y-8 rounded-xl bg-gray-900 p-8 shadow-2xl relative z-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            {isLogin
              ? "Access your digital transformation journey"
              : "Join us in shaping the future of digital transformation"}
          </p>
        </div>
        {isLogin ? (
          <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  )
}