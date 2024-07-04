import { Link } from "react-router-dom";


function Alert() {
  return (
    <div className='flex justify-between items-center h-6 max-w-[2040px] mx-auto py-4 bg-blue-500 text-white font-medium'>

    <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
    </div>

    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
            <span className="mx-8 pointer">Droogijs binnenkort via <Link to='https://droogijskoning.eu/' target="_blank"><u>droogijskoning.eu</u></Link></span>
    </div>
    </div>
    </div>
  );
}

export default Alert