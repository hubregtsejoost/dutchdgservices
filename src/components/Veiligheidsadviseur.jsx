import WarehouseTwo from '../assets/warehousetwo.jpg';

function Veiligheidsadviseur() {
  return (
<div className='w-full py-[4rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4 my-4'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-3xl font-bold py-2 mx-8'><u>Veiligheids Adviseur</u></h1>
            <p className='py-2 mx-8'>DDGS biedt u de mogelijkheid om ons in te zetten als uw veiligheidsadviseur gevaarlijke 
              stoffen, wij hebben jarenlange ervaring in het adviseren van fabrikanten en logistieke bedrijven in het verwerken 
              van gevaarlijke stoffen en zijn u graag van dienst. 
            </p>
            <p className='py-2 mx-8'>
              
              Wij bieden u een breed scala aan opleidingsmogelijkheden aan, 
              van een eenvoudige bewustwording cursus, certificering veiligheidsadviseur gevaarlijke stoffen naar een gediplomeerde 
              IATA cat. 6 training Luchtvracht gevaarlijke stoffen.
            </p>
        </div>
        <img className='w-[550px] mx-auto my-4 rounded-lg' src={WarehouseTwo} alt='/' />
      </div>

      {/* Section two */}
    <div className='max-w-[1240px] grid mx-auto'>
        <div className="border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-3xl font-bold text-center p-3"><u>Opslag en vervoer</u></h1>
            <p className="text-center p-6">Ook het geval van het opzetten van een logistiek proces 
              voor opslag en vervoer van gevaarlijke stoffen denken we ook graag met u mee om de meest 
              praktische oplossing voor uw vraagstuk te bedenken.</p>

            <div className="justify-center inline-flex">
        <button className='bg-red-400 text-white w-[200px] rounded-md font-medium mx-2 my-6 py-3 hover:bg-red-500 '><a href="tel:020-2480205" target="_blank">020-2480205</a></button>
        <button className='bg-white text-red-400 border-2 border-red-400 w-[220px] inline-flex rounded-md font-medium my-6 py-3 px-4 hover:bg-red-500 hover:border-red-500 hover:text-white'><a href="mailto:info@dutchdgservices.nl" target="_blank">info@dutchdgservices.nl</a></button>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Veiligheidsadviseur;