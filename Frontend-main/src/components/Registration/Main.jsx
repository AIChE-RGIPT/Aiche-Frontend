import React, { useState } from "react";
import { toast } from "react-toastify";

function Main() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    abstract: "",
    CV: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("abstract", form.abstract);
    formData.append("CV", form.CV);

    try {
      let response = await fetch("https://aiche-backend-1.onrender.com/registration", {
        method: "POST",
        body: formData, // Use formData directly
      });

      if (response.ok) {
        toast.success("Registration information sent successfully");
        setForm({
          name: "",
          email: "",
          abstract: "",
          CV: null,
        });
      } else {
        toast.error("Error in sending Registration information");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="mt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="mx-4 flex flex-col lg:flex-row lg:justify-between items-center gap-0 lg:gap-72 ">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="font-extrabold dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 md:mt-0">
              Registration
            </h1>
            <p className="md:py-4 text-xs sm:text-sm md:text-lg">
              Registration of Speaker for Interactive Session at AIChE RGIPT
            </p>
          </div>
          <div className="card w-full max-w-2xl shadow-2xl bg-base-100 mb-10 lg:mb-0 ">
            <form
              className="card-body "
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    Name of Speaker
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
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    Email of Speaker
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
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                </div>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    Abstract for Webinar
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Abstract"
                  className="input input-bordered w-full text-xs sm:text-sm"
                  name="abstract"
                  onChange={handleChange}
                  value={form.abstract}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-xs sm:text-sm">
                    CV of Speaker
                  </span>
                </label>
                <input
                  type="file"
                  name="CV"
                  onChange={handleChange}
                  className="input input-bordered p-2 w-full text-xs sm:text-sm"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 w-full text-xs sm:text-sm"
                  type="submit"
                  value="Register"
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
