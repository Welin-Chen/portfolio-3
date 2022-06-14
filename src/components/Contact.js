import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_68kgtsp";
const TEMPLATE_ID = "template_ksy38c5";
const PUBLIC_KEY = "tKVlPHhey-eShbeyj";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Send email >>> ", result.text);
        alert("Send email >>> ", result.text);
      },
      (error) => {
        console.log("Send email >>> ", error.text);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-24">
      <p className="mt-5 text-4xl w-fit purpleText">Contact</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full p-8 m-8 bg-black border-2 border-purple-400 shadow-md rounded-3xl shadow-purple-400 max-w-[600px]"
      >
        <div>
          <label htmlFor="name" className="block font-bold">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            id="name"
            className="w-full p-2 mb-3 text-gray-600 border-2 border-purple-500 rounded peer focus:outline-none"
            required
          />

          <p className="invisible font-medium text-red-600 dark:text-red-500 peer-invalid:visible">
            Please enter your name
          </p>
          <p className="visible font-medium text-green-600 dark:text-green-500 peer-invalid:invisible">
            ok
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block font-bold">
            Email
          </label>

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            id="email"
            className="w-full p-2 mb-3 text-gray-600 border-2 border-purple-500 rounded focus:outline-none "
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-bold">
            Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            id="message"
            className="w-full p-2 mb-3 text-gray-600 border-2 border-purple-500 rounded focus:outline-none "
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:scale-105 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
