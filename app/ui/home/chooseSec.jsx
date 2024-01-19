import GlowCont from '@/app/util/glowCont';
import Image from 'next/image';
import Link from 'next/link';

export default function ChooseSec() {
    return(<div className="bg-fixed bg-bgparallax1 w-full p-1">
        <div className="w-4/5 mx-auto mt-14 mb-24 bg-[#5f5e5e] max-w-6xl rounded-lg p-6 backdrop-blur-md bg-opacity-90">
            <h2 className="text-white text-4xl font-bold mb-11">Looking for?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center -mt-24 translate-y-24">
                <GlowCont><div className="p-2 h-96 group">
                    <div className="relative w-full overflow-hidden rounded-t-3xl">
                    <Image src="/Images/personBg.jpg" width="500" height="500" className="rounded-t-3xl w-96 h-60" alt="looking" />
                    <div className="absolute left-0 w-full h-60 top-60 group-hover:top-0 bg-yellow-50 duration-300">

                    </div>
                    </div>
                    <Link href="/" className="w-fit block mx-auto my-11 bg-white rounded-full py-2 px-4 font-bold text-[#232323] text-xl group-hover:px-6 duration-300 hover:bg-slate-300">Find Person</Link>
                    </div></GlowCont>
                <GlowCont><div className="p-2 h-96 group">
                    <Image src="/Images/eventBg.jpg" width="500" height="500" className="rounded-t-3xl  w-96 h-60" alt="looking" />
                    <Link href="/"  className="w-fit block mx-auto my-11 bg-white rounded-full py-2 px-4 font-bold text-[#232323] text-xl group-hover:px-6 duration-300 hover:bg-slate-300">Events</Link>
                    </div></GlowCont>
            </div>
        </div>
    </div>);
}