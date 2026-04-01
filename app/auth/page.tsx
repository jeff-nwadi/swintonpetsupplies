'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dog, Mail, Lock, Eye, EyeOff, Apple } from 'lucide-react'
import LoginImage from "@/public/images/Welcome back.svg"


export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [showPassword, setShowPassword] = useState(false)

  const isSignIn = mode === 'signin'

  return (
    <main className="min-h-screen bg-white md:bg-[#F5F7FA] flex items-center justify-center p-0 md:p-12 lg:p-24">
      <div className="max-w-[1000px] w-full h-screen md:h-auto bg-white rounded-none md:rounded-[10px] overflow-hidden flex flex-col md:flex-row border-0 md:border md:border-gray-100/50">
        
        {/* Left Side: Image Panel */}
        <div className="hidden md:block w-1/2 relative">
          <Image 
            src={LoginImage}
            alt="Welcome to Swinton"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-[#272C47]">
              {isSignIn ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="text-[14px] md:text-[15px] text-[#8C95A3] font-medium leading-relaxed">
              {isSignIn 
                ? 'Sign in to your account to manage your orders and favorites.' 
                : 'Join the Swinton family today. Get exclusive tips, early access to new products, and more.'
              }
            </p>
          </div>

          {/* Social Auth */}
          <div className="space-y-4">
            <button className="w-full h-12 bg-white border border-gray-100 rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-bold text-[#272C47] hover:bg-gray-50 transition-all">
              {/* <Chrome size={18} className="text-[#4285F4]" /> */}
              Continue with Google
            </button>
            <button className="w-full h-12 bg-white border border-gray-100 rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-bold text-[#272C47] hover:bg-gray-50 transition-all">
              <Apple size={18} className="fill-[#000000]" />
              Continue with Apple
            </button>
          </div>

          {/* Separator */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[12px] uppercase font-bold tracking-widest">
              <span className="bg-white px-4 text-gray-300">Or continue with email</span>
            </div>
          </div>

          {/* Main Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full h-12 px-4 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Email address</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full h-12 px-4 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Password</label>
                {isSignIn && (
                  <Link href="/auth/forgot" className="text-[12px] font-bold text-gray-300 hover:text-[#272C47] transition-colors">
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="********" 
                  className="w-full h-12 px-4 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#272C47] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {isSignIn && (
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded-[4px] border border-gray-200 flex items-center justify-center transition-all group-hover:border-[#F5B971]">
                  <input type="checkbox" className="hidden" />
                  <div className="w-2.5 h-2.5 bg-[#F5B971] rounded-[2px] opacity-0 transition-opacity"></div>
                </div>
                <span className="text-[14px] text-gray-400 font-medium">Remember me</span>
              </label>
            )}

            <button className="w-full h-12 bg-[#F5B971] text-[#272C47] rounded-[10px] font-bold text-[15px] hover:opacity-90 transition-all shadow-lg shadow-[#F5B971]/10">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Button */}
          <div className="text-center pt-2">
            <p className="text-[14px] text-[#8C95A3] font-medium">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setMode(isSignIn ? 'signup' : 'signin')}
                className="ml-2 text-[#272C47] font-bold hover:text-[#F5B971] transition-colors"
              >
                {isSignIn ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
