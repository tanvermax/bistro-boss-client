import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginuser, handlegooglelogin } = useContext(AuthContext);
  const captcharef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [disable, setDisable] = useState(true);

  const hadnlevalidatecaptcha = () => {
    const user_captcha_value = captcharef.current.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) === true) {
      alert("Captcha Matched");
      setDisable(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);
  const handlegoogle =()=>{
    handlegooglelogin();
    navigate('/')
  }

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    console.log(user);
    loginuser(email, password).then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captcharef}
                  type="captcha"
                  placeholder="type text captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={hadnlevalidatecaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6 flex">
                <button disabled={disable} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div>
              <button onClick={handlegoogle} className="btn">
                login with google
              </button>
              <Link to={"/signin"} className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
