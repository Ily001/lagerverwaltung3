import React from 'react';
import { useState } from 'react';
import NavBar from './Navbar/NavBar';
import {Bars3Icon, InboxIcon, MagnifyingGlassCircleIcon, QrCodeIcon, BellIcon} from '@heroicons/react/24/outline';

function Header (){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className='bg-neutral-200 w-full py-2 items-center justify-between flex px-4 xl:py-1'>
        <button 
            className="header-icon"
            onClick={() => setIsOpen(!isOpen)}
        >
            <Bars3Icon className="text-hsrmDarkGrey" />
        </button>

        <div className='bg-neutral-200 w-full py-2 items-center justify-between flex px-4 z-50'>
            {/*suche */}
            <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2 '>
                {/*suche icon */}
                < MagnifyingGlassCircleIcon className='header-icon' />
                <input 
                    type="text" 
                    placeholder='Was suchen Sie?...' 
                    className='bg-transparent outline-none'
                />
            </div>
            {/*logo */}
            <div className='items-center w-full justify-center flex space-x-4'>
        	    <h1 className='text-l text-hsrmDarkGrey font-small'> HSRM Lagerverwaltung </h1>
            </div>
            {/*right-icons */}
            <div className='items-center justify-end space-x-6 flex w-full'>
                
                <QrCodeIcon className='header-icon'/>
                     {/*animate-ping */}
                     <span className="flex absolute -mt-1 ml-4">
                         <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-hsrmDarkGrey opacity-100"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-hsrmRed"></span>
                     </span>
                     <BellIcon className='header-icon'/> 
                <InboxIcon className='header-icon'/>       
             </div>
        </div>
        <NavBar isOpen={isOpen} />
        </div>
    )    
}

export default Header
