import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from './Logo';


function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[2040px] mx-auto px-4'>
      <Link to='/'><h1 className='w-full text-xl font-bold'><Logo /></h1></Link>
      <ul className='hidden md:flex'>
        <Link to='/'><li className='py-3 px-4 hover:underline hover:text-red-400 cursor-pointer'>Home</li></Link>
        <Link to='/verpakken'><li className='py-3 px-4 hover:underline hover:text-red-400 cursor-pointer'>Verpakken & Checken</li></Link>
        <Link to='/opleiden'><li className='py-3 px-4 hover:underline hover:text-red-400 cursor-pointer'>Opleiden & Consultancy</li></Link>
        <Link to='/droogijs'><li className='py-3 px-4 hover:underline hover:text-red-400 cursor-pointer'>Droogijs</li></Link>
        {/* <Link to='/contact'><li className='p-4 hover:underline hover:text-red-400 cursor-pointer'>Contact</li></Link> */}
        <Link to='tel:020-2480205'><li className='py-3 px-4 ml-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:text-white cursor-pointer'>020-2480205</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <Link to='/'><h1 className='w-full text-xl font-bold m-4'><Logo /></h1></Link>
        <Link to='/'><li className='p-4 border-b border-gray-600 hover:underline hover:text-red-400 cursor-pointer'>Home</li></Link>
        <Link to='/verpakken'><li className='p-4 border-b border-gray-600 hover:underline hover:text-red-400 cursor-pointer'>Verpakken & Checken</li></Link>
        <Link to='/opleiden'><li className='p-4 border-b border-gray-600 hover:underline hover:text-red-400 cursor-pointer'>Opleiden & Consultancy</li></Link>
        <Link to='/droogijs'><li className='p-4 border-b border-gray-600 hover:underline hover:text-red-400 cursor-pointer'>Droogijs</li></Link>
        {/* <Link to='/contact'><li className='p-4 hover:underline hover:text-red-400 cursor-pointer'>Contact</li></Link> */}
        <Link to='tel:020-2480205'><li className='w-1/2 m-2 text-center p-4 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:text-white cursor-pointer'>020-2480205</li></Link>
        <Link to='mailto:info@dutchdgservices.nl'><li className='w-1/2 m-2 text-center p-4 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:text-white cursor-pointer'>info@dutchdgservices.nl</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;