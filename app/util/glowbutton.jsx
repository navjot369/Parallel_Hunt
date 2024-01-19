import Link from 'next/link';

export default function Glowbutton({ link, name }) {
    return(<div className="w-fit bg-glowback mx-4 mt-11 rounded-xl">
        <div className="bg-glowback p-0.5 -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0 duration-300 rounded-xl">
        <Link href={link} className="block rounded-xl bg-[#232323] text-white py-4 px-8 text-3xl font-bold">{name}</Link>
        </div>
    </div>);
}