import React from 'react'
import './ContactMe.scss'
export default function ContactMe() {
    return (
        <div>
            {/* contact section start */}
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">
                        Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">
                                Get in Touch</div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user" />
                                    <div className="info">
                                        <div className="head">
                                            Name</div>
                                        <div className="sub-title">
                                            Ritik Vashistha</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt" />
                                    <div className="info">
                                        <div className="head">
                                            Address</div>
                                        <div className="sub-title">
                                            Uttar Pradesh, India</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope" />
                                    <div className="info">
                                        <div className="head">
                                            Email</div>
                                        <div className="sub-title">
                                            vashistharitik9@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">
                                Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    {/* Due to more textarea, I got an error so I changed the tag name of this textarea into changeit. */}
                                    <changeit cols={30} rows={10} placeholder="Message.." required />
                                </div>
                                <div className="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer section start */}
            <footer>
                <span>Created By <a href="#">RitikVashistha</a> | <span className="far fa-copyright" /> 2020 All rights reserved.</span>
            </footer>
        </div>
    )
}
