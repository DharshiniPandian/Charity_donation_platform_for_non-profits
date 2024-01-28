import React from 'react';
import "./contact.css"
const ContactUsForm = () => {
  return (
    <div className='tit'>
    <div className="container-fluid big-padding">
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="cover p-4 bg-white row m-0 rounded shadow-md">
              <div className="col-md-3 text-center">
                <i className="bi fs-1 bi-geo-alt"></i>
              </div>
              <div className="col-md-9 ps-0 fs-6 pt-1 fw-bolder">
                1'st Floor, Vincent Plaza,<br></br>
                 Kuzhithurai, Tamilnadu -<br></br>
                 
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="cover p-4 bg-white row m-0 rounded shadow-md">
              <div className="col-md-3 text-center">
                <i className="bi fs-1 bi-envelope-check"></i>
              </div>
              <div className="col-md-9 ps-0 fs-6 pt-1 fw-bolder">
                sales@smarteyeapps.com <br />
                support@smarteyeapps.com
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="cover p-4 bg-white row m-0 rounded shadow-md">
              <div className="col-md-3 text-center">
                <i className="bi fs-1 bi-telephone-forward"></i>
              </div>
              <div className="col-md-9 ps-0 fs-6 pt-1 fw-bolder">
                +912 344 43434 443
                <br />
                +041 3434 44343 43
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="shadow-md bg-white p-5">
              <form action="">
                <h4 className="fs-7 fw-bolder mb-4">Contact Form</h4>
                {/* Full Name */}
<div className="row form-row mb-4">
<div className="col-md-4">
                    <label className="pt-2" htmlFor="">
                      Full Name :
                    </label>
                    {/* <span className="fw-bolder float-end pt-2">:</span> */}
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="form-control mb-0"
                    />
                  </div>
                </div>

{/* Email Address */}
<div className="row form-row mb-4">
  <div className="col-md-4">
    <label className="pt-2" htmlFor="email">
      Email Address :
    </label>
    {/* <span className="fw-bolder float-end pt-2">:</span> */}
  </div>
  <div className="col-md-8">
    <input
      type="email"
      id="email"
      placeholder="Enter Email Address"
      className="form-control"
    />
  </div>
</div>

{/* Mobile Number */}
<div className="row form-row mb-4">
  <div className="col-md-4">
    <label className="pt-2" htmlFor="mobileNumber">
      Mobile Number :
    </label>
    {/* <span className="fw-bolder float-end pt-2">:</span> */}
  </div>
  <div className="col-md-8">
    <input
      type="tel"
      id="mobileNumber"
      placeholder="Enter Mobile Number"
      className="form-control"
    />
  </div>
</div>

{/* Message */}
<div className="row form-row mb-4">
  <div className="col-md-4">
    <label className="pt-2" htmlFor="message">
      Message:
    </label>
    {/* <span className="fw-bolder float-end pt-2">:</span> */}
  </div>
  <div className="col-md-8">
    <textarea
      id="message"
      placeholder="Enter Your Message"
      className="form-control"
      rows="4"
    ></textarea>
  </div>
</div>

                {/* ... Repeat the same structure for other form fields */}
                <div className="row form-row mb-4">
                  <div className="col-md-4"></div>
                  <div className="col-md-8">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow-md bg-white p-4">
              <iframe
                className="pb-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15659.16664494769!2d77.32095495000002!3d11.1288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1660839868672!5m2!1sen!2sin"
                style={{ width: '100%' }}
                height="470"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsForm;