import React from "react";
import { toast } from "react-toastify";
// import "./ContactUs.css";

const ContactUs = () => {
  /* function to receive message on mail */
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "081a2add-f083-4d05-ab18-74d7baa4c29a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    event.target.reset();
    toast.success("Message sent successfully!!");
  };

  return (
    <>
      <div className="w-11/12 m-auto h-full">
        {/* hero section */}
        <div
          className="mb-4 contact-hero flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat rounded-sm"
          style={{
            backgroundImage: `url("/Contact/contact-hero-1.jpg")`,
          }}
        >
          <h1 className="contact-us text-6xl font-semibold text-white ">
            Contact Us
          </h1>
        </div>

        {/* input for contact */}
        <div className="contact-section mx-12 mt-12 mb-12 flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-around ">
          <div className="contact-input md:w-1/2 md:px-4 ">
            <h2 className="mb-4 text-3xl capitalize">Do you have any questions?</h2>
            <form onSubmit={onSubmit}>
              <input
                name="name"
                className="mb-4 w-full h-12 px-3 border border-gray-400"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                className="mb-4 w-full h-12 px-3 border border-gray-400"
                type="mail"
                placeholder="Your Email"
                required
              />
              <input
                name="subject"
                className="mb-4 w-full h-12 px-3 border border-gray-400"
                type="text"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                className="mb-4 w-full px-3 h-40 border border-gray-400"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="mb-4 w-1/2 h-12 bg-orange-500 text-white shadow-md flex justify-center items-center"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* add location */}
          <div className="contact-location md:w-1/2 md:px-4">
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://www.google.com/maps/search/1+branch---479,+(Baspadamka,+Tehsil+Pataudi,+Gurugram,+Haryana+-+122503,+India/@28.3379119,76.7788465,15z/data=!3m1!4b1?entry=ttu"
                rel="noopener noreferrer"
              >
                <img
                  src="/Contact/contact-location.png"
                  alt="contact location"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
