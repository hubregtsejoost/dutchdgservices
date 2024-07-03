import Haven from '../assets/haven.mp4';

function Over() {
  return (
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <video autoPlay playsInline loop className='w-[500px] mx-auto my-4 rounded-lg' src={Haven} alt='/' />
        <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wie zijn wij</h1>
            <p>
            Het team van Dutch DG Services BV (DDGS) is uw toegewijde DG Specialist met meer dan 15 jaar aan ervaring. 
            Of het nu gaat om veiligheid, verpakken, documenteren, labelen, opslag, behandeling en 
            vervoer van gevaarlijke stoffen.

            Deze dienstverlening verzorgen wij voor elke gevarenklasse en iedere vervoersmodaliteit, 
            waarbij de nadruk ligt op de lucht- en zee en wegtransport (IATA, IMO & ADR)
        
            Daarnaast verzorgen wij ook graag uw DG-trainingen en kunt u ons inschakelen voor alle 
            voorkomende consultancy werkzaamheden op het gebied van gevaarlijke stoffen. Ook voor het 
            leveren van droogijs bent u bij ons aan het juiste adres.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Over;