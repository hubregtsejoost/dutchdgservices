function Cards() {
  return (
    <div className='w-full py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

          <div className='border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Verpakken & Checken</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8'>DDGS verpakt, labelt en documenteert alle voorkomende gevaarlijke stoffen voor zeevracht, luchtvracht en wegvervoer.</p>
              </div>
              <button className='bg-red-400 text-white w-[200px] hover:scale-105 rounded-md font-medium my-6 mx-auto px-6 py-3'>Meer info</button>
          </div>

          <div className='border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Opleiden & Consultancy</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8'>DDGS biedt u de mogelijkheid om ons in te zetten als uw veiligheidsadviseur/consultant in gevaarlijke stoffen.</p>
              </div>
              <button className='bg-red-400 text-white w-[200px] hover:scale-105 rounded-md font-medium my-6 mx-auto px-6 py-3'>Meer info</button>
          </div>

          <div className='border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Droogijs</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8'>Droogijs is uw oplossing voor het geconditioneerd versturen van goederen die in diepgevroren vervoerd moet worden.</p>
              </div>
              <button className='bg-red-400 text-white w-[200px] hover:scale-105 rounded-md font-medium my-6 mx-auto px-6 py-3'>Meer info</button>
          </div>
      </div>
    </div>
  );
}

export default Cards;