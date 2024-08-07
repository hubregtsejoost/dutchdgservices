import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600'>
      <div>
        <img className="object-fit w-1/2" src="/assets/logo.png" alt="" />
        <p className='py-4'>DDGS is met haar E-herkenning gevestigd op Schiphol-Rijk. Wij zijn een nieuw en creatief bedrijf met ervaren specialisten en nodigen u graag uit om contact met ons op te nemen en kennis met onze service te maken.</p>
        <div className='flex justify-between w-[50%] md:w-[50%] cursor-pointer my-6'>
            <a href="https://www.linkedin.com/company/dutch-dg-services-bv/" target="_blank"><FaLinkedin className='hover:text-red-400' size={30} /></a>
            <a href="https://www.facebook.com/people/Dutch-DG-Services-BV/100080203489333/" target="_blank"><FaFacebookSquare className='hover:text-red-400' size={30} /></a>
            <a href="https://www.instagram.com/dutchdgservice/" target="_blank"><FaInstagram className='hover:text-red-400' size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-red-400'>Info</h6>
        <ul>
            <Link to='mailto:info@dutchdgservices.nl'><li className='py-2 text-sm cursor-pointer hover:text-red-400' ><a target="_blank">info@dutchdgservices.nl</a></li></Link>
            <Link to='tel:020-2480205'><li className='py-2 text-sm cursor-pointer hover:text-red-400'><a target="_blank">020-2480205</a></li></Link>
            <Link to='https://maps.app.goo.gl/zow5PUaX6wMuHrgH6'><li className='py-2 text-sm cursor-pointer hover:text-red-400'><a target="_blank">CAPRONILAAN 12</a></li></Link>
            <Link to='https://maps.app.goo.gl/zow5PUaX6wMuHrgH6'><li className='py-2 text-sm cursor-pointer hover:text-red-400'><a target="_blank">1119 NR, SCHIPHOL-RIJK</a></li></Link>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-red-400'>Solutions</h6>
        <ul>
            <Link to='/verpakken'><li className='py-2 text-sm cursor-pointer hover:text-red-400'>Verpakken & Checken</li></Link>
            <Link to='/opleiden'><li className='py-2 text-sm cursor-pointer hover:text-red-400'>Opleiden & Consultancy</li></Link>
            <Link to='/droogijs'><li className='py-2 text-sm cursor-pointer hover:text-red-400'>Droogijs</li></Link>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-red-400'>Company</h6>
        <ul>
            <Link to=''><li className='py-2 text-sm cursor-pointer hover:text-red-400'>Over Ons</li></Link>
            <Link to=''><li className='py-2 text-sm cursor-pointer hover:text-red-400'>Vacatures</li></Link>
            <Link to=''><li className='py-2 text-sm cursor-pointer hover:text-red-400'>Press</li></Link>
        </ul>
    </div>

      </div>
    </div>
  );
}

export default Footer;