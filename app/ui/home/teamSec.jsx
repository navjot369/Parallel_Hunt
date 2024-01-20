'use client'
import { useState } from 'react';
import Image from 'next/image';
import GlowCont from '../../util/glowCont';


export default function TeamSec() {
    const [content, setContent] = useState({
        title: "Passionate Team",
        cont: "hello"
    });
    let handleOut = () => {

        setContent({
            title: "Passionate Team",
            cont: "Hover images"
        })
    }
    return(
    <GlowCont><div className="bg-bgteam bg-no-repeat bg-cover max-w-6xl w-full mx-auto rounded-2xl p-2 grid grid-cols-[1fr_2fr]" id="team" onMouseOut={() => handleOut()}>
        <div className="grid grid-cols-2 gap-4 p-4">
            <Image src="/Images/sumanyu_photo.jpeg" width="200" height="400" className="rounded-lg m-1 bg-red-100 w-full h-64 hover:shadow-inner hover:drop-shadow-2xl hover:scale-105 duration-300" alt="Person's display" onMouseOver={() => setContent({title: "Sumanyu Sharma", cont: "Back-end Developer"})}/>
            <Image src="/Images/navjot_photo.jpeg" width="200" height="400" className="rounded-lg m-1 bg-red-100 w-full h-64  hover:shadow-inner hover:drop-shadow-2xl hover:scale-105 duration-300"  alt="Person's display" onMouseOver={() => setContent({title: "Navjot Singh", cont: "Front-end Developer"})}/>
            <Image src="/Images/nishant_photo.jpeg" width="200" height="400" className="rounded-lg m-1 bg-red-100 w-full h-72 hover:shadow-inner hover:drop-shadow-2xl hover:scale-105 duration-300" alt="Person's display" onMouseOver={() => setContent({title: "Niharka Singla", cont: "Team Lead/Speaker"})}/>
            <Image src="/Images/niharka_photo.jpeg" width="200" height="400" className="rounded-lg m-1 bg-red-100 w-full h-72 hover:shadow-inner hover:drop-shadow-2xl hover:scale-105 duration-300" alt="Person's display" onMouseOver={() => setContent({title: "Nishant", cont: "Content Writer/Designer/Presentation"})}/>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-4 duration-300">
            <h2 className="text-5xl font-bold text-red-600 my-2 text">{content.title}</h2>
            <p className="text-xl font-bold text-red-500 my-2">{content.cont}</p>
        </div>
    </div>
    </GlowCont>);
}