import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className='sticky top-0 z-100 flex justify-between items-center bg-white shadow-md py-4 px-5 md:px-10'>
      {/* Left section */}
      <div className='relative flex items-center cursor-pointer'>
        <Image 
          src='https://links.papareact.com/qd3' 
          alt='Airbnb logo' 
          width={100}
          height={31.25}
          priority={true}
        />
      </div>

      {/* Middle section */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'/>
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>

      {/* Right section */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        
        <GlobeAltIcon className='h-6 cursor-pointer'/>

        <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
    </header>
    
  )
}

export default Header 