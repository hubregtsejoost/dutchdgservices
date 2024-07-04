function AcceptatieChecks () {
  return (
<div className='w-full py-[2rem] px-4'>
<div className='md:max-w-[1240px] max-w-1240px grid mx-auto'>
        <div className="border border-black bg-white w-11/12 md:w-full shadow-md flex flex-col p-4 my-2 rounded-lg">
            <h1 className="text-3xl font-bold text-center p-3"><u>Acceptatie Checks</u></h1>
            <p className="text-center p-6">DDGS doet ook acceptatie checks, waarin we de zending, checken, accepteren en goedkeuren, 
            zodat uw aansprakelijkheid tot een minimum beperkt kan worden bij het verdere transport in de vervoersketen.</p>

            <div className="justify-center md:inline-flex flex">
        <button className='bg-red-400 text-white w-[200px] rounded-md font-medium mx-2 my-6 py-3 hover:bg-red-500 '><a href="tel:020-2480205" target="_blank">020-2480205</a></button>
        <button className='bg-white text-red-400 border-2 border-red-400 w-[220px] inline-flex rounded-md font-medium my-6 py-3 px-4 hover:bg-red-500 hover:border-red-500 hover:text-white'><a href="mailto:info@dutchdgservices.nl" target="_blank">info@dutchdgservices.nl</a></button>
        </div>
        </div>
    </div>
    </div>
  );
}

export default AcceptatieChecks;