import Image from "next/image";

export default function GlowImg({ source, imgStyle }) {
    return(
    <div className="relative w-fit rounded-3xl bg-glowback m-4 p-2">
        <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-glowback blur-lg rounded-3xl"></div>
        <div className="relative rounded-3xl bg-[#232323] overflow-hidden">
            <Image src={source} height="500" width="500" className={imgStyle} alt="Parallel-Hunt"/>
        </div>
    </div>);
}