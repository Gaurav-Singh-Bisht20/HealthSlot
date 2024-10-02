import { assets } from "../assets/assets/assets_frontend/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* -----left side ----*/}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatum pariatur sit fuga sunt totam error animi delectus corporis quo modi aut praesentium  sapiente. Quis quia, perspiciatis deserunt corrupti iste accusamus.</p>
            </div>
             {/* -----center  ----*/}
             <div>
             <p className="text-xl font-medium mb-5">Company</p>
             <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privicy Policy</li>
             </ul>
             </div>
              {/* -----right side ----*/}
            <div>
                <p className="text-xl font-medium mb-5">Get In Touch</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>9635514227</li>
                    <li>gauravethings@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright @2024 </p>
        </div>
    </div>
  )
}

export default Footer