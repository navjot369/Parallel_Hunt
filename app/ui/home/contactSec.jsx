'use client'
import GlowCont from "../../util/glowCont";

export default function ContactUs() {
    return(<div className="bg-slate-100 w-full p-1 mt-20  rounded-b-3xl">
        <div className="bg-[#232323] max-w-6xl my-11 mx-auto rounded-3xl grid grid-cols-2 p-2">
            <div className="text-white text-6xl text-center">
                <h2 className="my-11 font-bold">Contact Us</h2>
            </div>
            <div className="py-11">
                <form>
                    <GlowCont>
                        <input type="text" name="name" placeholder="Your name" className="p-3 w-96 text-lg"/>
                    </GlowCont>
                    <GlowCont>
                        <input type="email" name="email" placeholder="Your Email" className="p-3 w-96 text-lg"/>
                    </GlowCont>
                    <GlowCont>
                        <input type="button" value="Submit" placeholder="Your Email" className="p-3 w-96 text-xl text-white font-bold"/>
                    </GlowCont>
                </form>
            </div>
        </div>
    </div>);
}