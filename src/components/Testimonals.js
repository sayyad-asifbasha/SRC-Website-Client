import React, { useState } from "react";
import "../styles/Testimonals.css";
import phone from "../assets/images/contact-image-3.jpg";
export default function Testimonals() {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );

  const initTestimonials = [
    {
      name: "June Cha",
      position: "Director",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    },
    {
      name: "Iida Niskanen",
      position: "Student",
      photo: "https://randomuser.me/api/portraits/women/67.jpg",
      text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: "Renee Sims",
      position: "Faculty",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: "Sasha Ho",
      position: "Faculty",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    },
    {
      name: "Veeti Seppanen",
      position: "software engineer",
      photo: "https://randomuser.me/api/portraits/men/97.jpg",
      text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
  ];
  const [testimonals, setTestimonals] = useState(initTestimonials);
  let [itemLength, setItemLength] = useState(0);

  const next = () => {
    setItemLength((prevItemLength) => {
      return prevItemLength === testimonals.length - 1 ? 0 : prevItemLength + 1;
    });
  };

  const prev = () => {
    setItemLength((prevItemLength) => {
      return prevItemLength === 0 ? testimonals.length - 1 : prevItemLength - 1;
    });
  };

  return (
    <>
      <div className="testimonial-container">
        <div className="btn" id="btn-prev" onClick={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            style={{ transform: "rotate(180deg)" }}
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div className="btn" id="btn-next" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        {testimonals &&
          testimonals.map((item, index) => {
            if (index === itemLength) {
              console.log(item);
              return (
                <>
                  <p className="testimonial">{item.text}</p>
                  <div className="user">
                    <img src={phone} alt="user" className="user-image" />
                    <div className="user-details">
                      <h4 className="username">{item.name}</h4>
                      <p className="role">{item.position}</p>
                    </div>
                  </div>
                </>
              );
            }
            return null;
          })}

        {/* <div className="progress-dots" id="progress-dots">
          {initTestimonials &&
            initTestimonials.map((item) => {
              return <div className="progress-dot"></div>;
            })}
        </div> */}
      </div>
    </>
  );
}
