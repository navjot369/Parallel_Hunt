'use client'
import Navbar from "../util/navbar";
import {useState, useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Page() {
  const [isLogin, setLogin] = useState("");
  const [filters, setFilters] = useState({});
  const [data, setdata] = useState([]);
  const [imgdata, setimgdata] = useState([]);
  useEffect(() => {
    axios.get("https://parallel-hunt-backend-1.onrender.com/person").then(
      function(response) {
          setdata(response.data);
      }
    );

    axios.get("https://parallel-hunt-backend-1.onrender.com/getImage").then(
      function(response) {
          setimgdata(response.data);
      }
    );
      setLogin(localStorage.getItem("name"));
  }, []);
  return (
    <div>
    <div className="w-full h-16"></div>
    <Navbar isLogin={isLogin} />
    <div className="my-11 p-2">
    {data.map((ele, ind) => {
        return(<Box obj={ele} key={ind} imgData={imgdata} />)
    })}
    </div>
    </div>
  );
}

function Box({ obj, imgData }) {
  const [imgsrc, setsrc] = useState("/Images/noprofile.png");
  useEffect(() => {
  const source = imgData.find(ele => ele.email === obj.personal.Email);
  if(source !== undefined) {
    const uint8Array = new Uint8Array(source.image);
    const blob = new Blob([uint8Array], { type: 'image/png' });
    const dataUrl = URL.createObjectURL(blob);
    setsrc(dataUrl);
    return () => URL.revokeObjectURL(dataUrl);
  }
}, []);
    return(<div className="flex w-full lg:w-5/6 rounded-lg flex-row items-center box-border justify-between mx-auto my-2 p-4 bg-white">
        <div className="flex flex-row items-stretch justify-start ">
            <div className="aspect-square rounded-full">
              <Image src={imgsrc} width="100" height="100" className="rounded-full" alt="Profile"/>
            </div>
            <div className="">
                <h2 className="font-bold text-xl -mb-1">{obj.personal.name}</h2>
                <p className="">{obj.professional.organisation}</p>
                <p className="text-sm text-slate-700">{obj.personal.address}</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row ">
            <button className="mx-2 border-2 border-solid border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white rounded-full px-4 my-1 flex items-center justify-center font-bold">&#x2605; <span className="hidden sm:inline"> Like</span></button>
            <button className="mx-2 border-2 border-solid border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full px-4 my-1 flex items-center justify-center font-bold">&#x2665; <span className="hidden sm:inline"> Profile</span></button>

        </div>
    </div>);
}