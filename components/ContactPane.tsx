import { Dispatch, SetStateAction } from "react";
import MailIcon from "./MailIcon";
import CloseIcon from "./CloseIcon";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function ContactPane({ setActive }: Props) {
  const contactPaneStyle = {
    left: "0",
    right: "0",
    overflowY: "auto" as const,
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "83%",
  };
  return (
    <div
      id="contact-me-pane"
      style={contactPaneStyle}
      className="fixed duration-500 ease-in-out border-4 text-center border-green-400 border-b-0 p-6 md:p-12 ease rounded-t-xl bg-gray-900 text-gray-50 shadow-xl left-0 z-30 w-11/12 auto bottom-0"
    >
      <div>
        <MailIcon className="h-12 w-12 inline-block" />
      </div>
      <div className="text-2xl no-select md:text-3xl lg:text-5xl font-extrabold">
        Contact Me
      </div>
      <button
        type="button"
        onClick={() => setActive(false)}
        className="absolute right-6 top-4 md:right-16 md:top-12 cursor-pointer"
      >
        <CloseIcon className="h-14 w-14" />
      </button>
      <div className="mt-10 text-left">
        <form
          action="https://formspree.io/f/mvolpedn"
          method="POST"
          data-tl-form-id="1"
        >
          <div className="text-gray-50 text-xl md:text-2xl font-extrabold">
            Your Name
          </div>
          <input
            type="text"
            required
            name="name"
            className="w-full mt-2 p-4 rounded-md font-bold text-gray-900 bg-white shadow text-xl md:text-2xl"
            placeholder="Enter name"
          />

          <div className="text-gray-50 text-xl mt-4 md:text-2xl font-extrabold">
            Your Email
          </div>
          <input
            type="email"
            required
            name="email"
            className="w-full mt-2 p-4 rounded-md shadow text-xl text-gray-900 bg-white font-bold md:text-2xl"
            placeholder="Enter email"
            data-tl-username-id="2"
          />

          <div className="text-gray-50 text-xl mt-4 md:text-2xl font-extrabold">
            Your Message
          </div>
          <textarea
            required
            name="message"
            className="w-full mt-2 p-4 custom-textarea rounded-md shadow text-gray-900 bg-white font-bold text-xl md:text-2xl"
            placeholder="Enter email"
          ></textarea>

          <button
            type="submit"
            className="no-select px-4 p-2 text-xl mt-5 md:text-2xl lg:text-3xl border-4 border-gray-50 inline-block rounded-md cursor-pointer duration-200 hover:bg-gray-50 hover:text-gray-900 font-extrabold"
          >
            Send Message{" "}
            <MailIcon className="h-7 -mt-1 ml-1 inline-block w-7" />
          </button>
        </form>
      </div>
    </div>
  );
}
