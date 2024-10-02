import { assets } from "../assets/assets/assets_frontend/assets"


const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px] " src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus illum magni? Sit iusto sequi atque enim, voluptatum iste soluta consequuntur. Quia nemo veniam saepe eveniet corrupti, dolore quas odio
          Sit iusto sequi atque enim, voluptatum iste soluta consequuntur. Quia nemo veniam saepe eveniet corrupti, dolore quas odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minima a reiciendis suscipit. Quos illum similique, repellat animi excepturi, laborum Sit iusto sequi atque enim, voluptatum iste soluta consequuntur. Quia nemo veniam saepe eveniet corrupti, dolore quas odio ipsa dicta harum sint, magni nam dolorum amet doloribus esse.</p>
          <b className="text-gray-800">Our Vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, delectus magni? Praesentium nam cum Sit iusto sequi atque enim, voluptatum iste soluta consequuntur. Quia nemo veniam saepe eveniet corrupti, dolore quas odio beatae sapiente corporis est impedit expedita dolor, rerum omnis? Temporibus veniam ipsum quisquam facilis pariatur obcaecati?</p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300  text-gray-600 cursor-pointer">
          <b>Efficincy</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deserunt?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300  text-gray-600 cursor-pointer">
        <b>Convinience</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, tempora!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300  text-gray-600 cursor-pointer">
        <b>Pesonalisation</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, provident.</p>
        </div>
      </div>
    </div>
  )
}

export default About