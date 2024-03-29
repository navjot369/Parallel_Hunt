'use client'
import Navbar from "../util/navbar";
import {useState, useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Page() {
  const [isLogin, setLogin] = useState("");
  const [filters, setFilters] = useState({
    skills: "",
    education: "",
    address: ""
  });
  const [data, setdata] = useState([]);
  const [imgdata, setimgdata] = useState([]);
  useEffect(() => {
    axios.get("https://parallel-hunt-backend-1.onrender.com/person").then(
      function(response) {
          setdata(response.data);
      }
    );

    axios.get("https://parallel-hunt-backend-1.onrender.com/get-images").then(
      function(response) {
        console.log(response);
        setimgdata(response.data);
      }
    );
      setLogin(localStorage.getItem("name"));
  }, []);
  let tempData = data.filter((ele) => {
    if(filters.address.length == 0 && filters.skills.length == 0 && filters.education.length == 0) {
      return true;
    }
    if(filters.address.length > 0 && !ele.personal.address.toLowerCase().includes(filters.address)){return false;}
    if(filters.skills.length > 0 && !ele.professional.skills.toLowerCase().includes(filters.skills)){return false;}
    if(filters.education.length > 0 && !ele.professional.education.toLowerCase().includes(filters.education)){return false}
    return true;
  });

  return (
    <div>
    <div className="w-full h-16"></div>
    <Navbar isLogin={isLogin} />
    <Filters changefun={ setFilters } filters={ filters } />
    <div className="my-11 p-2">
    {tempData.map((ele, ind) => {
        return(<Box obj={ele} key={ind} imgData={imgdata} />)
    })}
    </div>
    </div>
  );
}

function Box({ obj, imgData }) {
  let src1 = imgData.find((ele) => ele.email === obj.personal.Email);
  let source = src1 == undefined? '/Images/noprofile.png' : src1.url;
  console.log(src1);
    return(<div className="flex w-full lg:w-5/6 rounded-lg flex-row items-center box-border justify-between mx-auto my-2 bg-white">
        <div className="flex flex-row items-stretch justify-start ">
            <div className="aspect-square w-fit p-2 h-full rounded-l-lg bg-glowback">
              <img src={source} width="100" height="100" className="rounded-full h-24 w-24" alt="Profile"/>
            </div>
            <div className="p-2">
                <h2 className="font-bold text-xl -mb-1">{obj.personal.name}</h2>
                <p className="">{obj.professional.organisation}</p>
                <p className="text-sm text-slate-700">{obj.personal.address}</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row ">
            <button className="mx-2 border-2 border-solid border-pink-700 text-[#eee] bg-pink-700 hover:text-white rounded-full px-4 my-1 text-lg flex items-center justify-center font-bold"><Image src="./Images/like-svg.svg" width="50" height="50" alt="Icons" className="w-6 h-6 pr-0 sm:pr-2"/><span className="hidden sm:inline"> Like</span></button>
            <button className="mx-2 border-2 border-solid border-blue-700 text-[#eee] bg-blue-700 hover:text-white rounded-full px-4 my-1 text-lg flex items-center justify-center font-bold"><Image src="./Images/message-svg.svg" width="50" height="50" alt="Icons" className="w-6 h-6 pr-0 sm:pr-2"/><span className="hidden sm:inline"> Profile</span></button>

        </div>
    </div>);
}

function Filters({ filters, changefun }) {
  const [applyFil, setApply] = useState(false);
  let handleChange = e => {
    let value = e.target.value;
    if(e.target.name == "fil_address") {
    changefun({...filters, "address": value })
    }
    else if(e.target.name == "fil_skills") {
    changefun({...filters, "skills": value })
    }
    else if(e.target.name == "fil_education") {
      changefun({...filters, "education" : value})
    }
  };
  let handleCancel = e => {
    changefun({
      "address" : "",
      "skills" : "",
      "education" : ""
    });
    setApply(false);
  }
  return(<div className="w-4/5 my-11 mx-auto p-1">
    {applyFil? <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <GlowCont><select name="fil_skills" onChange={handleChange} className="py-2 px-4 m-0 w-full">
      <option disabled selected>Skills</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="front">Frontend Development</option>
      <option value="backend">Backend Development</option>
      <option value="cloud">Cloud Computing</option>
      <option value="problem">Problem Solving</option>
      <option value="present">Presentation</option>
      <option value="data">Data Structures</option>
    </select></GlowCont>
    <GlowCont><select name="fil_education" onChange={handleChange} className="py-2 px-4 w-full">
      <option disabled selected>Education</option>
      <option value="tech">B.Tech.</option>
      <option value="B.A.">B.A.</option>
      <option value="B.E.">B.E.</option>
      <option value="M.A.">M.A.</option>
      <option value="B.Ed.">B.Ed.</option>
      <option value="B.B.A.">B.B.A.</option>
    </select></GlowCont>
    <GlowCont>
      <input name="fil_address" onChange={handleChange} className="py-2 px-4 w-full" placeholder="Address"/>
    </GlowCont>
    <GlowCont>
    <button onClick={handleCancel} className="w-full mx-auto py-2 px-4 bg-white rounded-full text-xl font-bold">Cancel</button>
    </GlowCont>
    </div> : <div className="flex flex-row justify-end w-full">
      <button onClick={() => setApply(true)} className="text-white py-2 px-4 bg-glowback text- rounded-full font-bold flex items-center"><Image src="./Images/setting-svg.svg" width="100" height="100" className="w-5 h-5 pr-1"/> Filters</button>
      </div>}
  </div>);
}

function GlowCont({children}) {
  return(
      <div className="relative w-full rounded-3xl bg-glowback m-2 p-1">
          <div className="absolute top-0 left-0 right-0 bottom-0 p-2 bg-glowback blur-lg rounded-3xl"></div>
          <div className="relative rounded-3xl bg-[#232323] overflow-hidden">
              {children}
          </div>
      </div>);
}