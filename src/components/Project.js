import React from 'react'
import Project1 from '../images/project1.png'
import Project2 from '../images/project2.png'

const Service = () => {
  return (
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="serv-content">
                <a href='http://biharstudynews.com' className="card">
                    <div className="img">
                        <img src={Project1} alt="Bihar Study News"/>
                    </div>
                    <div className="box">
                        <div className="text">Bihar Study News</div>
                        <p>It provides all the news and information about the college as well as job for the students.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span>
                        <span><i class="fa-solid fa-database"></i><span> Mysql</span></span>
                    </div>
                </a>
                <a href='http://rps.abhi-nav.com' className="card">
                    <div className="img">
                        <img src={Project2} alt="Rock Paper Scissors"/>
                    </div>
                    <div className="box">
                        <div className="text">Rock Paper Scissors</div>
                        <p>Developed website to play Rock Paper Scissors game with any person in online mode by entering Room ID.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span>
                        <span><i class="fa-solid fa-rocket"></i><span> Socketjs</span></span>
                    </div>
                </a>
               </div>
            </div>
    </section>
  )
}

export default Service
