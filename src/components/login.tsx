import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../api/post";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      dispatch(addUser(result.data));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
      console.log(error);
    }
  };
  return (
    // <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto">
    //   <legend className="fieldset-legend">Login</legend>

    //   <label className="label">Email</label>
    //   <input
    //     type="email"
    //     className="input"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />

    //   <label className="label">Password</label>
    //   <input
    //     type="password"
    //     className="input"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <p className="text-red-500">{errorMessage}</p>
    //   <button className="btn btn-primary mt-4" onClick={handleLogin}>
    //     Login
    //   </button>
    // </fieldset>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
       <button className="btn btn-primary mt-4" >SignUp</button>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
