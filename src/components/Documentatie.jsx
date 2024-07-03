import Warehouse from '../assets/warehouse.jpg';

function Documentatie() {
  return (
<div className='w-full py-[4rem] px-4'>

{/* Section One */}
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


{/* Section two */}
    <div className='max-w-[1240px] grid mx-auto'>
        <div className="border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-3xl font-bold text-center p-3"><u>Acceptatie Checks</u></h1>
            <p className="text-center p-6">DDGS doet ook acceptatie checks, waarin we de zending, checken, accepteren en goedkeuren, 
            zodat uw aansprakelijkheid tot een minimum beperkt kan worden bij het verdere transport in de vervoersketen.</p>

            <div className="justify-center inline-flex">
        <button className='bg-red-400 text-white w-[200px] rounded-md font-medium mx-2 my-6 py-3 hover:bg-red-500 '><a href="tel:020-2480205" target="_blank">020-2480205</a></button>
        <button className='bg-white text-red-400 border-2 border-red-400 w-[220px] inline-flex rounded-md font-medium my-6 py-3 px-4 hover:bg-red-500 hover:border-red-500 hover:text-white'><a href="mailto:info@dutchdgservices.nl" target="_blank">info@dutchdgservices.nl</a></button>
        </div>
        </div>
    </div>
</div>
);
}

export default Documentatie;