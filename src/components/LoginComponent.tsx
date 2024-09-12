import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import {
  InputWithLabel,
  SimpleInput,
  ThirdPartyAuthButton,
  WhiteButton,
} from "../components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import logo from '../assets/logo1.png'

const LoginComponent = () => {
  const [email, setEmail] = useState("john@email.com");
  const [password, setPassword] = useState("pass1234567890");
  return (
    <div className="w-[500px] h-[750px] dark:bg-gray-900 bg-white flex flex-col justify-between items-center py-10 max-sm:w-[400px] max-[420px]:w-[320px] max-sm:h-[750px]">
      <div className="flex flex-col items-center gap-10">
        <Link to="/landing-v2">
          <img src={logo} alt="" className="w-[220px]" />
        </Link>
        <h2 className="text-2xl dark:text-whiteSecondary text-blackPrimary font-medium max-sm:text-xl">
          Welcome back!
        </h2>
        <div className="flex gap-5">
          <ThirdPartyAuthButton>
            {" "}
            <FaGoogle className="text-2xl max-sm:text-xl" />
          </ThirdPartyAuthButton>
          <ThirdPartyAuthButton>
            <FaGithub className="text-2xl max-sm:text-xl" />
          </ThirdPartyAuthButton>
        </div>
        <div className="w-full flex flex-col gap-5">
          <InputWithLabel label="Email">
            <SimpleInput type="email" placeholder="Enter a email..." value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputWithLabel>

          <InputWithLabel label="Password">
            <SimpleInput type="password" placeholder="Enter a password..." value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputWithLabel>
        </div>
        <Link
          to="/register"
          className="dark:text-whiteSecondary text-blackPrimary hover:text-black flex gap-1 items-center dark:hover:text-white max-sm:text-sm hover:underline"
        >
          Forgot Password? <FaArrowRight className="mt-[2px]" />
        </Link>
        <WhiteButton
          link="/"
          textSize="lg"
          width="full"
          py="2"
          text="Login now"
        ></WhiteButton>
      </div>
    </div>
  )
}
export default LoginComponent