import React from "react";

function Footer() {
  const handleDownload = () => {
    const pdfUrl = "/magazine/Annual Magazine.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AIChE-RGIPT-Annual-Magazine.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="card w-3/4 bg-slate-200 text-slate-950 mx-auto shadow-xl my-5 py-10 manual-shadow">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">Download Our Magazine</h2>
          <p>
            Keep up with our latest news and events, download our newsletter.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-amber-400 text-amber-800 hover:bg-amber-300"
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <footer className="footer p-10 bg-neutral text-neutral-content justify-between md:px-20">
        <aside>
          <img src="../../logo.png" className="h-20" alt="Company Logo" />
          <p>
            AIChE-RGIPT Student Chapter
            <br />
            AIChE promotes chemical engineering excellence with resources,
            networking, and training.
            <br />
           Rajiv Gandhi Institute of Petroleum Technology
            <br />
            Mubarakhpur Mukhetia More, Bahadurpur, Jais,
            <br />
            Post Harbanshganj, Amethi - 229304, Uttar Pradesh
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/company/aiche-rgipt-studentchapter/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/aiche_rgipt?igsh=MW4zdmpteG5tN2NrNw==">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </svg>
            </a>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title">Website Developed By</h6>
          <img src="../../signature.png" className="w-32 h-10 mb-4"></img>
          <h6 className="footer-title">Contact me </h6>
          <div className="grid grid-flow-col gap-4 items-center">
            <a href="https://my-portfolio-qpv9.onrender.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"
                />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/nitesh-saini-b936b1257/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=22cs2015@rgipt.ac.in&su=Subject&body=Body&tf=1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0 0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0 1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
