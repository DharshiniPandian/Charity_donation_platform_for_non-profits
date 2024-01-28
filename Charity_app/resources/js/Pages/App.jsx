import "./App.css";
import Contact from "./Contact";
import Home from "./Home1";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiCaravan, GiContract, GiHomeGarage, GiInkSwirl, GiPin } from "react-icons/gi";
import ProgressBar from "@ramonak/react-progress-bar";
export default function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formActive, setFormActive] = useState(false);

    useEffect(() => {

        const animationTimeout = setTimeout(() => {
            setFormActive(true);
        }, 100);


        return () => clearTimeout(animationTimeout);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
    };

    return (
        <div>
            <div className="App">
                <header className="nav">
                    <nav className="nav_container_actions">
                        <h1 className="navbar-logo">Genrosity Gateway</h1>
                        <ul>
                            <li>
                                <Link activeClass="active" smooth spy to="home">
                                    <GiHomeGarage></GiHomeGarage>  HOME
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="about">
                                    <GiInkSwirl></GiInkSwirl>ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="services">
                                    <GiCaravan></GiCaravan>  SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="contact">
                                    <GiContract></GiContract> CONTACT
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="signIn">
                                    SIGN IN
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="signUp">
                                    SIGN UP
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div id="home">
                    <div className="landing-page">

                        <img className="image" />

                        <div className="image-banner">
                            <div className="title-head">
                                <h1>WARMHEARTED!</h1>
                                <br></br>
                                <h3>“Where giving is easy and impact is Big!!” <br></br><br></br>
                                    “explore engage and join us on the journey to make a positive <br></br>impact in the lives of those in need”</h3>
                            </div>
                        </div>

                        <div className="latestcause">
                            <h1> <GiPin />  LATEST CAUSES</h1>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='sect_1'>

                            <div className="container">
                                <img
                                    src="https://www.cascadetraining.com/assets/images/blog/Untitled%20design%20(3).png"
                                    alt="Image 4"
                                />
                                <div>
                                    <h3 color="black">Sponsor a child today</h3>
                                    <br></br>
                                    <p>Your donation for cancer patients is a lifeline, offering hope and support in their challenging journey.</p>
                                    <br></br> <ProgressBar
                                        completed={80}
                                        className="wrapper"
                                        barContainerClassName="rating"
                                        completedClassName="barCompleted"
                                        labelClassName="labelbar"
                                    />
                                </div>
                            </div>


                            <div className="container">
                                <img
                                    src="https://www.pediatricsotayranch.com/wp-content/uploads/2018/12/pip-top-5-xmas-dangers-feat.jpg"
                                    alt="Image 4"
                                />
                                <div>
                                    <h3>Education for children</h3><br></br>
                                    <p>Your donation for children's education empowers young minds,Join us in shaping a generation with limitless potential.</p>
                                    <br></br>         <ProgressBar
                                        completed={80}
                                        className="wrapper"
                                        barContainerClassName="rating"
                                        completedClassName="barCompleted"
                                        labelClassName="labelbar"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='sect_2'>
                            <div className="container">
                                <img
                                    src="https://www.jems.com/wp-content/uploads/2018/04/21641-1802JEMSkar-p02.jpg"
                                    alt="Image 4"
                                />
                                <div>
                                    <h3>Shelter for people</h3><br></br>
                                    <p>Your donation for sheltering the impoverished is a beacon of compassion, providing a safe haven for those in need.</p>
                                    <br></br>    <ProgressBar
                                        completed={80}
                                        className="wrapper"
                                        barContainerClassName="rating"
                                        completedClassName="barCompleted"
                                        labelClassName="labelbar"
                                    />
                                </div>
                            </div>


                            <div className="container">
                                <img
                                    src="https://www.jems.com/wp-content/uploads/2018/04/1802JEMSkar-p01.jpg"
                                    alt="Image 4"
                                />
                                <div>
                                    <h2>Education for children</h2><br></br>
                                    <p>Your donation for children's education empowers young minds,Join us in shaping a generation with limitless potential..</p><br></br>
                                    <ProgressBar
                                        completed={80}
                                        className="wrapper"
                                        barContainerClassName="rating"
                                        completedClassName="barCompleted"
                                        labelClassName="labelbar"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='sect_3'>
                            <div className="container">
                                <img
                                    src="https://www.jems.com/wp-content/uploads/2018/04/21641-1802JEMSkar-p02.jpg"
                                    alt="Image 4"
                                />
                                <div>
                                    <h2>Shelter for people</h2><br></br>
                                    <p>Your donation for sheltering the impoverished is a beacon of compassion, providing a safe haven for those in need..</p><br></br>
                                    <ProgressBar
                                        completed={80}
                                        className="wrapper"
                                        barContainerClassName="rating"
                                        completedClassName="barCompleted"
                                        labelClassName="labelbar"
                                    />
                                </div>
                            </div>

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="container">
                                <img
                                    src="https://www.jems.com/wp-content/uploads/2018/04/21641-1802JEMSkar-p02.jpg"
                                    alt="Image 4"
                                />
                                <div>
                                    <h2>Sponsor a child today</h2><br></br>
                                    <p>Your donation for cancer patients is a lifeline, offering hope and support in their challenging journey.</p><br></br>
                                    <ProgressBar
                                        completed={80}
                                        className="wrapper"
                                        barContainerClassName="rating"
                                        completedClassName="barCompleted"
                                        labelClassName="labelbar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about">
                    <div className="about-sec">
                        <div className="Aboutus">
                            <h1>   ABOUT US</h1>
                            <div className="abt-sect_1">
                                <div className="abt-para">
                                    <h4>Connect and Contribute</h4>
                                    <p>Join a community, discover causes, and contribute effortlessly.</p>
                                </div>
                                <div className="abt-para">
                                    <h4>Easy Giving, Big impact</h4>
                                    <p>Fundraising made smooth, transparent, and impactful.</p>
                                </div>
                            </div>
                            <div className="abt-sect_2">
                                <div className="abt-para">
                                    <h4>Personal Support</h4><div class="vl"></div>
                                    <p>Guidance for your giving journey.</p>
                                </div>
                                <div className="abt-para">
                                    <h4>See your impact</h4>
                                    <p>Real-time updates on the change you create.</p>
                                </div> <hr
                                    style={{
                                        color: "black",
                                        backgroundColor: "blue",
                                        height: 5
                                    }}
                                />
                                <div className="hr"></div>
                            </div>
                        </div>
                        <div className="about-img">
                        </div>
                    </div>
                </div>

                <div id="services">
                    <div className="service">

                        <h1>SERVICES</h1>
                        <div className="serv-para">

                            <li className="list-1">Fueling change, one connection at a time: Our platform brings together passionate fund providers and organizations, making the journey towards positive impact accessible and transparent through seamless fundraising experiences.</li>
                            <br></br>
                            <br></br>
                            <li className="list-1">Join forces for a meaningful impact: Discover a special online hub where those who fund and organizations come together, making a positive difference through straightforward and transparent fundraising experiences."</li>
                        </div>
                        <div className="service-img">
                        </div>

                    </div>
                </div>
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <section id="signIn"></section>
                <div id="signUp">
                    <div id="signUp" className={`signup-back ${formActive ? "active" : ""}`}>
                        <div className={`contact-container ${formActive ? "active" : ""}`}>
                            <div className="left-content"></div>

                            <div className={`ContactForm ${formActive ? "active" : ""}`}>
                                <div className="right-content">
                                    <br></br>
                                    <br></br>
                                    <h2>SignUp</h2>
                                    <br>
                                    </br><br></br>
                                    <form onSubmit={handleSubmit}>
                                        <div className="name-adjust">
                                            <label htmlFor="name">Name:</label>
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />


                                        <div className="role-container">
                                            <div className="name-adjust">
                                                <label htmlFor="role">Role:</label>
                                            </div>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a role</option>
                                                <option value="fundProvider">Fund Provider</option>
                                                <option value="organizer">Organizer</option>
                                            </select>
                                        </div>


                                        <div className="name-adjust">
                                            <label htmlFor="email">Email:</label>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />



                                        <div className="name-adjust">
                                            <label htmlFor="password">Password:</label>
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />


                                        <div className="name-adjust">
                                            <label htmlFor="confirmPassword">Confirm Password:</label>
                                        </div>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />




                                        <div className="forgot">
                                            <a href='/'>Forgot Password?</a>
                                        </div>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Hero />
                    <br></br>
                    <br></br>
                    <Footer />
                </div >
            </div>
        </div>


    );
}