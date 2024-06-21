import React, { useEffect } from "react";
import DomainMembers from "./DomainMembers";
// import Navbar from "./Navbar";
import Carousal from "./Carousal";
import LeaderBoard from "./LeaderBoard";

export default function Domains() {
  return (
    <>
      {<Carousal />}
      {<LeaderBoard />}
      {<DomainMembers />}
    </>
  );
}

// <!--
//   Design inspiration from Dribbble:
//   "Day 024 — Testimonials | 100 days UI challenge" by Dima Groshev
//   Link: https://dribbble.com/shots/19211573-Day-024-Testimonials-100-days-UI-challenge
// -->

// <!--=============== FONT AWESOME ===============-->
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

// <div class="testimonial-container">
//   <div class="btn" id="btn-prev"><i class="fa-solid fa-chevron-left"></i></div>
//   <div class="btn" id="btn-next"><i class="fa-solid fa-chevron-right"></i></div>
//   <div class="stars">
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//   </div>
//   <p class="testimonial">
//     I've worked with literally hundreds of HTML/CSS developers and I have to
//     say the top spot goes to this guy. This guy is an amazing developer. He
//     stresses on good, clean code and pays heed to the details. I love
//     developers who respect each and every aspect of a throughly thought out
//     design and do their best to put it in code. He goes over and beyond and
//     transforms ART into PIXELS - without a glitch, every time.
//   </p>
//   <div class="user">
//     <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" class="user-image" />
//     <div class="user-details">
//       <h4 class="username">Miyah Myles</h4>
//       <p class="role">Marketing</p>
//     </div>
//   </div>
//   <div class="progress-dots" id="progress-dots"></div>

// </div>

// @import url("https://fonts.googleapis.com/css?family=Montserrat");

// * {
//   box-sizing: border-box;
// }

// body {
//   background-color: #eee;
//   font-family: "Montserrat", sans-serif;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   overflow: hidden;
//   margin: 0;
//   padding: 10px;
// }

// .testimonial-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: end;
//   gap: 2rem;
//   background-color: #fff;
//   color: #333;
//   border-radius: 15px;
//   margin: 20px auto;
//   padding: 50px 80px;
//   width: 800px;
//   min-height: 430px;
//   position: relative;
// }

// .stars {
//   font-size: 14px;
// }

// .testimonial {
//   display: flex;
//   align-items: center;
//   text-align: center;
//   font-weight: 900;
//   height: 100%;
//   line-height: 28px;
//   margin: 0;
// }

// .user {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
// }

// .user .user-image {
//   border-radius: 50%;
//   height: 50px;
//   width: 50px;
//   object-fit: cover;
// }

// .user .user-details {
//   text-align: center;
// }

// .user .username {
//   margin: 0;
//   font-size: 14px;
// }

// .user .role {
//   margin: 0;
//   font-size: 12px;
// }

// .progress-dots {
//   display: flex;
//   gap: 5px;
// }

// .progress-dot {
//   width: 5px;
//   height: 5px;
//   background-color: #eee;
//   border-radius: 50%;
// }

// .progress-dot.active {
//   background-color: #555;
// }

// .btn {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 30px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #eee;
//   font-size: 10px;
//   cursor: pointer;
//   transition: 0.1s ease;
// }

// .btn:hover {
//   background-color: #eee;
// }

// #btn-prev {
//   left: 25px;
// }

// #btn-next {
//   right: 25px;
// }

// const testimonialsContainer = document.querySelector(".testimonials-container");
// const testimonial = document.querySelector(".testimonial");
// const userImage = document.querySelector(".user-image");
// const username = document.querySelector(".username");
// const role = document.querySelector(".role");
// const btnPrev = document.getElementById("btn-prev");
// const btnNext = document.getElementById("btn-next");
// const progressDots = document.getElementById("progress-dots");

// const testimonials = [
//   {
//     name: "June Cha",
//     position: "Software Engineer",
//     photo: "https://randomuser.me/api/portraits/women/44.jpg",
//     text:
//       "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
//   },
//   {
//     name: "Iida Niskanen",
//     position: "Data Entry",
//     photo: "https://randomuser.me/api/portraits/women/67.jpg",
//     text:
//       "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
//   },
//   {
//     name: "Renee Sims",
//     position: "Receptionist",
//     photo: "https://randomuser.me/api/portraits/women/8.jpg",
//     text:
//       "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
//   },
//   {
//     name: "Sasha Ho",
//     position: "Accountant",
//     photo:
//       "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
//     text:
//       "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
//   },
//   {
//     name: "Veeti Seppanen",
//     position: "Director",
//     photo: "https://randomuser.me/api/portraits/men/97.jpg",
//     text:
//       "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
//   }
// ];

// let idx = 0;

// testimonials.forEach((testimonial) => {
//   const dot = document.createElement("div");
//   dot.classList.add("progress-dot");
//   progressDots.appendChild(dot);
// });

// function displayTestimonial() {
//   const { name, position, photo, text } = testimonials[idx];

//   testimonial.innerHTML = text;
//   userImage.src = photo;
//   username.innerHTML = name;
//   role.innerHTML = position;

//   updateProgressDots();
// }

// function updateProgressDots() {
//   const dots = progressDots.children;
//   [...dots].forEach((dot) => {
//     dot.classList.remove("active");
//   });
//   dots[idx].classList.add("active");
// }

// btnNext.addEventListener("click", () => {
//   idx === testimonials.length - 1 ? (idx = 0) : idx++;
//   console.log(idx);

//   displayTestimonial();
// });

// btnPrev.addEventListener("click", () => {
//   idx === 0 ? (idx = testimonials.length - 1) : idx--;
//   console.log(idx);

//   displayTestimonial();
// });

// displayTestimonial();
