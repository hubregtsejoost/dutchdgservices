import Haven from '../assets/haven.mp4';

function HeroImage() {

    return (
    <div className='w-full py-[2rem] px-4'>
    <div className='max-w-[1240px] grid mx-auto'>
        <div className="w-full shadow-md flex flex-col my-4 rounded-lg">
          <video className='rounded-lg' autoPlay loop src={Haven}></video>
        </div>
    </div>
  </div>
  );
}

export default HeroImage;