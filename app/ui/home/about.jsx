import GlowImg from "../../util/imgContglow";

export default function AboutSec() {
  return (
    <div className="bg-white w-full p-1 mb-20">
      <div className="w-4/5 max-w-6xl mx-auto bg-[#232323] rounded-3xl p-4 pr-11 mt-8 mb-24">
        <h1 className="text-center text-yellow-400 text-5xl my-8 first-letter:font-bold">
          About Us
        </h1>
        <div className="grid grid-cols-2 my-8">
          <div className="relative right-24">
            <GlowImg source="/Images/aboutUsbg.jpg" className="w-full h-96" />
          </div>
          <div className="flex justify-start items-center">
            <p className="text-white text-lg ">
              Embark on a transformative journey with Parallel Hunt, a
              groundbreaking platform where profound collaborations take root.
              Recognizing that the right team is the linchpin of success, we are
              on a mission to reshape the traditional paradigms of team
              building. More than just a platform, Parallel Hunt is a catalyst
              for meaningful connections, a champion of diversity, and an
              advocate for innovative, efficient team formation. Join us in
              redefining success through purposeful collaborations - welcome to
              Parallel Hunt, where every connection sparks the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
