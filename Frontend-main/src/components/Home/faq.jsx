import React from 'react'

function faq() {
  return (
    <div>
      <h1 className="text-amber-600 text-4xl font-extrabold mb-4 mt-20 md:mt-40 text-center">
        Do you have Questions ?
      </h1>
      <h3 className="text-slate-800 text-xl md:text-2xl font-bold text-center">
        We have answers (Well most of the time!)
      </h3>
      <p className="text-slate-900 my-3 text-center md:text-base text-sm">
        Below you will find the answers of the most common questions you have.
        Please feel free to contact us , if have another doubts.
      </p>
      <div className="accordian mx-6 md:mx-20">
        <div className="collapse collapse-arrow bg-amber-200 my-4">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Q1. What is AIChE?
          </div>
          <div className="collapse-content">
            <p className="md:text-base text-sm">
              AIChE (American Institute of Chemical Engineers) is a professional
              organization for chemical engineers. It provides members with
              resources such as industry publications, networking opportunities,
              professional development, and access to conferences and technical
              training. AIChE aims to promote excellence in chemical engineering
              and support its members in their careers through various programs
              and initiatives.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-amber-200 my-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Q2. Is there a membership fee to join the AIChE RGIPT Student
            Chapter?
          </div>
          <div className="collapse-content">
            <p>
              No, there is no fee to join the AIChE RGIPT Student Chapter.
              However, if you wish to purchase chapter merchandise, there is a
              cost of Rs.499.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-amber-200 my-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Q.3 How can I join the AIChE RGIPT Student Chapter?
          </div>
          <div className="collapse-content">
            <p>
              To join the AIChE RGIPT Student Chapter, you can reach out to any
              of the chapter's team leaders. They will provide you with detailed
              information and guidance on the joining process.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-amber-200 my-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Q4.What are the benefits of joining the AIChE RGIPT Student Chapter?
          </div>
          <div className="collapse-content">
            <p>
              Joining the AIChE RGIPT Student Chapter offers numerous benefits,
              including:
              <ul className="list-disc px-8">
                <li>
                  Access to a global network of professionals and students
                </li>
                <li>Opportunities to attend international conferences.</li>
                <li>
                  Enhanced internship and job placement guidance from
                  experienced professionals.
                </li>
                <li>
                  Development of leadership and professional skills through
                  various chapter activities.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-amber-200 my-4 mb-8">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Q5.What kind of activities and opportunities does the AIChE RGIPT
            Student Chapter offer?
          </div>
          <div className="collapse-content">
            <p>
              The AIChE RGIPT Student Chapter organizes a variety of activities
              and opportunities for its members, including:
              <ul className="list-disc px-8">
                <li>
                  Workshops and seminars on the latest developments in chemical
                  engineering.
                </li>
                <li>Networking events with industry professionals.</li>
                <li>Collaborative projects and research opportunities</li>
                <li>
                  Participation in national and international AIChE events and
                  competitions.
                </li>
                <li>Community service initiatives and outreach programs.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default faq