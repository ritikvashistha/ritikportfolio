import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (
        <div>


            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>
                            About us</h2>
                        <div className="content">
                            <p>
                                CodinNepal is a YouTube channel where you can learn web designing, web development, ui/ux designing, html css tutorial, hover animation and effects, javascript and jquery tutorial and related so on.</p>
                            <div className="social">
                                <a href="https://facebook.com/coding.np"><span className="fab fa-facebook-f" /></a>
                                <a href="#"><span className="fab fa-twitter" /></a>
                                <a href="https://instagram.com/coding.np"><span className="fab fa-instagram" /></a>
                                <a href="https://youtube.com/c/codingnepal"><span className="fab fa-youtube" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="center box">
                        <h2>
                            Address</h2>
                        <div className="content">
                            <div className="place">
                                <span className="fas fa-map-marker-alt" />
                                <span className="text">Birendranagar, Surkhet</span>
                            </div>
                            <div className="phone">
                                <span className="fas fa-phone-alt" />
                                <span className="text">+089-765432100</span>
                            </div>
                            <div className="email">
                                <span className="fas fa-envelope" />
                                <span className="text">abc@example.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>
                            Contact us</h2>
                        <div className="content">
                            <form action="#">
                                <div className="email">
                                    <div className="text">
                                        Email *</div>
                                    <input type="email" required />
                                </div>
                                <div className="msg">
                                    <div className="text">
                                        Message *</div>
                                    {/* NOTE: Due to more textarea tag I got an error. So I changed the textarea name to changeit. Please change that changeit name to textarea */}
                                    <changeit id=".msgForm" rows={2} cols={25} required /> {/* replace this changeit name to textarea */}
                                    <br />
                                    <div className="btn">
                                        <button type="submit">Send</button>
                                    </div>
                                    <div className="bottom">
                                        <center>
                                            <span className="credit">Created By <a href="https://youtube.com/c/codingnepal">CodingNepal</a> | </span>
                                            <span className="far fa-copyright" /> 2020 All rights reserved.
                      </center>
                                    </div>
                                </div></form></div></div></div></footer></div>
    )
}
