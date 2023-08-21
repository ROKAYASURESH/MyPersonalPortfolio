import React, { useState, useEffect } from 'react'
import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { BsVoicemail, MdEmail } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai"
import HeroImg from '../Common/HeroImg';


export default function Contact() {



    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Contact-Page`;

    });

    const [data, setData] = useState({
        fullname: " ",
        phone: " ",
        email: " ",
        msg: " "
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }

        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.msg}`)
    };

    return (
        <>

            <HeroImg heading="Contact" text="Drop us a line. We're listening." />

            <div className="container-fluid contact_div bg-dark py-4"  >
                <div className=" container ">
                    <div className="hed"> <h1 className='text-center'>Contact US </h1>
                        <p className='para' style={{ fontSize: "20px", color: "white" , marginBottom:"40px" }}>"Please feel free to reach out to us with any questions, comments, or concerns. We are here to help and will respond to your inquiry as soon as possible."</p></div>

                </div>
                <div className="row">
                    <div className="col-lg-5 col-10 mx-auto" style={{ border: "4px solid transparent", padding: "15px 70px", outline: "4px solid white", boxShadow: "5px 5px 0px white inset, -5px -5px 0px white inset", borderRadius: "10px", background: "skyblue" }}>
                        <h1 className='msg'>Send Message</h1>
                        <form action="" onSubmit={formSubmit}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label ">Full Name</label>
                                    <input required type="text" className="form-control" id="exampleFormControlInput1"
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={InputEvent}
                                        placeholder="suresh" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1"
                                        name="phone"
                                        value={data.phone}
                                        onChange={InputEvent}
                                        placeholder="Enter your Phone Number" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        placeholder="enter Your Email Address" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                                        name="msg"
                                        value={data.msg}
                                        onChange={InputEvent}
                                        placeholder="Comment" required />
                                </div>
                            </div>

                            <div className="col-12 button">
                                <button className='btn btn-outline-primary px-4 py-2 ' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12 col-10 mx-auto py-4 mx-auto ful-box">
                                <h1 className='text-primary-emphasis fw-bold'>Contact me</h1>
                                <div className="box">
                                    <div className="icons">
                                        <FaLocationArrow />
                                    </div>
                                    <div className="materoal">
                                        <h3>Address</h3>
                                        <a href="">M8CW+JJM Capital College & Research Center, Surya Kot Marg 35, Kathmandu 44600 <br />
                                            Koteshwor, Kathmandu 44600</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="icons">
                                        <FaPhone />
                                    </div>
                                    <div className="materoal">
                                        <h3>Phone</h3>
                                        <a href="tel:9869504717"> +997 9869504717</a>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="icons">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="materoal">
                                        <h3>Email</h3>
                                        <a href="mailto:rokayasursh028@gmail.com"> rokayasursh028@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </>
    )
}
