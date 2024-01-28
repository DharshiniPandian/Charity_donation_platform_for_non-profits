// Home.js

import React from "react";

import "./Home1.css";
import { GiPin } from "react-icons/gi";
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home1 = () => {
  
  return (
    <>
    <div id="home">
    <div className="landing-page">
      <h1 className="webname"> GENEROSITY GATEWAY</h1>
      <p className="webpara">Join Hands!...</p>
        <img className="image"/>
        <div className="circle">
<h4>DONATE!</h4>
        </div>
      <div className="image-banner">
        <div className="title-head">
          <h1>WARMHEARTED!</h1>
          <br></br>
          <h3>“Where giving is easy and impact is Big!!” <br></br><br></br>
          “explore engage and join us on the journey to make a positive <br></br>impact in the lives of those in need”</h3>
        </div>
      </div>
      </div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div id="home">
      <div className="latestcause">
        <h1> <GiPin/>  LATEST CAUSES</h1>
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
          <h2>Title 4</h2><br></br> 
          <p>Random text for Container 4.</p><br></br> 
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
          <h2>Title 5</h2><br></br> 
          <p>Random text for Container 4.</p><br></br> 
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
          <h2>Title 6</h2><br></br> 
          <p>Random text for Container 4.</p><br></br> 
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
<div id="about">
<div className="about-sec">
<div className="Aboutus">
        <h1> <GiPin/>  ABOUT US</h1>
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
        </div> <hr/>
        <div className="hr"></div>
        </div>
</div>
<div className="about-img">
</div>
</div>
</div>
<div id="service">
<div className="service"> 
 
<h1>SERVICES</h1>
<div className="serv-para">
   
  <li className="list">Fueling change, one connection at a time: Our platform brings together passionate fund providers and organizations, making the journey towards positive impact accessible and transparent through seamless fundraising experiences.</li>
  <br></br>
<br></br>
<li className="list">Join forces for a meaningful impact: Discover a special online hub where those who fund and organizations come together, making a positive difference through straightforward and transparent fundraising experiences."</li>
</div>
<div className="service-img">
</div>
</div>
</div>
{/* <div className="group-15">
          <div className="image-3">
            <p className="vol-box">Want to Be a volunteer?</p>
            <p className="vol-para">
              Joining as a volunteer is an invitation to be a positive force for change. By contributing your time and
              skills, you become an essential part of a community dedicated to making a meaningful impact, fostering
              connection, and creating a brighter future for those in need.
            </p>
            <div className="button-1">
              <div className="text-wrapper-21">Join Now</div>
            </div>
          </div>
        </div>
        <div className="overlap-13">
          <img className="image-9" alt="Image" src="photo1.png" />
        </div> */}

</div>


      
     

  
   </>
  );
};

export default Home1;