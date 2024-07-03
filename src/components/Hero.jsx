import { Link } from "react-router-dom";

function Hero() {


  return (
    <div className='text-slate-900 mt-12'>
      <div className='z-30 max-w-[1100px] px-4 w-full h-[500px] mx-auto text-center flex flex-col justify-center'>
        
<h1 className='md:text-6xl sm:text-5xl text-3xl md:py-6'>
          Specialist in het <Link to='/verpakken' className='hover:text-red-400'><u>Verpakken</u></Link> en <Link to='/verpakken' className='hover:text-red-400'><u>Behandelen</u></Link> van uw gevaarlijke stoffen
        </h1>
        <p className='md:text-2xl text-xl font-md text-gray-500'>Dutch Dangerous Goods Services</p>
        <div className="justify-center inline-flex">
        <button className='bg-red-400 text-white w-[200px] rounded-md font-medium mx-2 my-6 py-3 hover:bg-red-500 '><a href="tel:020-2480205" target="_blank">020-2480205</a></button>
        <button className='bg-white text-red-400 border-2 border-red-400 w-[220px] inline-flex rounded-md font-medium my-6 py-3 px-4 hover:bg-red-500 hover:border-red-500 hover:text-white'><a href="mailto:info@dutchdgservices.nl" target="_blank">info@dutchdgservices.nl</a></button>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;