import React from "react";
import doctor from "../Images/home_pic.png";
import rafay from "../Images/rafay.jpeg";
import shahzib from "../Images/shahzib1.jpeg";
import umair from "../Images/umair.jpeg";
import '../App.css';
function Home() {
    return (
        <>
            <div >
                <div>
                    <img src={doctor} alt="doctor" style={{ width: "100%", height: "30%", marginTop: -20 }} />
                    <div className="title"><h1 className="heading">Detection of Lumber Spine Stenosis through image <br /> classification using MRI image</h1>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container" id="about">
                <h1 className="text-center" style={{ marginBottom: 50 }}>About Us</h1>
                <h2>We would like to thank our supervisor Mr Zain Ul Abideen. Our supervisor Mr
                    Zain Ul Abideen assisted us every time when we need his help and he guided us
                    everytime and without him we would not be able to complete our project. He helped
                    us in our research work. We are very thankful to his because he assisted us all the way.
                    Mr. Zain Ul Abideen helped us a lot as he guided us how to present and how to use various
                    techniques to code. He assisted us every time we need his help. We are very grateful to have
                    teacher like him.</h2>
            </div>
            <hr />
            <div className="container" id="team">
                <h2 className="text-center">Team Members</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card" style={{ marginBottom: 50, marginTop: 50, "width": "80%" }}>
                            <img src={rafay} alt="Rafay Nisa" style={{ "width": "100%", height: 300 }} />
                            <div className="container_card" >
                                <h4><b>Rafay Nisar</b></h4>
                                <p>Data Scientist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{ marginBottom: 50, marginTop: 50, "width": "80%" }} >
                            <img src={shahzib} alt="Muhammad Shahzib" style={{ "width": "100%", height: 300 }} />
                            <div className="container_card" >
                                <h4><b>Muhammad Shahzib</b></h4>
                                <p>Android Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{ marginBottom: 50, marginTop: 50, "width": "80%" }}>
                            <img src={umair} alt="Muhammad Umair" style={{ "width": "100%", height: 300 }} />
                            <div className="container_card" >
                                <h4><b>Muhammad Umair</b></h4>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div >
                <div className="container" style={{ "width": "60%" }} id="contact">
                    <h2 className="text-center" style={{ marginBottom: 50 }}>CONTACT US</h2>
                    <div className="row">
                        <div>
                            <p>Contact us and we'll get back to you within 24 hours.</p>
                            <p><span className="glyphicon glyphicon-map-marker"></span> NUML H-9, Islamabad, Pakistan</p>
                            <p><span className="glyphicon glyphicon-phone"></span> +92-51-9265100</p>
                            <p><span className="glyphicon glyphicon-envelope"></span> info@numl.edu.pk</p>
                        </div><br/>
                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                                </div>
                                <div className="col-sm-12 form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                </div>
                            </div>
                            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <button className="btn btn-default pull-right" type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home