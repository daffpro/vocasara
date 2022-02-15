import React,{useState} from 'react';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-8/12 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/"><img src='/img/logo.png' className='object-scale-down logo-img-1'/></a>
            </div>
            <div className="flex flex-col mobile-menu">
                    <NavLink to="/historique" className="lien">
                        Historique
                    </NavLink>
                    <NavLink to="/missions" className="lien">
                        Missions
                    </NavLink >
                    <NavLink to="#services" className="lien">
                        Services
                    </NavLink >
                    <NavLink to="#contacts" className="lien">
                        Contactez-nous!
                    </NavLink >
            </div>  
        </div>
    )
}
const Header =() =>{
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter  bg-white  py-2 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/"><img src='/img/logo.png' className='object-scale-down logo-img'/></a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex menu">
                    <NavLink to="/historique" className="lien">
                        Historique
                    </NavLink>
                    <NavLink to="/missions" className="lien">
                        Missions
                    </NavLink >
                    <NavLink to="#services" className="lien">
                        Services
                    </NavLink >
                    <NavLink to="#contacts" className="lien">
                        Contactez-nous!
                    </NavLink >
                </div>
            </div>
        </nav>
    )

}

export default Header;