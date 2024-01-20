"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  const [step, setstep] = useState(1);
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [repass, setrepass] = useState("");
  const [address, setaddress] = useState("");
  const [organisation, setorganisation] = useState("");
  const [education, seteducation] = useState("");
  const [skills, setskills] = useState("");
  const [resumeLink, setresumeLink] = useState("");
  const [achives, setachives] = useState("");
  const [passMistake, setpassMistake] = useState("");
  const [image, setImage] = useState(null);
  const [isupload, setisUpload] = useState("");

  const handleBack = () => {
    setstep(step - 1);
  };
  const handleNext = () => {
    setstep(step + 1);
  };

  const handleNext1 = () => {
    if (name.length == 0) {
      setpassMistake("Enter your name!");
      return;
    }
    if (email.length == 0) {
      setpassMistake("Enter your email!");
      return;
    }
    if (address.length == 0) {
      setpassMistake("Enter your address!");
      return;
    }
    if (validatePassword(pass)) {
      handleNext();
      setpassMistake("");
    }
  };

  const handleNext3 = () => {
    if (organisation.length == 0) {
      setpassMistake("Enter your organisation!");
      return;
    }
    if (education.length == 0) {
      setpassMistake("Enter your Education!");
      return;
    }
    if (skills.length == 0) {
      setpassMistake("Enter your Skills!");
      return;
    }
    if (achives.length == 0) {
      setpassMistake("Enter your Achivements!");
      return;
    }
    axios.post("https://parallel-hunt-backend-1.onrender.com/signup", {
      personal: {
        name: name,
        DOB: dob,
        Email: email,
        password: pass,
        address: address.toLowerCase(),
      },
      professional: {
        organisation: organisation,
        education: education,
        skills: skills,
        availability: true,
        resume: resumeLink,
        achievements: achives,
      },
    }).then(function(response) {
        console.log(response);
        if(response.data.msg == true) {
            handleNext();
        }
        else {
            setpassMistake("Error in creating new profile...");
        }
    });
    handleNext();
  };

  function validatePassword(password) {
    if (password.length < 8) {
      setpassMistake("Password should be more than 8 characters!");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setpassMistake("Password should contain lowercase letters!");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setpassMistake("Password should contain uppercase letters!");
      return false;
    }
    if (!/\d/.test(password)) {
      setpassMistake("Password should contain numbers!");
      return false;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setpassMistake("Password should contain special symbols!");
      return false;
    }
    if (pass !== repass) {
      setpassMistake("Both the passwords should be equal!");
      return false;
    }
    setpassMistake("");
    return true;
  }

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("testImage", image);
    formData.append("email", email);

    const result = await axios.post(
      "https://parallel-hunt-backend-1.onrender.com/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    setisUpload("Photo uploaded succesfully!!");
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  if (step == 1) {
    return (
      <div className="w-full p-4 max-w-6xl mx-auto my-11">
        <div className="w-full md:w-4/5 mx-auto my-11 rounded-full overflow-hidden bg-slate-200 h-5">
          <div className="w-1/5 bg-glowback h-5 rounded-full"></div>
        </div>
        <h2 className="text-4xl font-bold text-white">Personal Info</h2>
        <div className="grid grid-cols1 md:grid-cols-2 gap-4 my-8">
          <Box
            title="Name"
            type="text"
            holder="e.g. John Wick"
            setfun={setname}
            value={name}
          />
          <Box
            title="Date of Birth"
            type="date"
            holder="e.g. 06/03/2004"
            setfun={setdob}
            value={dob}
          />
          <Box
            title="Address"
            type="text"
            holder="e.g. Rajpura, Punjab"
            setfun={setaddress}
            value={address}
          />
          <Box
            title="E-mail"
            type="email"
            holder="e.g. john@example.com"
            setfun={setemail}
            value={email}
          />
          <Box
            title="New Password"
            type="password"
            holder="e.g. Ar#45e$dd"
            setfun={setpass}
            value={pass}
          />
          <Box
            title="Confirm Password"
            type="password"
            holder="e.g. Ar#45e$dd"
            setfun={setrepass}
            value={repass}
          />
        </div>
        <div className="text-center w-full text-lg text-red-600 font-bold">
          {passMistake}
        </div>
        <div className="flex justify-end w-3/4 mx-auto">
          <ButtonBox name="Next" func={handleNext1} />
        </div>
      </div>
    );
  } else if (step == 2) {
    return (
      <div className="w-full p-4 max-w-6xl mx-auto my-11">
        <div className="w-full md:w-4/5 mx-auto my-11 rounded-full overflow-hidden bg-slate-200 h-5">
          <div className="w-2/5 bg-glowback h-5 rounded-full"></div>
        </div>
        <h2 className="text-4xl font-bold text-white">Upload Photo</h2>
        <div className="flex justify-center items-center gap-4 my-8">
          <form onSubmit={submitImage} className="flex flex-row items-stretch">
            <input
              type="file"
              accept="image/*"
              className="bg-white p-2 rounded-l-lg"
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="rounded-r-lg bg-pink-500 text-white font-bold px-4"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-center text-red-400 text-xl my-4">{isupload}</div>
        <div className="flex justify-center items-center">
        <label for="resume" className="text-xl font-bold pr-4 text-white">Upload your Resume: </label>
            <div className="relative w-2/3 rounded-lg bg-glowback my-1 p-0.5">
              <div className="absolute top-0 left-0 right-0 bottom-0 p-1 bg-glowback blur-sm rounded-lg"></div>
              <div className="relative rounded-lg bg-[#232323] overflow-hidden flex justify-center items-center">
                <input
                  className="py-1 px-2 w-full text-lg"
                  onChange={(e) => setresumeLink(e.target.value)}
                  value={resumeLink}
                  placeholder="Link to your resume"
                  type="text"
                  id="resume"
                />
              </div>
            </div>
        </div>
        <div className="flex justify-between w-3/4 mx-auto">
          <ButtonBox name="Back" func={handleBack} />
          <ButtonBox name="Next" func={handleNext} />
        </div>
      </div>
    );
  } else if (step == 3) {
    return (
      <div className="w-full p-4 max-w-6xl mx-auto my-11">
        <div className="w-full md:w-4/5 mx-auto my-11 rounded-full overflow-hidden bg-slate-200 h-5">
          <div className="w-3/4 bg-glowback h-5 rounded-full"></div>
        </div>
        <h2 className="text-4xl font-bold text-white">Professional Details</h2>
        <div className="grid grid-cols1 md:grid-cols-2 gap-4 my-8">
          <Box
            title="Organisation"
            type="text"
            holder="e.g. Chitkara University"
            setfun={setorganisation}
            value={organisation}
          />
          <Box
            title="Education"
            type="text"
            holder="e.g. BE-CSE"
            setfun={seteducation}
            value={education}
          />
          <Box
            title="Skills"
            type="text"
            holder="e.g. Python, Java"
            setfun={setskills}
            value={skills}
          />
          <Box
            title="Achivements"
            type="text"
            holder="e.g. First prize in hackathon"
            setfun={setachives}
            value={achives}
          />
        </div>
        <div className="text-center w-full text-lg text-red-600 font-bold">
          {passMistake}
        </div>
        <div className="flex justify-between w-3/4 mx-auto">
          <ButtonBox name="Back" func={handleBack} />
          <ButtonBox name="Next" func={handleNext3} />
        </div>
      </div>
    );
  } else if (step == 4) {
    return (
      <div className="w-full p-4 max-w-6xl mx-auto my-8">
        <div className="w-full md:w-4/5 mx-auto my-8 rounded-full overflow-hidden bg-slate-200 h-5">
          <div className="w-full bg-glowback h-5 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center my-6">
          <Image
            src="/Images/profile-round.svg"
            width="500"
            height="500"
            className="w-full md:w-1/3 invert"
          />
        </div>
        <h2 className="text-4xl font-bold text-white text-center">
          Profile created Successfully!!
        </h2>
        <div className="text-center my-4 text-white  text-lg">
          Visit{" "}
          <Link href="/login" className="text-pink-500 underline">
            Login
          </Link>{" "}
          page
        </div>
      </div>
    );
  }
}

function Box({ title, value, holder, setfun, type }) {
  return (
    <div className="flex flex-col w-full md:w-2/3 mx-auto my-5">
      <h3 className="text-xl text-white pl-2 font-bold">{title}</h3>
      <InputBox holder={holder} setfun={setfun} type={type} value={value} />
    </div>
  );
}

function InputBox({ holder, value, setfun, type }) {
  return (
    <div className="relative w-full rounded-lg bg-glowback my-1 p-0.5">
      <div className="absolute top-0 left-0 right-0 bottom-0 p-1 bg-glowback blur-sm rounded-lg"></div>
      <div className="relative rounded-lg bg-[#232323] overflow-hidden">
        <input
          className="py-1 px-2 w-full text-lg"
          onChange={(e) => setfun(e.target.value)}
          value={value}
          placeholder={holder}
          type={type}
        />
      </div>
    </div>
  );
}

function ButtonBox({ name, func }) {
  return (
    <div className="w-fit bg-glowback mx-2 mt-11 rounded-xl">
      <div className="bg-glowback p-0.5 -translate-x-1 -translate-y-1 hover:-translate-x-0 hover:-translate-y-0 duration-300 rounded-xl">
        <button
          onClick={func}
          className="block rounded-xl bg-[#232323] text-white py-4 px-8 text-xl font-bold"
        >
          {name}
        </button>
      </div>
    </div>
  );
}
