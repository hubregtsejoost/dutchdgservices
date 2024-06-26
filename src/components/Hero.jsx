import { FaArrowDown } from "react-icons/fa";


function Hero() {
  return (
    <div className='text-slate-900'>
      <div className='z-30 max-w-[800px] px-4 w-full h-[600px] mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Dutch Dangerous Goods Services
        </h1>
        <p className='md:text-2xl text-xl font-md text-gray-500'>Specialist in het verpakken en behandelen van gevaarlijke stoffen</p>
        <div className="inline-flex">
        <button className='bg-red-400 text-white w-[200px] inline-flex rounded-md font-medium my-6 mx-auto py-3 pl-2 hover:bg-red-500'><a href="mailto:info@dutchdgservices.nl" target="_blank">info@dutchdgservices.nl</a></button>
        <button className='bg-red-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-red-500'><a href="tel:020-2480205" target="_blank">020-2480205</a></button>
        </div>
        <FaArrowDown className="flex justify-center mt-5 pt-18 mx-auto w-[3rem] h-[3rem] text-red-400 animate-bounce	" />
      </div>
    </div>
  );
}

export default Hero;