import React, { useContext, useEffect } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,

//   validateCaptcha,
// } from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiospublic from "../../Hooks/useAxiospublic";
import Swal from "sweetalert2";

const Signin = () => {
  const { createnewuser, handlegooglelogin, updateuserprofile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiospublic();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const googlelogin = () => {
    handlegooglelogin()
      .then((result) => {
        const userInfo = {
          name: result.displayName,
          email: result.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log("Response data:", res.data);
            Swal.fire({
              title: "Login Successful!",
              text: "Welcome back!",
              icon: "success",
            });
            navigate("/");
          })
          .catch((err) => {
            console.error("Error adding user to database:", err);
            Swal.fire({
              title: "Database Error",
              text: "Failed to save user data.",
              icon: "error",
            });
          });
      })
      .catch((error) => {
        console.error("Google login error:", error);
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  const onSubmit = (values) => {
    console.log(values);
    createnewuser(values.email, values.password).then((result) => {
      const loggeduse = result.user;
      console.log(loggeduse);

      updateuserprofile({ displayName: values.name }).then(() => {
        const userInfo = {
          name: values.name,
          email: values.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log("Response data:", res.data);

            if (res.data) {
              console.log("User added to the database");
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
              });
              navigate("/");
            }
          })
          .catch((err) => {
            console.error("Error adding user to database:", err);
          });
      });
    });
  };

  // console.log(watch("name"));
  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sign In</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
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
                  {...register("password")}
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

             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <button onClick={googlelogin} className="btn">
              login with google
            </button>
            <Link to={"/login"} className="btn btn-outline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
