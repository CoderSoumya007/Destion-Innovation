import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

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