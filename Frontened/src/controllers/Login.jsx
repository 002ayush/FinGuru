import { useState } from "react";

function Login() {
  const [login,setlogin] = useState(true);
  const [text,setText] = useState("Login")
  const handlelogin = () => {
    setlogin(true);
    setText("Login");
  }
  const handleSignUp = () => {
    setlogin(false);
    setText("SignUp");
  }
    return (
      
        <div className="flex flex-col space-y-2 justify-center items-center z-40">
          <img
            src="/assets/images/avatar.png"
            alt="avatar"
            className="h-16 w-14"
          />
          <div className="space-y-4">
            <div className=" font-bold space-x-4 text-white">
            <button onClick={handlelogin} className="bg-green-950 hover:bg-green-600 p-2">Login</button>
            <button onClick={handleSignUp} className="bg-green-950 hover:bg-green-600 p-2">SignUp</button>
            </div>
           {
            login ? (<div>
            <form className="w-72 space-y-2">
            <input  className="p-2 rounded w-full" type="email" name="email" id="email" placeholder="Enter your email" />
            <input className="p-2 rounded w-full" type="password" name="password" id="pass" placeholder="Password" />
            <button  className="text-white font-bold bg-green-950 hover:bg-green-600 p-2" type="submit">{text}</button>
          </form>
            </div>):(
              <div>
              <form className="w-72 space-y-2">
              <input  className="p-2 rounded w-full" type="text" name="name" id="name" placeholder="Enter your name" />
              <input  className="p-2 rounded w-full" type="email" name="email" id="email" placeholder="Enter your email" />
              <input className="p-2 rounded w-full" type="password" name="password" id="pass" placeholder="Password" />
              <button className="text-white font-bold bg-green-950 hover:bg-green-600 p-2" type="submit">{text}</button>
            </form>
              </div>
            )
           }
            
          
          
          </div>
          
        </div>
      
    );
  }
  
  export default Login;
  