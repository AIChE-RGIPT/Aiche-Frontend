import React from "react";

function Events() {
  const events = [
    {
      id: 1,
      title: "Visualization Of Heat and Work through Joule’s Experiment",
      image: "../../Events/1.png",
      description: `We recently held an engaging online session on "JOULE'S EXPERIMENT" using 3D animations for high schoolers. Over 70 participants attended, showing great enthusiasm. Our team presented the experiments clearly, and the 3D visuals were highly appreciated for explaining complex concepts effectively, making the session a resounding success for all involved.`,
    },
    {
      id: 2,
      title: "Career Counselling Webinar",
      image: "../../Events/2.png",
      description: `The career counseling webinar explored diverse career options, shedding light on various industries. It highlighted the skills and knowledge needed for success in different fields. Our respected seniors, currently interning in various sectors, shared valuable insights, providing attendees with a clearer roadmap for their professional journeys and future opportunities.`,
    },
    {
      id: 3,
      title: "Application of Deep Learning in Nanotechnology",
      image: "../../Events/3.png",
      description: `In this event, we explored how deep learning revolutionizes nanotechnology. The session covered various applications, from materials science to medical diagnostics, showcasing how machine learning models can analyze and predict nanoscale phenomena, enhancing our ability to design and utilize nanomaterials effectively in a range of advanced technological and scientific applications.`,
    },
    {
      id: 4,
      title:
        "Process Safety Management Technical Management and Ethical Issues",
      image: "../../Events/4.png",
      description: `Our session on Process Safety Management delved into the technical and ethical challenges in the field. We discussed best practices for ensuring safety in industrial processes, the importance of ethical decision-making, and how technical management plays a crucial role in preventing accidents, safeguarding people, and protecting the environment from harm.`,
    },
    {
      id: 7,
      title: "Energy Transition In Chemical Industry",
      image: "../../Events/7.png",
      description: `Our webinar on "Energy Transition in the Chemical Industry" featured Mr. Hanno Bruemmer, an Executive VP at Covestro. He shared insights on sustainable energy solutions, highlighting the industry's shift towards greener practices. Attendees gained a deeper understanding of how the chemical industry is adapting to meet environmental challenges through innovative strategies.`,
    },
    {
      id: 8,
      title: "Chemical Industrial Tragedies",
      image: "../../Events/8.png",
      description: `The session on chemical industrial tragedies involved in-depth discussions on major incidents, their causes, and environmental impacts. We explored critical safety measures for future chemical engineers to prevent such tragedies. The interactive format encouraged participants to think deeply about safety protocols and their vital role in protecting people and ecosystems.`,
    },
    {
      id: 10,
      title: "Meme-o-Making(Chem-E-Versary)",
      image: "../../Events/10.png",
      description: `To celebrate 7 years of success, AIChE RGIPT SC organized "Chem-E-Versary," starting with "Meme-o-Making." Participants turned everyday lab mishaps and late-night sessions into humorous memes, testing their wit and creativity. This event added a fun, light-hearted element to the celebration, showcasing the humor in the chemical engineering community.`,
    },
    {
      id: 11,
      title: "Chem-e-Jeopardy",
      image: "../../Events/11.png",
      description: `"Chem-E-Jeopardy," the second event of Chem-E-Versary, was a quiz competition designed to test participants' knowledge in chemical engineering. The event featured challenging questions across various topics, engaging teams in a competitive yet educational experience. It fostered learning through fun, reinforcing key concepts and encouraging collaborative problem-solving among participants.`,
    },
    {
      id: 12,
      title: "Solve the Mystery (DECRYPT)",
      image: "../../Events/12.png",
      description: `The third event of Chem-E-Versary, "Solve the Mystery (DECRYPT)," was an adventure full of suspense. Participants had to decode messages using a series of clues, testing their logical reasoning and problem-solving skills. This engaging event combined thrill and intellectual challenge, making it a standout in our celebration lineup.`,
    },
    {
      id: 13,
      title: "Gaming night",
      image: "../../Events/13.png",
      description: `Gaming Night was an exciting part of our events, offering a fun and challenging experience for all gamers. Participants tested their gaming skills in various games, competing in a friendly yet competitive atmosphere. This event provided a relaxing break from academic pressures, fostering camaraderie and teamwork among attendees through gaming.`,
    },
    {
      id: 14,
      title: "Importance Of Process Simulation and Optimization",
      image: "../../Events/14.png",
      description: `Our webinar on the Importance of Process Simulation and Optimization featured Mr. Henry Sulio, a young but highly knowledgeable Simulation Engineer at Honeywell. He shared insights into process engineering, emphasizing how simulation and optimization are crucial for efficient industrial operations. Attendees were inspired by his expertise and youthful perspective.`,
    },
    {
      id: 18,
      title: "Webinar on Electromagnetic and Magnetic Effect of Current",
      image: "../../Events/18.png",
      description: `Our K-12 team conducted an online webinar explaining the electromagnetic and magnetic effects of current to school students. Using real-life examples and practical demonstrations, the session was a success. Students gained a better understanding of these fundamental concepts, seeing their practical applications and relevance in everyday life.`,
    },
  ];

  return (
    <div>
      <h2 className=" font-bold mt-10 text-center text-4xl">Our Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:mx-24 my-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="card w-full bg-base-100 shadow-xl container"
          >
            <figure className="px-10 pt-10">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl w-96 h-72"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-amber-600">{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
