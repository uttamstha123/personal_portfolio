import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="row m-0 align-items-center header padding-x">
      <div className="col-12 col-md-7 text-center py-5 py-md-0 text-md-start">
        <h1 className="fs-xxxl profileName">
          UTTAM <br />
          SHRESTHA
        </h1>
        <div className="profile_desc col-md-10 fs-md">
          <p className="m-0 mt-sm-5">Hi,</p>
          <p>
            I am an experienced website developer with a passion who's all about
            turning ideas into websites that just work. In my portfolio, you'll
            find a mix of projects that showcase my love for clean design and
            smooth functionality.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-5 text-end">
        <div className="text-center">
          <img className="profileImg" src="./profile_img.webp" alt="profile of me" width={"90%"} />
          <h2 className="fs-xl mt-3 profession">Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
