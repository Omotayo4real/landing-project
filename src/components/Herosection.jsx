

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> for <br />developers</span>
      </h1>
      <p className="mt-10 text-center text-neutral-500 max-w-4xl ">
        Empower your creativity and bring your VR app ideas to life with our intuitive
        development tools. Get started today and turn your imagination to immersive reality!
      </p>
      <div className="flex justify-center mt-10 space-x-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-red-800
                                py-3 px-4 mt-3 rounded-md">Start for free</a>
        <a href="#" className="py-3 px-4 rounded mt-3 border">Documentation</a>
      </div>
      <div className="flex mt-10 justify-center"></div>
    </div>
  )
}

export default Herosection
