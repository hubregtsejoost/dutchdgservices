function DroogijsBestellen() {
  return (
<div className='w-full py-[4rem] px-4'>
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

export default DroogijsBestellen;