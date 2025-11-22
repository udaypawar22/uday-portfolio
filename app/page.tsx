import "animate.css";
import Link from "next/link";
import NavigationBar from "./components/NavigationBar";
import ContactButton from "./components/ContactButton";
import { certifications, eduAndExp, skills } from "./utils/constants";

const IMAGE_URL =
  "https://i1.rgstatic.net/ii/profile.image/11431281081537673-1661843400628_Q512/Monika-Jingar-2.jpg";
const ICON_URL =
  "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/181_Java-1024.png";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div className="block fixed md:relative h-6 bg-primaryGreen z-50 w-full"></div>
      <div className="xl:p-20 pt-10 xl:pb-22">
        {/* hero section */}
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <span className="hidden md:block lg:block">
            <Link href="#top" className="kill-link-style">
              <span className="inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold">
                UP
              </span>
            </Link>
            <Link
              href={"#projects"}
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Projects
            </Link>
            <Link
              href={"#extras"}
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Extras
            </Link>
            <Link
              href={"#media"}
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Media
            </Link>
            <ContactButton className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 px-2 xl:px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 rounded-md font-extrabold">
              Contact Me
            </ContactButton>
          </span>
          {/* find out the need */}
          <span className="block md:hidden lg:hidden">
            <Link href="#top" className="kill-link-style">
              <span className="inline-block w-full text-center animate__animated animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold">
                UP
              </span>
            </Link>
          </span>
          <div className="mt-20">
            <div className="w-full text-center">
              <img
                src={IMAGE_URL}
                style={{ borderRadius: "100%" }}
                className="cursor-pointer xl:mt-10 inline-block animate__animated animate__fadeIn delay2 border-gray-900 duration-300 ease hover:border-primaryGreen shadow-md border-8 h-80 w-80 md:w-96 md:h-96"
              />
            </div>
            <div className="animate__animated animate__fadeInUp p-14 delay2 mt-10 xl:mt-14 text-3xl lg:text-5xl font-extrabold text-gray-900">
              Hey, I'm <span className="text-primaryGreen-dark">Uday.</span>{" "}
              Here, you can check out what I'm working on. I try my best to
              create things with ❤
            </div>
          </div>
        </div>
      </div>
      {/* featured work */}
      <div className="p-4 md:p-20 bg-gray-900 text-gray-50">
        <div className="sm:w-12/12 animate__animated animate__fadeIn delay2 text-center md:w-12/12 col-centered">
          <div className="text-4xl w-full md:text-5xl lg:text-6xl pt-10 md:pt-0 font-extrabold">
            Featured Work
          </div>
          <div className="grid grid-cols-12 mt-8">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <a
                href="https://www.animalalliancepledge.org/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div className="project-picture rounded-t-2xl h-60 w-full animal-demo"></div>
                  <div className="project-description p-4 py-6 text-3xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-green-300 to-green-400 rounded-b-2xl">
                    Animal Alliance Pledge
                    <div className="font-bolder mt-2 text-xl ">
                      Helping the Planet by Helping Animals
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <a
                href="https://www.easy-emdr.com/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div className="project-picture rounded-t-2xl h-60 w-full animal-demo"></div>
                  <div className="project-description p-4 py-6 text-3xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-purple-300 to-purple-400 rounded-b-2xl">
                    Easy EMDR
                    <div className="font-bolder mt-2 text-xl ">
                      Simplifying Telehealth for EMDR Therapists
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4">
              <a
                href="https://www.boycottbuddy.app/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div className="project-picture rounded-t-2xl h-60 w-full animal-demo"></div>
                  <div className="project-description p-4 py-6 text-3xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-blue-300 to-blue-400 rounded-b-2xl">
                    Boycott Buddy
                    <div className="font-bolder mt-2 text-xl ">
                      Consumer transparency resources
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div
        id="projects"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            My Projects
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            I love to create things, and I'm always working on something new!
            You can view some of my favorite projects below.
          </div>

          <div className="grid grid-cols-12">
            {skills.map((skill: any, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 p-4"
              >
                <div className="text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  {skill.hasTag && (
                    <div className="absolute top-2 left-2 text-md font-extrabold rounded-lg p-1 bg-gray-900 text-gray-50">
                      {skill.tag}
                    </div>
                  )}
                  <div className="w-full text-center">
                    <img
                      src={ICON_URL}
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2 ">
                    <span className="text-3xl font-extrabold text-gray-900">
                      {skill.name}
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      {skill.profeciency}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* extras */}
      <div
        id="extras"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-900 text-gray-50"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            Extras
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            An incomplete list of some videos and writings that I've made,
            covering a wide variety of topics. Check them out if you like!
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-5 p-4">
              <a
                href="https://www.easy-emdr.com/blog.html"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly select-none shadow hover:shadow-xl  rounded-lg bg-primaryGreen hover:bg-primaryGreen-dark p-10 text-2xl md:text-4xl text-gray-900">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src={ICON_URL}
                      className="inline-block rounded-lg mr-3 bg-gray-50 shadow h-16 w-16 -mt-2"
                    />
                    Easy EMDR Blog
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    Writing about EMDR and mental health.
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-7 p-4">
              <a
                href="https://www.youtube.com/channel/UCGEWlEUCsPWaIkMNwpNROzQ"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer move-up-slightly select-none rounded-lg shadow hover:shadow-xl bg-primaryGreen hover:bg-primaryGreen-dark p-10 text-gray-900 text-2xl md:text-4xl">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src={ICON_URL}
                      className="inline-block rounded-lg mr-3 shadow h-16 w-16 -mt-2"
                    />
                    Youtube Channel
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    My disorganized playground of a Youtube channel haha
                  </div>
                </div>
              </a>
            </div>
          </div>

          {certifications.map((cert: any, index) => (
            <div key={index} className="mt-1 text-left w-full p-4">
              <div className="p-6 bg-transparent border-4 border-primaryGreenw-full h-full duration-200 move-up-slightly rounded-lg ease text-primaryGreen hover:text-gray-900 hover:bg-primaryGreen-dark hover-padding">
                <div className="font-extrabold text-3xl md:text-4xl inherit">
                  {`${cert.name} (${cert.year})`}
                </div>
                <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* experience */}
      <div
        id="media"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 text-4xl md:text-6xl pt-12 md:pt-0 font-extrabold">
            Media
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            I try to create projects that address social problems. Here's some
            media that has been written about projects I've worked on.
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 flex flex-col p-4">
              <a
                href="https://www.startribune.com/macalester-senior-makes-eye-movement-therapy-accessible-and-affordable-with-an-app/573372791/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl cursor-pointer hover:bg-primaryGreen text-primaryGreen hover:text-gray-900 bg-gray-900">
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    Star Tribune Feature{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block h-8 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    On making eye movement therapy more accessible.
                  </div>
                </div>
              </a>
            </div>

            {eduAndExp.map((item: any, index) => (
              <div
                key={index}
                className="col-span-12 items-stretch flex flex-col md:col-span-6 p-4"
              >
                <div className="flex-1 move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl hover:bg-primaryGreen text-primaryGreen hover:text-gray-900 bg-gray-900">
                  {item.year && (
                    <div className="absolute top-2 right-2 text-md font-extrabold rounded-lg p-1 text-gray-900 bg-gray-50">
                      {item.year}
                    </div>
                  )}
                  <div className="font-extrabold inherit text-3xl md:text-4xl">
                    {item.title}
                  </div>
                  <div className="text-white font-bold italic mt-2 text-2xl">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
