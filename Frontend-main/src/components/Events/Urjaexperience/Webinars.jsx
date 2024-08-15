import React from "react";

function Webinars() {
  return (
    <div>
      <div className="mx-8 md:mx-20 md:my-8 py-4 md:py-10">
        <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-8 text-center">
          Events and Programs
        </h1>
        <p className="text-slate-900 text-md md:text-lg my-4 md:mx-20 mb-8 md:text-center text-left">
          "The events were packed with exciting activities to enhance students
          knowledge in STEM. The event includes experiential learning,
          workshops, 3D animations, and visualization, and other activities. The
          workshops cover essential topics such as "pressure decrement",
          Capillary actions," "Electromagnetic and magnetic effects of current",
          "vacuum creation in space", "acid base indicator experiment" etc. "
        </p>
        <div className="flex-col flex md:flex-row justify-center items-center">
          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../Urjaexperience/1.jpg"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                SUSTAINA-CHEM DEBATE
              </h2>
              <p>
                The Sustaina-Chem Debate ignited discussions on sustainable
                chemistry within an industry marked by historical pollution.
                Participants debated whether the chemical industry is society's
                backbone, weighing complex obstacles against pioneering
                solutions. The debate showcased diverse perspectives and
                expertise, sparking meaningful dialogue. While the debate ended,
                its impact persisted, inspiring continued efforts towards a
                sustainable chemical industry. Through innovations and policy
                reforms, passionate students and forward-thinking leaders
                illuminated the path forward, proving the Sustaina-Chem Debate a
                catalyst for change.
              </p>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../Urjaexperience/2.jpg"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                Chem-Market Bidding
              </h2>
              <p>
                In the final round of UrjaXperience, the Chem-Market Bidding
                Challenge ignited entrepreneurial spirit and innovation on
                campus. Students tackled the extraction of alumina from its ore,
                optimizing efficiency and cost for equipment like grinders and
                filters. Success hinged on balancing performance and budget,
                with the lowest bid winning. As bids rose, participants
                showcased their chemical engineering knowledge and
                problem-solving skills. The event highlighted the best of
                entrepreneurship and innovation. Winners were celebrated for
                their achievements, embodying the dedication to push limits and
                inspire big dreams.
              </p>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 manual-shadow2 container m-4 rounded-2xl">
            <div className="card-body">
              <img
                src="../../Urjaexperience/7.jpg"
                className="rounded-2xl h-56"
                alt="Online Sessions"
              />
              <h2 className="text-amber-500 text-2xl font-bold mt-5 text-center">
                MOLECULAR WONDERS
              </h2>
              <p>
                Enter the lab for an adventure in molecular wonders! Don your
                lab coats, goggles, and let's explore the captivating realm of
                molecular structures. In this journey, every experiment reveals
                the magic of chemistry. Participants tackled tasks like
                synthesizing urea and ammonia, saponification, and PCR,
                transforming ordinary substances into extraordinary marvels. The
                vibrant colors and shapes of reactions left us breathless. As we
                conclude our adventure, we celebrate the beauty of science and
                the creativity of every participant, whether seasoned or novice.
                Each one contributed to uncovering the fascinating world of
                chemistry, turning "Wow!" into "What the...HELL!!".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
