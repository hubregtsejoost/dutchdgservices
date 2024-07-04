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
    </div>
  );
}

export default Veiligheidsadviseur;