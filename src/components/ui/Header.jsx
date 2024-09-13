import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './button'
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
  const [showSignIn,setShowSignIn] = useState(false)
  const [search,setSearch] = useSearchParams();
  const {user} = useUser();

  useEffect(()=>{
  if(search.get("sign-in")){
    setShowSignIn(true)
  }
  },[search])

  const handleHide=(e)=>{
  if(e.target === e.currentTarget){
    setShowSignIn(false)
    setSearch({})
  }
  }
  return (
    <>
    <nav className="py-4 px-5 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="Hirrd Logo" />
        </Link>
        <div className='flex gap-8'>
        <SignedOut>
          {/* Add condition here */}
        <Button variant="outline" onClick={()=>setShowSignIn(true)}>Login</Button>
      </SignedOut>
      <SignedIn>
        {
          user?.unsafeMetadata?.role === "recruiter" && (
            <Link to="/postjob">
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className='mr-2'/>
              Post a Job
            </Button>
            </Link>
          )
        }
      
        <UserButton appearance={{
          elements:{
            avatarBox:"h-10 w-10",
          },
        }}>
         <UserButton.MenuItems>
          <UserButton.Link
          label="My Jobs"
          labelIcon={<BriefcaseBusiness size={15}/>}
          href='/myjobs'
          />
          <UserButton.Link
          label="Saved Jobs"
          labelIcon={<Heart size={15}/>}
          href='/savedjob'
          />
         </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
        </div>
        </nav>

        {
          showSignIn && (
            <div className='fixed inset-0 flex items-center justify-center opacity-90 bg-black' onClick={handleHide}>
              <SignIn signUpForceRedirectUrl='/onboarding' fallbackRedirectUrl='/onboarding' />
            </div>
          )
        }
        </>
  )
}

export default Header
