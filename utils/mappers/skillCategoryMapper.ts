import { Skill } from "@/types/Skill";
import { SkillCategory } from "@/types/SkillCategory";

function skillMapper(row: any): Skill {
  return {
    id: row.id,
    name: row.name,
    logoUrl: row.logo_url,
    level: row.level,
    orderIndex: row.order_index,
  };
}

export function skillCategoryMapper(row: any): SkillCategory {
  return {
    id: row.id,
    name: row.name,
    orderIndex: row.order_index,
    skills: row.skills?.map(skillMapper) ?? [],
  };
}
