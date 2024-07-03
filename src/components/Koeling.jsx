import DryIce from '../assets/droogijs.jpg';

function Droogijs() {
  return (
<div className='w-full py-[4rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  p-4 my-4'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-3xl font-bold py-2 mx-8'><u>Houd het koud!</u></h1>
            <p className='py-2 mx-8'>
                Droogijs is uw oplossing voor het geconditioneerd versturen van o.a. pharma, vlees en vis die
                in diepgevroren toestand vervoerd moet worden. Het ziet eruit als ijs, maar het smelt niet. En het laat geen vocht
                achter. Zodra het droogijs op is, blijft er niets over om af te voeren. Droogijs neemt ook niet de geur of smaak aan
                van de inhoud, zoals bij vis.
            </p>

            <p className='py-2 mx-8'>
            
                De temperatuur van droogijs is -79°C; dat is meer dan drie keer de koude-capaciteit van waterijs. 
                Droogijs sublimeert naar haar gasvorm en wordt in volume dan 800 keer zo groot. Deze gasvorm is anderhalf 
                keer zo zwaar als de omgevingslucht en verdrijft zodoende de zuurstof. Droogijs werkt bacteriostatisch; bacteriën 
                kunnen niet meer groeien.
            </p>
        </div>
        <img className='w-[550px] mx-auto my-4 rounded-lg' src={DryIce} alt='/' />
      </div>

 {/* Section two */}
 <div className='max-w-[1240px] grid mx-auto'>
        <div className="border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-3xl font-bold text-center p-3"><u>Droogijs bestellen?</u></h1>
            <p className="text-center p-6">Dan bent u bij ons aan het juiste adres, wij leveren droogijs in varianten;
               <bold>3, 10 en 16 mm</bold> in elke gewenste hoeveelheid en op elk gewenst adres in Nederland. Bovendien hebben we altijd 
               een basis voorraad droogijs voor de operatie beschikbaar. Vraag ons naar de prijzen en mogelijkheden.</p>
            <div className="justify-center inline-flex">
        <button className='bg-red-400 text-white w-[200px] rounded-md font-medium mx-2 my-6 py-3 hover:bg-red-500 '><a href="tel:020-2480205" target="_blank">020-2480205</a></button>
        <button className='bg-white text-red-400 border-2 border-red-400 w-[220px] inline-flex rounded-md font-medium my-6 py-3 px-4 hover:bg-red-500 hover:border-red-500 hover:text-white'><a href="mailto:info@dutchdgservices.nl" target="_blank">info@dutchdgservices.nl</a></button>
        </div>
        </div>
    </div>
  
</div>
  );
}

export default Droogijs;