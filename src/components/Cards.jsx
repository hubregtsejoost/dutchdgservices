import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className='w-full md:py-[6rem] px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

          <div className='border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg'>
              <h2 className='text-2xl font-bold mx-8 py-4'>Verpakken & Checken</h2>
              <div className=''>
                  <p className='py-1 mx-8'>DDGS verpakt, labelt en documenteert alle voorkomende gevaarlijke stoffen voor zeevracht, luchtvracht en wegvervoer.</p>
              </div>
              <Link to='/verpakken' className='bg-red-400 text-center text-white w-[200px] hover:bg-red-500 rounded-md font-medium my-6 mx-8 px-6 py-3'>Meer info</Link>
          </div>

          <div className='border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg'>
              <h2 className='text-2xl font-bold mx-8 py-4'>Opleiden & Consultancy</h2>
              <div className=''>
                  <p className='py-1 mx-8'>DDGS biedt u de mogelijkheid om ons in te zetten als uw veiligheidsadviseur/consultant in gevaarlijke stoffen.</p>
              </div>
            <Link to='/opleiden' className='bg-red-400 text-center text-white w-[200px] hover:bg-red-500 rounded-md font-medium my-6 mx-8 px-6 py-3'>Meer info</Link>
          </div>

          <div className='border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg'>
              <h2 className='text-2xl font-bold mx-8 py-4'>Droogijs</h2>
              <div className=''>
                  <p className='py-1 mx-8'>Droogijs is uw oplossing voor het geconditioneerd versturen van goederen die in diepgevroren vervoerd moet worden.</p>
              </div>
              <Link to='/droogijs' className='bg-red-400 text-center text-white w-[200px] hover:bg-red-500 rounded-md font-medium my-6 mx-8 px-6 py-3'>Meer info</Link>
          </div>
      </div>
    </div>
  );
}

export default Cards;