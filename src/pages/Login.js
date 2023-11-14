import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './styles.css'
const Login = () => {
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = users;
  const inputchange = (e) => {
    console.log(e.target.value);
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:2000/auth/register", users);
  };
  return (
    <div className="registation">
    <form onSubmit={(e) => onSubmit(e)} className="form">
      <h3 className="headline">Sign in to LeetClone</h3>
      {/* <div>
        <label htmlFor="email">Username</label>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          value={username}
          className="form-control"
          onChange={(e) => inputchange(e)}
          required
        />
      </div> */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="enter email"
          name="email"
          value={email}
          className="form-control"
          onChange={(e) => inputchange(e)}
          required
        />
      </div>
      
      <div>
        <label>password</label>

        <input
          type="text"
          className="form-control"
          placeholder="enter password"
          name="password"
          value={password}
          onChange={(e) => inputchange(e)}
          required
        />
      </div>
      <button type="submit" className='btn btn-primary'>Login</button>
      <div className=''>
   Create an account {" "}
				{/* <a href='#' className="">
					Signup
				</a> */}
        <Link to={`/register`} >Registerd </Link>
			</div>
    </form>
    </div>
  );
};

export default Login;
