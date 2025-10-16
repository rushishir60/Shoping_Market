import React from "react";


function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row about my-5">
            <h2>Contact Us</h2>
          </div>

          {/* Contact Box */}
          <div className="row row-cols-lg-2 row-cols-sm-2 row-cols-1 gy-4">
            <div className="col">
              <div className="py-4 px-4">
                <label className="fs-1">
                  Name <sup style={{ color: "red" }}>*</sup>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="px-2 w-100 bg-white queryForm"
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="py-4 px-4">
                <label className="fs-1">
                  Email <sup style={{ color: "red" }}>*</sup>
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-2 w-100 bg-white queryForm"
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="py-4 px-4">
                <label className="fs-1">Phone</label>
                <br />
                <input
                  type="number"
                  placeholder="Enter your phone no"
                  className="px-2 w-100 bg-white queryForm"
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="py-4 px-4">
                <label className="fs-1">
                  Message <sup style={{ color: "red" }}>*</sup>
                </label>
                <br />
                <textarea
                  rows="4"
                  cols="30"
                  className="px-2 w-100 py-2 bg-white queryForm"
                  required
                  defaultValue="Your message"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="container-fluid">
        <div className="container formSubmitBtn">
          <div className="row mb-5" style={{justifyContent:"center"}}>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
