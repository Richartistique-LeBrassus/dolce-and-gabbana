const Banner = () => {
  return (
    <div className="w-full min-h-fit">
      <div className="relative w-full h-[12vh] mb-6">
        <video 
          autoPlay
          muted
          loop
          src="/videos/banner.mp4"
          className="w-full h-full object-cover object-center sm:scale-100 align-middle
          overflow-hidden grayscale"
        />
      </div>
    
      <div className="w-full flex justify-center items-center pt-7 px-9">
        <div className="flex flex-wrap justify-center items-center gap-5 
          text-xs text-stone-50 tracking-wider hover:cursor-pointer">
          <a className='hover:underline'>DOLCEGABBANE.COM</a>
          <a className='hover:underline'>ALTA MODA</a>
          <a className='hover:underline'> BOUTIQUES</a>
          <a className='hover:underline'>SUSTAINABILITY</a>
          <a className='hover:underline'>DG BARTHES ®</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;