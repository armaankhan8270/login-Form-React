import { useState } from "react";
import "./App.css";

function App() {
  // const [value, setvalue] = useState("");
  const [name, setname] = useState("");
  const [name2, setname2] = useState("");
  const [password, setpassword] = useState(" " );
  const [valid, setvalid] = useState(false);
  const submit = () => {
    localStorage.setItem("usernameoduser", name);
    localStorage.setItem("nameofuser", name2);
    localStorage.setItem("password", password);
  };
  return (
    <>
      <h1 className="text-5xl text-center pt-4 first-letter:text-cyan-600 ">Login <span className="first-letter:text-cyan-600">Form</span> </h1> 
    
    <div className="  border-black flex justify-center shadow-xl h-screen">
    <div>
      
      </div>
      <div className="shadow-xl min-h-0   h-[600px]  w-[400px] mt-20  bg-slate-800 rounded-lg">
        <div
          className={
            valid
              ? "bg-green-500 p-4 m-2 text-white text-2xl"
              : "bg-rose-500 p-4 m-2"
          }
        >
          {valid ? (
            <h1 className="">SuccessFully Registerd</h1>
          ) : (
            "please fill All values"
          )}
        </div>
        <h1 className="text-white capitalize first-letter:text-5xl first-letter:text-cyan-800 text-xl p-4 ">
          Welcome {valid ? localStorage.getItem("usernameoduser") : ""}
        </h1>
        <div className="mt-4 ">
          <form onSubmit={submit} action="">
            <input
              onChange={(e) => {
                setname2(e.target.value);
              }}
              value={name2}
              required
              type="text"
              className="outline-none shadow-xl w-[350px] focus:outline-none p-2 m-4 rounded-xl   "
              placeholder="name"
            />
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              required
              type="email"
              className="outline-none shadow-xl w-[350px] focus:outline-none p-2 m-4 rounded-xl   "
              placeholder="username"
            />
            <input
              onChange={(e) =>setpassword (e.target.value)}
              value={password}
              required
              type="password"
              className="outline-none shadow-xl w-[350px] focus:outline-none p-2 m-4 rounded-xl  "
              placeholder="Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (name && password && name2 != null) {
                  setvalid(true);
                  localStorage.setItem("usernameoduser", name);
                  localStorage.setItem("nameofuser", name2);
                  localStorage.setItem("password", password);
                }
              }}
              type="submit"
              className="text-3xl w-[100px]  rounded-lg p-3 pl-[30%] text-cyan-300 font-extrabold "
            >
              Submit
            </button>
          </form>{" "}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
