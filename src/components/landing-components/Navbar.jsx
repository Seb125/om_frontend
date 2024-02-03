import logo from '../../assets/landing-assets/logo.png';
import { navLinks } from "./constants";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='w-full flex justify-between text-white navbar px-4 py-4 md:px-16 md:py-8'>
      <img src={logo} alt="logo" className="w-[120px] h-[40px]" onClick={() => (navigate("/"))} />
      <ul className='list-none justify-end items-center flex flex-1'>

        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-raleway ${index === navLinks.length - 1 ? ' mr-0' : ' mr-2 sm:mr-10'} `}>
            <a href={nav.route} className='text-[#bdc0ef] hover:underline hover:text-white'>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
