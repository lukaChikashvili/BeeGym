

const Header = () => {

    const navLinks = ["Home", "About", "Trainers", "More"];


  return (
    <header className="w-full  flex items-center justify-between px-16 py-6 text-white">
        <div>
            <h1 className="text-3xl">BeeGym</h1>
        </div>

     
            <nav className=" flex gap-10 list-none nav_class" aria-label="primary-navigation">
                {navLinks.map((link) => (
                     <li key={link} className="cursor-pointer text-xl " >
                        {link}
                     </li>
                ))}

            </nav>
     
    </header>
  )
}

export default Header
