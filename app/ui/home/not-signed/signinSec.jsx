import Glowbutton from "@/app/util/glowbutton";

export default function SigninSec() {
    return(<div className="w-full flex flex-row justify-center items-center">
        <Glowbutton name="Log In" link="/" />
        <Glowbutton name="Sign In" link="/" />
    </div>);
}