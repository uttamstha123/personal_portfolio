import React from 'react'

const Skills = () => {
  return (
    <div className='skillsContainer'>
        <img src="./skills_bg.png" alt="skills vector" className='skillImg' />
        <h2 className="title fs-xxxl">Skills</h2>
        <div className="">
            <div className="row gap-5 justify-content-center padding-y">
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/html.png" alt="html" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/css.png" alt="css" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/js.png" alt="js" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/bootstrap.png" alt="bootstrap" />
                </div>
            </div>
            <div className="row gap-5 justify-content-center padding-y pt-0 pt-md-4">
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/php.png" alt="php" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/nodejs.png" alt="nodejs" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/react.png" alt="react" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/mongodb.png" alt="mongodb" />
                </div>
                <div className="col-5 py-5 col-sm-3 col-lg-2 text-center item">
                    <img src="./icons/sql.png" alt="sql" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills