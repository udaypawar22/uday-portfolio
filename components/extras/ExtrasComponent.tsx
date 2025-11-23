import { Extra } from "@/types/Extra";
import { Section } from "@/types/Section";

interface Props {
  sectionData: Section;
  extraList: Extra[];
}

const ICON_URL =
  "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/181_Java-1024.png";

export default function ExtrasComponent({ sectionData, extraList }: Props) {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET!;
  const region = process.env.NEXT_PUBLIC_S3_REGION!;
  const socials: Extra[] = extraList.splice(0, 2);
  const extras: Extra[] = extraList.splice(2);
  return (
    <div
      id="extras"
      className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-900 text-gray-50"
    >
      <div className="sm:w-12/12 md:w-12/12 col-centered">
        <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
          {sectionData.title}
        </div>
        <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
          {sectionData.subtitle}
        </div>

        <div className="grid grid-cols-12">
          {socials.map((item: Extra, index) => (
            <div
              key={item.id}
              className={`${
                index == 0 ? "md:col-span-5" : "md:col-span-7"
              } col-span-12 p-4`}
            >
              <a href={item.linkTo} target="_blank">
                <div className="cursor-pointer move-up-slightly select-none shadow hover:shadow-xl  rounded-lg bg-primaryGreen hover:bg-primaryGreen-dark p-10 text-2xl md:text-4xl text-gray-900">
                  <div className="font-extrabold text-gray-900">
                    <img
                      src={`https://${bucket}.s3.${region}.amazonaws.com/${item.iconUrl}`}
                      className="inline-block rounded-lg mr-3 p-2 bg-gray-50 shadow h-16 w-16 -mt-2"
                    />
                    {item.title}
                  </div>
                  <div className="font-extrabold text-lg md:text-2xl mt-2">
                    {item.description}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        {extras.map((item: Extra) => (
          <div key={item.id} className="mt-1 text-left w-full p-4">
            <div className="p-6 bg-transparent border-4 border-primaryGreen w-full h-full duration-200 move-up-slightly rounded-lg ease text-primaryGreen hover:text-gray-900 hover:bg-primaryGreen-dark hover-padding relative">
              {item.linkTo && (
                <a
                  href={`https://${bucket}.s3.${region}.amazonaws.com/${item.linkTo}`}
                  className="absolute inset-0 z-10"
                  target="_blank"
                ></a>
              )}
              <div className="font-extrabold text-3xl md:text-4xl inherit">
                {`${item.title} | ${item.year ? item.year : ""}`}
              </div>
              <div className="font-bold italic mt-2 text-2xl md:text-3xl text-white">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
