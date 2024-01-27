import React from 'react'

const Skills = () => {
  return (
    <div className='skillsContainer'>
        <img src="./skills_bg.webp" alt="skills vector" className='skillImg' />
        <h2 className="title fs-xxxl">Skills</h2>
        <div className="">
            <div className="row gap-5 justify-content-center padding-y">
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/html.webp" alt="html" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/css.webp" alt="css" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/js.webp" alt="js" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/bootstrap.webp" alt="bootstrap" />
                </div>
            </div>
            <div className="row gap-5 justify-content-center padding-y pt-0 pt-md-4">
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/php.webp" alt="php" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/nodejs.webp" alt="nodejs" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/react.webp" alt="react" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/mongodb.webp" alt="mongodb" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/sql.webp" alt="sql" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills