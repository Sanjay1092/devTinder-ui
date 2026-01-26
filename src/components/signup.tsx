import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignup } from "../api/post";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  console.log(data);
  
const redirect = useNavigate();
  const handleSignUp = async()=>{
    try {
      const signUp = await postSignup(data.firstName,data.email,data.password);
      if(signUp){
        redirect("/profile");
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">firstName</label>
              <input type="text" className="input" placeholder="firstName" value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})} />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
              <div>
                <p>
                  Already have an account?{" "}
                  <Link className="link link-hover text-blue-400" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <button className="btn btn-primary mt-4" onClick={handleSignUp}>Sign up</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
