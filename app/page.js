import HeroSec from "./ui/home/heroSec.jsx";
import ChooseSec from "./ui/home/chooseSec.jsx";

export default function Home() {
  return(<div>
    <HeroSec />
    <ChooseSec />
    <div className="w-full h-screen"></div>
    </div>
  );
}