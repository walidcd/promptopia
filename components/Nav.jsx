"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn ,signOut ,useSession,getProviders} from 'next-auth/react'
import { useEffect,useState } from 'react'
const Nav = () => {
  const isLoggedIn=true;
  const [providers,setProviders]=useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href={"/"} className='flex gap-2 flex-center'>
            <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
                className='object-contain'
            />
            <p className='logo_text'>Promptopia</p>
        </Link>
        <div className='sm:flex hidden'>
          {isLoggedIn?
            (<div className='flex gap-3 md:gap-5'>
              <Link href={"/create-prompt"} className='black_btn'>Create Prompt</Link>
              <button type="button" className='outline_btn' onClick={() => {}} >Sign Out</button>
              <Link href={"/profile"}>
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className='rounded-full'
                />
              </Link>
            </div>):
            ( <>
              {providers && Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
            </>)
          }
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
          {isLoggedIn ? (
            <div className='flex'>
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
                className='rounded-full'
              />
            </div>
            
          ) : (
            ( <>
              {providers && Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
            </>)
          )}
        </div>
        
    </nav>
  )
}

export default Nav