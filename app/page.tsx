import "animate.css";
import NavigationBar from "@/components/NavigationBar";
import { Section } from "@/types/Section";
import { sectionMapper } from "@/utils/mappers/sectionMapper";
import { createClient } from "@/utils/supabase/server";
import BannerComponent from "@/components/banner/BannerComponent";
import ProjectsComponent from "@/components/projects/ProjectsComponent";
import SkillsComponent from "@/components/skills/SkillsComponent";
import ExtrasComponent from "@/components/extras/ExtrasComponent";
import ExperienceComponent from "@/components/experience/ExperienceComponent";
import { bannerMapper } from "@/utils/mappers/bannerMapper";
import { projectMapper } from "@/utils/mappers/projectMapper";
import { skillCategoryMapper } from "@/utils/mappers/skillCategoryMapper";
import { extraMapper } from "@/utils/mappers/extraMapper";
import { experienceMapper } from "@/utils/mappers/experienceMapper";
import MobileNav from "@/components/MobileNav";

export default async function Home() {
  const supabase = await createClient();

  const { data: sectionList, error: sectionError } = await supabase
    .from("sections")
    .select("*")
    .order("order_index");

  const mappedSectionList: Section[] | undefined =
    sectionList?.map(sectionMapper);

  const { data: bannerList, error: bannerError } = await supabase
    .from("banner")
    .select("*");

  const { data: projectList, error: projectError } = await supabase
    .from("projects")
    .select("*")
    .order("order_index");

  const { data: skillCategoryList, error: skillCategoryError } = await supabase
    .from("skill_categories")
    .select(
      `
      id,
      name,
      order_index,
      skills (
        id,
        name,
        logo_url,
        level,
        order_index
      )
      `
    )
    .order("order_index");

  const { data: extraList, error: extraError } = await supabase
    .from("extras")
    .select("*")
    .order("order_index");

  const { data: experienceList, error: experienceError } = await supabase
    .from("experience")
    .select("*")
    .order("order_index");

  return (
    mappedSectionList &&
    bannerList &&
    projectList &&
    skillCategoryList &&
    extraList &&
    experienceList && (
      <main>
        <NavigationBar />
        <MobileNav />
        <BannerComponent
          sectionData={
            mappedSectionList.find((sect: Section) => sect.key == "banner")!
          }
          bannerList={bannerList.map(bannerMapper)}
        />
        <ProjectsComponent
          sectionData={
            mappedSectionList.find((sect: Section) => sect.key == "projects")!
          }
          projectList={projectList.map(projectMapper)}
        />
        <SkillsComponent
          sectionData={
            mappedSectionList.find((sect: Section) => sect.key == "skills")!
          }
          skillCategoryList={skillCategoryList.map(skillCategoryMapper)}
        />
        <ExtrasComponent
          sectionData={
            mappedSectionList.find((sect: Section) => sect.key == "extras")!
          }
          extraList={extraList.map(extraMapper)}
        />
        <ExperienceComponent
          sectionData={
            mappedSectionList.find((sect: Section) => sect.key == "experience")!
          }
          experienceList={experienceList.map(experienceMapper)}
        />
      </main>
    )
  );
}
