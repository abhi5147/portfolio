import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>For any information regarding my work kindly, contact me though the following details.</p>
                    <div className="icons">
                        <div className="row">
                            <Link to='/contact'>
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Abhinav Kumar</div>
                                </div>
                            </Link>
                        </div>
                        <div className="row">
                            <a href="https://www.google.com/maps/d/viewer?msa=0&hl=en&ie=UTF8&t=m&ll=25.923967699999963%2C86.79463870000001&spn=0.003997%2C0.006427&z=18&iwloc=0004e1db3e5a9c97fa981&source=embed&mid=1Wie9DtOxWK6S9UO4PdZSSB3HKV4" target="_blank" rel="noreferrer">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Madhepura, Bihar</div>
                                </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href="mailto:ak14502@gmail.com">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">ak14502@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="socialsite">
                        <ul className="sci">
                            <li><a href="tel:+916299648770"><i className="fas fa-phone"></i></a></li>
                            <li><a href="https://github.com/abhi5147" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/abhi5147/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.facebook.com/avk5147/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/_abhin.av" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
