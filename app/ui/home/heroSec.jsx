import GlowImg from "../../util/imgContglow";

export default function HeroSec() {
    return(<div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-6 md:my-28">
        <div className="p-4 flex flex-col items-center md:items-start justify-evenly">
            <div className="text-5xl font-bold flex flex-col items-center md:items-start mb-4">
            <h1 className="my-2 text-yellow-400">Win fast.</h1>
            <h1 className="my-2 text-pink-600">Win more.</h1>
            <h1 className="my-2 text-purple-400">Win together.</h1>
            </div>
            <div className="md:text-left w-full text-center md:w-4/5 text-white font-bold">
                <p>Parallel Hunt is dedicated to fostering collaboration and innovation by connecting individuals with diverse skills and ideas. Our mission is to create a platform where talents converge, projects flourish, and success is achieved through teamwork.</p>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <GlowImg source="/Images/img1.jpg" imgStyle="w-[600px] h-96"/>
        </div>
    </div>);
}