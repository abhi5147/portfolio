import React from 'react'
import Image1 from '../images/image1.jpg'
import Resume from '../images/resume.pdf'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={Image1} alt=""/>
                </div>
                <div className="column right">
                    <div className="text">I'm Abhinav Kumar and</div>
                    <p>I'm a student at Indian Institute of Engineering Science and Technology, Shibpur. Pursuing B.Tech in Information Technology.</p>
                    <p>I love doing competitive programming. check me on <a href="https://leetcode.com/ak14502/">Leetcode</a>, <a href="https://codeforces.com/profile/ak5147">Codeforces</a> and <a href="https://www.codechef.com/users/avk5147">Codechef</a>.</p>
                    <p>My other interests are Web Development, App Development and Machine learning.</p>
                    <p>My core interest lies mainly in web development but not restricted to it. I always love exploring and learning new technologies.</p>
                    <p>In my free time, I like to read books 📖, play Chess ♟︎ and play cricket outdoor 🏏.</p>
                    <a className="resumeBtn" href={Resume} target="_blank" rel="noreferrer">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
