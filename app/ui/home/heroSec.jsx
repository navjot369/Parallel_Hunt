import GlowImg from "@/app/util/imgContglow";

export default function HeroSec() {
    return(<div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-28">
        <div className="p-4 flex flex-col items-start justify-evenly">
            <div className="text-5xl font-bold">
            <h1 className="my-2 text-yellow-400">Win fast.</h1>
            <h1 className="my-2 text-pink-600">Win more.</h1>
            <h1 className="my-2 text-purple-400">Win together.</h1>
            </div>
            <div className="text-justify w-4/5 text-white font-bold">
                <p>Ornare suspendisse sed nisi lacus. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Ultrices eros in cursus turpis massa tincidunt.</p>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <GlowImg source="/Images/img1.jpg" imgStyle="w-[600px] h-96"/>
        </div>
    </div>);
}