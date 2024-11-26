
import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-10  border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            features
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent"> your code</span>
        </h2>
      </div>
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-wrap mt-10 lg:mt-20">
         {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
               <div className="flex">
                <div className="flex px-2 h-10 w-14 bg-neutral-900 text-orange-700
                                 justify-center items-center rounded-full mx-3 ">
                    {feature.icon}
                </div>
                <div>
                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                </div>
               </div>
            </div>
         ))}
      </div>
    </div>
  )
}

export default FeatureSection
