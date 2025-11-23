import Link from "next/link";
import { Banner } from "@/types/Banner";
import { Section } from "@/types/Section";
import ContactButton from "@/components/ContactButton";

interface Props {
  sectionData: Section;
  bannerList: Banner[];
}

export default function BannerComponent({ sectionData, bannerList }: Props) {
  const banner = bannerList[0];
  const title = banner.title.split("{name}");
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET!;
  const region = process.env.NEXT_PUBLIC_S3_REGION!;

  return (
    <>
      <div className="block fixed bg-primaryGreen md:relative h-6 z-50 w-full"></div>
      <div className="xl:p-20 pt-10 xl:pb-22">
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <span className="hidden md:block lg:block">
            <a href="#top" className="kill-link-style">
              <span className="inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold">
                UP
              </span>
            </a>
            <a
              href={"#projects"}
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Projects
            </a>
            <a
              href={"#extras"}
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Extras
            </a>
            <a
              href={"#exp"}
              className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
            >
              Exp
            </a>
            <ContactButton className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 px-2 xl:px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 rounded-md font-extrabold">
              Contact Me
            </ContactButton>
          </span>
          {/* find out the need */}
          {/* <span className="block md:hidden lg:hidden">
            <a href="#top">
              <span className="inline-block w-full text-center animate__animated animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold">
                UP
              </span>
            </a>
          </span> */}
          <div className="mt-20">
            <div className="w-full text-center">
              <img
                src={`https://${bucket}.s3.${region}.amazonaws.com/${banner.profileImageUrl}`}
                style={{ borderRadius: "100%" }}
                className="cursor-pointer xl:mt-10 inline-block animate__animated animate__fadeIn delay2 border-gray-900 duration-300 ease hover:border-primaryGreen shadow-md border-8 h-80 w-80 md:w-96 md:h-96"
              />
            </div>
            <div className="animate__animated animate__fadeInUp p-14 delay2 mt-10 xl:mt-14 text-3xl lg:text-5xl font-extrabold text-gray-900">
              {title[0]}
              <span className="text-primaryGreen-dark">{banner.name}</span>
              {title[1]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
