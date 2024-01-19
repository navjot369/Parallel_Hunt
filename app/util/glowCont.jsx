export default function GlowCont({children}) {
    return(
        <div className="relative w-fit rounded-3xl bg-glowback m-4 p-2">
            <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-glowback blur-lg rounded-3xl"></div>
            <div className="relative rounded-3xl bg-[#232323] overflow-hidden">
                {children}
            </div>
        </div>);
}