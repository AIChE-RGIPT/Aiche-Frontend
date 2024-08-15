import React, { useState } from "react";
import { toast } from "react-toastify";

function Main() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("https://aiche-rgipt.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("Contact information sent successfully");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Error sending contact information");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="mx-4 flex flex-col lg:flex-row lg:justify-between items-center md:mx-24">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="font-extrabold my-2 text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 sm:mt-16 md:mt-0">
              Contact Us
            </h1>
            <p className="md:py-4 text-xs sm:text-sm md:text-lg">
              We’re happy to answer any questions you have or provide you with
              an estimate. Just send us a message in the form below with any
              question you may have.
            </p>
          </div>
          <div className="card w-full max-w-2xl shadow-2xl bg-base-100 mb-10 lg:mb-0">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    YOUR NAME
                  </span>
                </label>
                <div className="indicator">
                  <span className="indicator-item badge bg-red-500 text-xs">
                    Required
                  </span>
                  <input
                    type="text"
                    placeholder="Write your name"
                    className="input input-bordered w-full text-xs sm:text-sm"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    YOUR E-MAIL (required)
                  </span>
                </label>
                <div className="indicator">
                  <span className="indicator-item badge bg-red-500 text-xs">
                    Required
                  </span>
                  <input
                    type="email"
                    placeholder="Write your email (College email)"
                    className="input input-bordered w-full text-xs sm:text-sm"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">SUBJECT</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full text-xs sm:text-sm"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    YOUR MESSAGE
                  </span>
                </label>
                <textarea
                  placeholder="Write your message"
                  className="textarea textarea-bordered w-full text-xs sm:text-sm"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 w-full text-xs sm:text-sm"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
