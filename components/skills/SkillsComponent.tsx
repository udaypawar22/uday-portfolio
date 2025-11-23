import { Section } from "@/types/Section";
import { Skill } from "@/types/Skill";
import { SkillCategory } from "@/types/SkillCategory";

interface Props {
  sectionData: Section;
  skillCategoryList: SkillCategory[];
}

interface FlattenedSkills {
  id: string;
  name: string;
  logoUrl: string;
  level: number;
  orderIndex: number;
  categoryName: string;
}

export default function SkillsComponent({
  sectionData,
  skillCategoryList,
}: Props) {
  const bucket = process.env.NEXT_PUBLIC_S3_BUCKET!;
  const region = process.env.NEXT_PUBLIC_S3_REGION!;
  const flattenedSkills: FlattenedSkills[] = skillCategoryList.flatMap(
    (category) =>
      category.skills.map((skill) => ({
        ...skill,
        categoryName: category.name,
      }))
  );

  return (
    <div
      id="skills"
      className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
    >
      <div className="sm:w-12/12 md:w-12/12 col-centered">
        <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
          {sectionData.title}
        </div>
        <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
          {sectionData.subtitle}
        </div>

        <div className="grid grid-cols-12">
          {flattenedSkills.map((skill: FlattenedSkills) => (
            <div
              key={skill.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 p-4"
            >
              <div className="text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                <div className="absolute top-2 left-2 text-md font-extrabold rounded-lg p-1 bg-gray-900 text-gray-50">
                  {skill.categoryName}
                </div>
                <div className="w-full text-center">
                  <img
                    src={`https://${bucket}.s3.${region}.amazonaws.com/${skill.logoUrl}`}
                    className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                  />
                </div>
                <div className="mt-2 ">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {skill.name}
                  </span>
                  <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                    {skill.level}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
