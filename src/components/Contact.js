import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";

const SERVICE_ID = "service_68kgtsp";
const TEMPLATE_ID = "template_ksy38c5";
const PUBLIC_KEY = "tKVlPHhey-eShbeyj";

function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = async () => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        alertify.alert("Send Email", "Success!", function () {
          alertify.success(`Send Email: ${result.text}`);
        });
      },
      (error) => {
        alertify.alert("Send Email", "Error!", function () {
          alertify.error(`Send Email: ${error.text}`);
        });
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-5 mt-16">
      <p className="mt-5 text-4xl w-fit purpleText">Contact</p>

      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="w-full p-8 m-5 bg-black border-2 border-purple-400 shadow-md rounded-3xl shadow-purple-400 max-w-[600px]"
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
            className="contact__input"
            {...register("user_name", { required: true })}
          />

          {errors.user_name && (
            <p className="contact__p--valid">This field is required</p>
          )}
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
            className="contact__input"
            {...register("user_email", { required: true })}
          />

          {errors.user_email && (
            <p className="contact__p--valid">This field is required</p>
          )}
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
            className="contact__input"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="contact__p--valid">This field is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-2 hover:scale-105 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
