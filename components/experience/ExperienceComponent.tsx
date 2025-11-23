import { Experience } from "@/types/Experience";
import { Section } from "@/types/Section";
import { eduAndExp } from "@/utils/constants";
import ArrowIcon from "../ArrowIcon";

interface Props {
  sectionData: Section;
  experienceList: Experience[];
}
export default function ExperienceComponent({
  sectionData,
  experienceList,
}: Props) {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET!;
  const region = process.env.NEXT_PUBLIC_S3_REGION!;
  const resume: Experience = experienceList.splice(0, 1)[0];
  const others: Experience[] = experienceList.splice(0);
  return (
    <div
      id="exp"
      className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
    >
      <div className="sm:w-12/12 md:w-12/12 col-centered">
        <div className="p-4 text-4xl md:text-6xl pt-12 md:pt-0 font-extrabold">
          {sectionData.title}
        </div>
        <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
          {sectionData.subtitle}
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col p-4">
            <a
              href={`https://${bucket}.s3.${region}.amazonaws.com/${resume.linkTo}`}
              target="_blank"
            >
              <div className="move-up-slightly p-6 md:p-10 rounded-lg shadow hover:shadow-xl cursor-pointer hover:bg-primaryGreen text-primaryGreen hover:text-gray-900 bg-gray-900">
                <div className="font-extrabold inherit text-3xl md:text-4xl">
                  {resume.title} <ArrowIcon />
                </div>
                <div className="text-white font-bold italic mt-2 text-2xl">
                  {resume.description}
                </div>
              </div>
            </a>
          </div>

          {others.map((item: Experience) => (
            <div
              key={item.id}
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
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
