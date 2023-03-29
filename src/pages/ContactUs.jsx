import React from "react";
import insta from '../assets/insta.png'
import linkedIn from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import FadeInSection from '../components/cards/FadeInSection'
import { Label,TextInput,Checkbox,Button,Textarea } from "flowbite-react";
import Nav from "../components/Nav";


export default function ContactUs() {
    return (
        <section id="contact">
       <section class="bg-white dark:bg-gray-900">
       <Nav />
  <div class="py-4 lg:py-6 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-lime-600 ">Contact Us</h2>
      {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
      <form action="#" >
        <div class="space-y-8 text-center">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-lime-600">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-lime-600">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-lime-600">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class=" text-sm font-medium text-center p-3 text-white rounded bg-lime-600 sm:w-fit hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700  dark:focus:ring-lime-800">Submit</button>
      </div>
      </form>
   </div>   
</section>
<div id="footer">
   <FadeInSection>
    <hr class="h-0.5 my-6 bg-lime-600 border-0 dark:bg-lime-700"/>
    </FadeInSection>
    <div className="flex flex-row justify-center p-5 m-5">
    <FadeInSection>
        <div className="flex flex-col basis-1/2 md:p-3">
            <div><p className="text-xl md:text-4xl lg:text-5xl font-bold text-lime-600">REACH US</p></div>
            <div className="flex flex-row justify-start my-2"><img src={mail} alt="..." className="h-7 w-7 m-1"/><p className="text-xs md:text-lg lg:text-xl font-extralight m-1">nitk@180dc.org</p></div>
            <div className="flex flex-row"><p className="flex flex-row text-xs md:text-lg lg:text-xl font-normal">We'd<div className="text-lime-600 text-xs md:text-lg lg:text-xl font-normal px-1">love to hear</div>from you!</p>
            </div>
            <div>
            <p className="text-xs md:text-lg lg:text-xl font-normal">Please don't hesitate to reach out.</p>
            </div>
        </div>
        </FadeInSection>
        <div className="basis-1/2">
        </div>
        <FadeInSection>
        <div className="flex flex-col md:flex-row md:justify-end basis-1/3 md:basis-1/2">
        <div className="flex flex-row h-max items-center md:px-4">
            <div className="items-center justify-center">
            <p className="text-xs md:text-lg font-extralight lg:text-xl">Follow us for more:</p>
            </div>
            <div className="flex flex-row">
            <a href="https://instagram.com/180dcnitk?igshid=YmMyMTA2M2Y=" target="_blank"><img src={insta} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
            <a href="https://in.linkedin.com/company/180dc-nitk" target="_blank"><img src={linkedIn} alt="..." className="h-6 w-6 md:h-14 md:w-14 md:mx-2"/></a>
            </div>
            </div>
        </div>
        </FadeInSection>
    </div> 
   </div>
        </section>

    )
}