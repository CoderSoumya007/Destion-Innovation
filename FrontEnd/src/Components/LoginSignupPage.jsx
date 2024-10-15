import React, { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const techTerms = [
  'Digital Transformation', 'Software Development', 'FinTech', 'Healthcare Tech',
  'Consumer Tech', 'Financial Services', 'Cloud Computing', 'AI', 'Machine Learning',
  'Blockchain', 'IoT', 'Big Data', 'DevOps', 'Agile', 'Cybersecurity'
]

const FloatingTerms = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techTerms.map((term, index) => (
        <div
          key={index}
          className="absolute text-gray-600 opacity-20 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
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

  return (
    <form className="space-y-6" action="#" method="POST">
      <div>
        <Label htmlFor="email" className="sr-only">
          Email address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
          placeholder="Email address"
        />
      </div>
      <div className="relative">
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
          placeholder="Password"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
            Remember me
          </Label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
            Forgot your password?
          </a>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in
      </Button>
      <p className="mt-2 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <button onClick={onSwitchToSignup} className="font-medium text-indigo-400 hover:text-indigo-300">
          Sign up
        </button>
      </p>
    </form>
  )
}

const SignupForm = ({ onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <form className="space-y-6" action="#" method="POST">
      <div>
        <Label htmlFor="username" className="sr-only">
          Username
        </Label>
        <Input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
          placeholder="Username"
        />
      </div>
      <div>
        <Label htmlFor="email" className="sr-only">
          Email address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
          placeholder="Email address"
        />
      </div>
      <div className="relative">
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
          placeholder="Password"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="relative">
        <Label htmlFor="confirm-password" className="sr-only">
          Confirm Password
        </Label>
        <Input
          id="confirm-password"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          autoComplete="new-password"
          required
          className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
          placeholder="Confirm Password"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
        </button>
      </div>
      <Button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign up
      </Button>
      <p className="mt-2 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="font-medium text-indigo-400 hover:text-indigo-300">
          Sign in
        </button>
      </p>
    </form>
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