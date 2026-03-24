import logo from '../../assets/logo.png';
import gitHub from '../../assets/github.png';
import { Link, useLocation  } from 'react-router';

const Navbar = () => {
    const location = useLocation();

    let active = "/";
    if (location.pathname === "/allapp") {
        active = "Apps";
    } 
    else if (location.pathname === "/installation") {
        active = "Installation";
    }

    const link = (
        <>
            <li><Link to='/' className={`rounded-none border-b-2 transition-colors ${active === "/" ? "border-[#632EE3] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : "border-transparent"}`}>Home</Link></li>
            <li><Link to='/allapp' className={`rounded-none border-b-2 transition-colors ${active === "Apps" ? "border-[#632EE3] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : "border-transparent"}`}>Apps</Link></li>
            <li><Link to='/installation' className={`rounded-none border-b-2 transition-colors ${active === "Installation" ? "border-[#632EE3] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : "border-transparent"}`}>Installation</Link></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {link}
                    </ul>
                </div>
                <Link to="/" className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent cursor-pointer">
                    <div className='flex items-center'>
                        <img className='h-[30px] w-[30px] sm:h-[44px] sm:w-[44px] mr-2' src={logo} alt="Logo" />
                        <h3>HERO.IO</h3>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-2">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-1 sm:px-6 py-3 rounded-xl">
                    <div className='flex items-center justify-center'>
                        <img className='h-[24px] w-[24px] sm:h-[34px] w-[34px] mr-2' src={gitHub} alt="" />
                        <h3 className='textarea-sm sm:text-xl font-semibold'>Contribute</h3>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Navbar;