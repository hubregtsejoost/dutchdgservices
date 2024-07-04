import Warehouse from '../assets/warehouse.jpg';

function Documentatie() {
  return (
<div className='w-full py-[4rem] px-4'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4 my-4'>
  <div className='flex flex-col justify-center'>
  <h1 className='text-3xl font-bold py-2 mx-8'><u>Documentatie</u></h1>
      <p className='py-2 mx-8'>DDGS verpakt, labelt en documenteert alle voorkomende gevaarlijke stoffen voor zeevracht, luchtvracht 
          en wegvervoer. We doen dit op zowel op locatie bij de klant, de luchtvaartmaatschappij (afhandelaren) als op onze vestiging
          in Schiphol-Rijk. Tevens verzorgen wij alle transportdocumentatie voor uw gevaarlijke stoffen. Wij hebben altijd voldoende 
          voorraad van labels en UN gekeurde verpakkingen, die u ook separaat bij ons kunt bestellen.</p>
  </div>
  <img className='w-[550px] mx-auto my-4 rounded-lg bg-cover' src={Warehouse} alt='/' />
</div>
</div>
);
}

export default Documentatie;