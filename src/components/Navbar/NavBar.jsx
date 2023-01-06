import React from 'react';
import {navLinks} from './utils/NavDb';
import { useRecoilState } from "recoil";
import { activeNavItemState } from "../../atoms/ActiveNavBarAtom";


function NavBar() {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
      <div className='space-y-8 w-full'>
        {navLinks.slice(0,5).map((link)=>(
          <NavItem link={link} key={link.id}/>
        ))}
        <div className='w-full border-t border-neutral-200'/>
        {navLinks.slice(5,7).map((link)=>(
          <NavItem link={link} key={link.id}/>  
        ))}
      </div>
    </nav>
  );
}

function NavItem({link}){
  const [activeNav, setActiveNav]= useRecoilState(activeNavItemState);
  return(
    <div
      onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-hsrmDarkRed border-l-4 border-transparent ${
         activeNav === link.id && link.icon &&  "text-hsrmDarkRed border-hsrmDarkRed" 
       } `}
    >
      <span> {link.icon }</span>
      <h1
        className={`text-hsrmDarkGrey group-hover:text-hsrmDarkRed xl:flex hidden ${
          activeNav === link.id && "text-hsrmDarkRed "
        }} `}
      >
        {link.title}
      </h1>
    </div>
   
  )
}

export default NavBar;
