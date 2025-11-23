import { Dispatch, SetStateAction } from "react";
import MailIcon from "./MailIcon";
import CloseIcon from "./CloseIcon";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
  className: string;
}

const options = [
  {
    id: 1,
    link: "",
    label: "udaysinghpawar0302@gmail.com",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/udaysingh-pawar/",
    label: "Linkedin",
  },
  {
    id: 3,
    link: "https://github.com/udaypawar22/",
    label: "Github",
  },
  {
    id: 4,
    link: "https://x.com/uday_Pawar22",
    label: "X.com",
  },
];

export default function ContactPane({ setActive, className }: Props) {
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
      className={`fixed duration-500 ease-in-out border-4 text-center border-green-400 border-b-0 p-6 md:p-12 ease rounded-t-xl bg-gray-900 text-gray-50 shadow-xl left-0 z-30 w-11/12 auto ${className}`}
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
      <div className="mt-10 text-lg md:text-xl font-semibold w-full flex flex-wrap gap-2 items-center justify-center">
        {options.map((opt: any) => {
          if (opt.link !== "")
            return (
              <a
                className="animate__animated animate__bounceInLeft animate__delay-3s underline move-up-slightly"
                key={opt.id}
                href={opt.link}
                target="_blank"
              >
                {opt.label}
              </a>
            );
          else
            return (
              <span
                className="animate__animated animate__bounceInLeft animate__delay-3s underline move-up-slightly"
                key={opt.id}
              >
                {opt.label}
              </span>
            );
        })}
      </div>
    </div>
  );
}
