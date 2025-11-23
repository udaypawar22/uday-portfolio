import { Project } from "@/types/Project";
import { Section } from "@/types/Section";

interface Props {
  sectionData: Section;
  projectList: Project[];
}

export default function ProjectsComponent({ sectionData, projectList }: Props) {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET!;
  const region = process.env.NEXT_PUBLIC_S3_REGION!;
  return (
    <div id="projects" className="p-4 md:p-20 bg-gray-900 text-gray-50">
      <div className="sm:w-12/12 animate__animated animate__fadeIn delay2 text-center md:w-12/12 col-centered">
        <div className="text-4xl w-full md:text-5xl lg:text-6xl pt-10 md:pt-0 font-extrabold">
          {sectionData.title}
        </div>
        <div className="grid grid-cols-12 mt-8">
          {projectList.map((prj: Project) => (
            <div
              key={prj.id}
              className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 p-4"
            >
              <a href={prj.linkTo} target="_blank">
                <div className="cursor-pointer move-up-slightly duration-200 shadow-md hover:shadow-xl">
                  <div
                    style={{
                      backgroundImage: `url("https://${bucket}.s3.${region}.amazonaws.com/${prj.imageUrl}")`,
                    }}
                    className="project-picture rounded-t-2xl h-60 w-full"
                  ></div>
                  <div
                    style={{
                      backgroundColor: prj.bgColor ? prj.bgColor : "#f3f4f6",
                      color: prj.fgColor ? prj.fgColor : "#000000",
                    }}
                    className="project-description p-4 py-6 text-3xl font-extrabold text-center rounded-b-2xl"
                  >
                    {prj.title}
                    <div className="font-bolder mt-2 text-xl ">
                      {prj.description}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
