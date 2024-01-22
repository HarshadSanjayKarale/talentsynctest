import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-40'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:item-center gap-5">
        {/* left */}
        <div className="flex-1 mt-40">
        <Link
        to="/"
        className="whitespace-nowrap font-bold dark:text-white text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Harshad's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5 font-bold'>
        This is the demo Project You can Sign UP with Email and Password or with Google.
      </p>
          
        </div>
        {/* right */}
        <div className="flex-1 ml-10">
          <form className='flex flex-col gap-4'>
            <div className="">
              <Label value='Your Username' className='text-2xl'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div className="">
              <Label value='Your Email' className='text-2xl'/>
              <TextInput type='text' placeholder='name@company.com' id='email'/>
            </div>
            <div className="">
              <Label value='Your Password'className='text-2xl'/>
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' className='rounded-lg text-xl px-4.5 py-1.6 text-center'>
              SignUp
            </Button>
          </form>
          <div className="flex gap-2 text-xl mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-700'>
              SIGN IN
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
