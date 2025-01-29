import React, { useState } from "react";
import { toast } from "react-toastify";

function Merchandise() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    tshirtname: "",
    size: "",
    model: "",
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
          contact: "",
          tshirtname: "",
          size: "",
          model: "",
        });
      } else {
        toast.error("Error sending contact information");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
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
        Delivery time: Minimum 3 days to Maximum of 7 days, No shipping charges are applicable
      </h3>

      {/* Razorpay Payment Button Script */}
      <script
        src="https://checkout.razorpay.com/v1/payment-button.js"
        data-payment_button_id="pl_Pm8L2ZDpV8b5db"
        async
      ></script>

      {/* Merchandise Carousel */}
      <div className="flex justify-center items-center">
        <div className="carousel carousel-center max-w-6xl p-4 mb-10 space-x-4 bg-amber-100 rounded-box">
          {["Zero_Emissions.png", "Zero_Emissions_back.png", "catalyst blue.png", "catalyst blue_back.png"].map((src, index) => (
            <div className="carousel-item" key={index}>
              <img src={`/${src}`} className="rounded-box h-96 w-96" alt={`T-shirt ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="flex justify-center items-center">
        <button className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 mb-20">
          <a href="https://razorpay.me/@aichergipt" className="block w-full text-center">
            Buy Now!
          </a>
        </button>
      </div>

      {/* Modal for Form */}
      <dialog id="my_modal_2" className="modal w-[95vw] md:w-full">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4">Fill the form</h3>
          <div className="card w-full max-w-sm bg-base-100">
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
                  value={form.name}
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
                  className="input input-bordered"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name to be Printed</span>
                </label>
                <input
                  type="text"
                  name="tshirtname"
                  placeholder="Your on Merch Name"
                  className="input input-bordered"
                  value={form.tshirtname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Size</span>
                </label>
                <input
                  type="text"
                  name="size"
                  placeholder="Available: S, M, L, XL, XXL"
                  className="input input-bordered"
                  value={form.size}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Color</span>
                </label>
                <input
                  type="text"
                  name="model"
                  placeholder="Color"
                  className="input input-bordered"
                  value={form.model}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact number"
                  className="input input-bordered"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-amber-300 text-amber-800 hover:bg-amber-400">
                  Submit and Pay
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-action w-full">
          <button
            className="btn bg-rose-300 text-rose-800 hover:bg-rose-400 mt-4"
            onClick={() => document.getElementById("my_modal_2").close()}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Merchandise;
