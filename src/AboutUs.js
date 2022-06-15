import aboutUsImg from './img/image2.jpg';

function AboutUs() {
    return (
        <div>
            <section id="aboutus" class="clean-block clean-info dark">
           <div class="container mx-auto sm:px-4">
             <div class="block-heading">
               <h2 class="text-teal-500">About Us</h2>
             </div>
             <div class="flex flex-wrap  items-center">
               <div class="md:w-1/2 pr-4 pl-4">
                 <img src={aboutUsImg} class="max-w-full h-auto border-1 border-gray-200 rounded p-1" alt="about_us" />
               </div>
               <div class="md:w-1/2 pr-4 pl-4">
                 <div class="getting-started-info">
                   <p>IT - startup, dealing with the projects in blockchain, telecommunications, cryptography and at the intersections of these fields.</p>
                 </div>
               </div>
             </div>
           </div>
         </section>
        </div>
    )
}

export default AboutUs;