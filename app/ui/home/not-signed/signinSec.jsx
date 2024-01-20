import Glowbutton from "../../../util/glowbutton";

export default function SigninSec() {
    return(<div className="w-full flex flex-row justify-center items-center">
        <Glowbutton name="Log In" link="/login" />
        <Glowbutton name="Sign Up" link="/signup" />
    </div>);
}