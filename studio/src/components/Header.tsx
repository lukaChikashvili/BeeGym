import {  MenuIcon } from 'lucide-react'

const Header = () => {

    const navLinks = ["Home", "About", "Trainers", "More"];


  return (
    <header className="w-full  flex items-center justify-between px-16 py-6 text-white">

        <div>
            <h1 className="text-3xl opacity-0 md:opacity-100">BeeGym</h1>
        </div>

     
            <nav className=" hidden md:flex gap-10 list-none nav_class" aria-label="primary-navigation">
                {navLinks.map((link) => (
                     <li key={link} className="cursor-pointer text-xl " >
                        {link}
                     </li>
                ))}

            </nav>

      <MenuIcon className='cursor-pointer fixed right-4 md:hidden' />
            
     
    </header>
  )
}

export default Header
