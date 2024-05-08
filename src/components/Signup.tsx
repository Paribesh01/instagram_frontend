import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const { signup } = useSignup();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handelSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password && email) {
      await signup(email, name, password);
      console.log("Key: " + localStorage.getItem("token"));
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <h1 className="bg-no-repeat instagram-logo"></h1>
          <form onSubmit={handelSumbit} className="mt-8 w-64 flex flex-col">
            <input
              autoFocus
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              autoFocus
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="name"
              placeholder="Username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              autoFocus
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="text-sm text-center hover:bg-blue-300 bg-blue-600 text-white py-1 rounded font-medium"
            >
              SignUp
            </button>
          </form>
          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>
          <button className="mt-4 flex">
            <div className="bg-no-repeat facebook-logo mr-1"></div>
            <span className="text-xs text-blue-900 font-semibold">
              Log in with Facebook
            </span>
          </button>
          <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
            Forgot password?
          </a>
        </div>
        <div className="bg-white border border-gray-300 text-center w-80 py-4">
          <span className="text-sm">Already have an account?</span>
          <a href="/login" className="text-blue-500 text-sm font-semibold">
            Login
          </a>
        </div>
        <div className="mt-3 text-center">
          <span className="text-xs">Get the app</span>
          <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo"></div>
            <div className="bg-no-repeat google-store-logo"></div>
          </div>
        </div>
      </div>
    </>
    //   <h1>SignUp</h1>
    //   <form onSubmit={handelSumbit}>
    //     <input
    //       type="text"
    //       placeholder="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="password"
    //       value={password}
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     />
    //     <button type="submit">Sumbit</button>
    //   </form>
  );
}
