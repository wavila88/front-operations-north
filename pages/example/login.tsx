import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Label, Input, Button, WindmillContext } from '@roketid/windmill-react-ui'
import { useDispatch } from 'react-redux';
import { startSession } from 'store/actions/securityActions'
import { LoginForm } from 'utils/types';

function LoginPage() {
  const dispatch = useDispatch();
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/login-office-dark.jpeg' : '/assets/img/login-office.jpeg'
  const [loginForm, setLoginForm] = useState<LoginForm>({ userName: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')


  const login = async () => {
    const response = await dispatch(startSession(loginForm) as any);
    setErrorMessage(response)
  }
  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='relative h-32 md:h-auto md:w-1/2'>
            <Image
              aria-hidden='true'
              className='hidden object-cover w-full h-full'
              src={imgSource}
              alt='Office'
              layout='fill'
            />
          </div>
          <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Login
              </h1>
              <Label>
                <span>userName</span>
                <Input
                  className='mt-1'
                  id='username'
                  placeholder='userName'
                  onChange={(e) => setLoginForm({ ...loginForm, userName: e.target.value })}
                />
              </Label>

              <Label className='mt-4'>
                <span>Password</span>
                <Input
                  className='mt-1'
                  id='password'
                  type='password'
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder='***************'
                />
              </Label>


              <Button className='mt-4' onClick={() => login()}>
                Log in
              </Button>
              <p className='text-sm font-medium text-purple-600 dark:text-red-400 hover:underline'>{errorMessage}</p>
              <hr className='my-8' />
              <p className='mt-4'>
                <Link href=''>
                  <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    Forgot your password?
                  </a>
                </Link>
              </p>
              <p className='mt-1'>
                <Link href=''>
                  <a className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    Create account
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
