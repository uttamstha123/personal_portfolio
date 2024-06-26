import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="title fs-xxxl">Projects</h2>
      <h4 className="subTitle fs-md mb-md-5 mb-3">
        Featured work and Project showcase
      </h4>
      <div className="projectContainer">
        <div className="row mb-5 project d-flex flex-column-reverse gap-4 gap-md-0 flex-md-row py-sm-5 px-sm-5 py-4 px-3 rounded-5">
          <div className="projectDesc col-md-9 col-12">
            <h3 className="fs-lg">
              <span>01 </span>WePandas DAPP Website
            </h3>
            <p className="fs-sm col-md-10">
              The WePandas DAPP (Decentralized Application) Website project aims
              to create an interactive and user-friendly platform for users to
              engage with decentralized services and applications within the
              WePandas ecosystem.
            </p>
            <div className="d-flex gap-1 flex-wrap skills fs-sm">
              <p>Html</p>
              <p>Css</p>
              <p>Js</p>
              <p>Gsap</p>
            </div>
            <div className="links mt-4">
              <a
                href="https://uttamstha123.github.io/wepandas-website/"
                rel="noreferrer"
                target="_blank"
                className="fs-xs px-4 py-2 liveLink"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/uttamstha123/wepandas-website"
                rel="noreferrer"
                target="_blank"
                className="ms-md-5 ms-3 fs-xs px-4 py-2 gitLink"
              >
                View On Github
              </a>
            </div>
          </div>
          <div className="projectImage col-md-3 col-12 text-center">
            <img src="./project1.webp" alt="project screenshot" />
          </div>
        </div>
        <div className="row mb-5 project d-flex flex-column gap-4 gap-md-0 flex-md-row py-sm-5 px-sm-5 py-4 px-3 rounded-5">
          <div className="projectImage col-md-3 col-12 text-center">
            <img src="./project2.webp" alt="project screenshot" />
          </div>
          <div className="projectDesc col-md-9 col-12 ps-md-5">
            <h3 className="fs-lg">
              <span>02 </span>Gifts - Ecommerce
            </h3>
            <p className="fs-sm col-md-10">
              The Gifts - Ecommerce project entailed developing a comprehensive
              e-commerce platform from scratch using the MERN stack (MongoDB,
              Express.js, React.js, Node.js). This platform was designed to
              provide users with a seamless online shopping experience,
              incorporating robust backend functionality and a dynamic front-end
              interface.
            </p>
            <div className="d-flex gap-1 flex-wrap skills fs-sm">
              <p>Html</p>
              <p>Css</p>
              <p>Js</p>
              <p>ReactJs</p>
              <p>Nodejs</p>
              <p>Mongodb</p>
            </div>
            <div className="links mt-4">
              <a
                href="https://gifts-ecommerce.onrender.com"
                rel="noreferrer"
                target="_blank"
                className="fs-xs px-4 py-2 liveLink"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/uttamstha123/gifts"
                rel="noreferrer"
                target="_blank"
                className="ms-md-5 ms-3 fs-xs px-4 py-2 gitLink"
              >
                View On Github
              </a>
            </div>
          </div>
        </div>
        <div className="row project d-flex flex-column-reverse gap-4 gap-md-0 flex-md-row py-sm-5 px-sm-5 py-4 px-3 rounded-5">
          <div className="projectDesc col-md-9 col-12">
            <h3 className="fs-lg">
              <span>03 </span>Med Cab Care Private Limited
            </h3>
            <p className="fs-sm col-md-10">
              The Med Cab Care Private Limited project focused on developing a
              secure, efficient, and user-friendly web platform tailored for
              healthcare services. This project aimed to streamline various healthcare-related processes, ensuring data protection and optimal performance while keeping up with the latest industry standards and web development technologies.
            </p>
            <div className="d-flex gap-1 flex-wrap skills fs-sm">
              <p>Html</p>
              <p>Css</p>
              <p>Js</p>
              <p>Gsap</p>
            </div>
            <div className="links mt-4">
              <a
                href="https://medcab.in/"
                rel="noreferrer"
                target="_blank"
                className="fs-xs px-4 py-2 liveLink"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/uttamstha123"
                rel="noreferrer"
                target="_blank"
                className="ms-3 ms-md-5 fs-xs px-4 py-2 gitLink"
              >
                View On Github
              </a>
            </div>
          </div>
          <div className="projectImage col-md-3 col-12 text-center">
            <img src="./project3.webp" alt="project screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
