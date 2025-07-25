
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What People are Saying</h2>
      <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral p-6 rounded-md text-md border border-neutral-900 font-thin">
                 <p>{testimonial.text}</p>

                 <div className="mt-8 flex items-start">
                    <img className="w-12 h-12 rounded-full mr-6 border border-neutral-400" 
                     src={testimonial.image}
                     alt={testimonial.user}/>
                     <div>
                       <h6>{testimonial.user}</h6>
                       <span className="text-sm font-normal italic text-neutral-400">{testimonial.company}</span>
                     </div>
                 </div>
              </div>
            </div>
          ))}
      </div>
    </div>

  )
}

export default Testimonials
