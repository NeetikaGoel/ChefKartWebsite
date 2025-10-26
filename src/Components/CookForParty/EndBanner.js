const EndBanner = () => {
  return (
    <div
      className="relative h-[250px] bg-center"
      style={{
        backgroundImage:
          "url('https://thechefkart.com/_next/image?url=%2Fsample.png&w=1080&q=75')",
      }}
    >
      
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        <h2 className="text-xl md:text-xl lg:text-xl font-medium">
          
          What are you waiting for, when it’s
        </h2>
        <p className="text-4xl font-bold text-orange-400 mt-4">
          
          Good Food. Good <br /> People. Good Life.
        </p>
      </div>
    </div>
  )
}
export default EndBanner
