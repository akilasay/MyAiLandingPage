import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    
<div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
        Ai Saas Application
    <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-900 bg-clip-text">
        {" "} for Business</span>    
   
    </h1>
    <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, nesciunt tenetur explicabo provident quia aliquam unde corporis id molestiae deserunt cupiditate magnam facere impedit sit placeat? Quod, maiores ratione.</p>
<div className="flex justify-center my-10">
    <a href="#" className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800 hover:scale-110">Start for free</a>
    <a href="#" className="px-4 py-3 mx-3 border rounded-sm hover:scale-110">Documentation</a>
</div>
<div className="flex justify-center mt-10">
    <video autoPlay loop  muted className="w-1/2 mx-2 my-4 border border-purple-700 rounded-lg shadow-purple-400">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <video autoPlay loop  muted className="w-1/2 mx-2 my-4 border border-purple-700 rounded-lg shadow-purple-400">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
</div>
)
}

export default HeroSection