import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(true);
        navigate("/");
      })
      .catch((error) => {
        console.log("error while signup");
      });
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form className="w-full lg:w-[500px] h-screen flex items-center justify-center">
        <div className="px-6 py-4 w-full  flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Create your account
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Full Name
              </p>
              <input
                onChange={handleName}
                value={name}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="eg. John Doe"
              />
            </div>

            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Work Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="email"
                placeholder="john@workemail.com"
              />
            </div>

            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Password
              </p>
              <input
                onChange={handlePassword}
                value={password}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="password"
                placeholder="Create password"
              />
            </div>

            <div className="flex items-start mdl:items-center gap-2">
              <input
                onChange={() => setChecked(!checked)}
                className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                type="checkbox"
              />
              <p className="text-sm text-primeColor">
                I agree to the OREBI{" "}
                <span className="text-blue-500">Terms of Service </span>and{" "}
                <span className="text-blue-500">Privacy Policy</span>.
              </p>
            </div>
            <button
              onClick={handleSignUp}
              className={`${
                checked
                  ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                  : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
              } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              Create Account
            </button>
            <p className="text-sm text-center font-titleFont font-medium">
              Have an Account?{" "}
              <Link to="/signin">
                <span className="hover:text-blue-600 duration-300">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
