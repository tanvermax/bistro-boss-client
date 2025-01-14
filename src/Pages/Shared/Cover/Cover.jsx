import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ backimg, covertitle, coverdes }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={backimg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className=" bg-[#1f1e1e80] w-[800px] h-[300px] items-center text-center p-20">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                {covertitle}
              </h1>
              <p className="mb-5">{coverdes}</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
