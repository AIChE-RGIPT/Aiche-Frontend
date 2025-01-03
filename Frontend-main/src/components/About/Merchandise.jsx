import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Merchandise() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
  });

    const handleChange = (event) => {
      setForm((prevForm) => ({
        ...prevForm,
        [event.target.name]: event.target.value,
      }));
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("https://aiche-rgipt.onrender.com/buy", {
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
          contact:"",
        });
      } else {
        toast.error("Error sending contact information");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center my-8 text-amber-600 text-2xl md:text-3xl font-bold mt-10">
        Exclusive AIChE RGIPT Merchandise
      </h1>
        <h2 className="text-center my-8 text-amber-400 text-2xl md:text-2xl font-bold mt-10">
        Hoodie: Rs 670, Membership: Rs 400, Membership+Hoodie: Rs 820
      </h2>
        <h3 className="text-center my-8 text-amber-200 text-2xl md:text-2xl font-bold mt-10">
        Delivery time: Minimum 3 days to Maximum of 7 days, No shipping charges are applicable
      </h3>
      <div className="flex justify-center items-center">
        <div className="carousel carousel-center max-w-6xl p-4 mb-10 space-x-4 bg-amber-100 rounded-box">
          <div className="carousel-item">
            <img
              src="/Zero_Emissions.png"
              className="rounded-box h-96 w-96"
              alt="T-shirt 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Zero_Emissions_back.png"
              className="rounded-box h-96 w-96"
              alt="T-shirt 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/catalyst blue.png"
              className="rounded-box h-96 w-96"
              alt="T-shirt 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/catalyst blue_back.png"
              className="rounded-box h-96 w-96"
              alt="T-shirt 4"
            />
          </div>


          
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 mb-20"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Buy now
        </button>
        <dialog id="my_modal_2" className="modal w-[95vw] md:w-full">
          <div className="modal-box flex flex-col items-center ">
            <h3 className="font-bold text-lg mb-4">Fill the form</h3>
            <div className="card w-full max-w-sm  bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input input-bordered"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                 <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name to be Printed</span>
                  </label>
                  <input
                    type="tshirtname"
                    name="tshirtname"
                    placeholder="Your on Merch Name"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Size</span>
                  </label>
                  <input
                    type="size"
                    name="size"
                    placeholder="Available: S,M,L,XL,XXL"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Cost</span>
                  </label>
                  <input
                    type="cost"
                    name="cost"
                    placeholder="Cost"
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact</span>
                  </label>
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact number"
                    className="input input-bordered"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-amber-300 text-amber-800 hover:bg-amber-400"
                  >
                    Submit and Pay
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-action w-full">
              <button
                className="btn bg-rose-300 text-rose-800 hover:bg-rose-400 mt-4"
                onClick={() => document.getElementById("my_modal_2").close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Merchandise;
