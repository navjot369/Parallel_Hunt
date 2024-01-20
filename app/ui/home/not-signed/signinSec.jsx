import Glowbutton from "../../../util/glowbutton";

export default function SigninSec() {
    return(<div className="-mt-24 w-full flex flex-row justify-center items-center p-11">
        <Glowbutton name="Log In" link="/login" />
        <Glowbutton name="Sign Up" link="/signup" />
    </div>);
}