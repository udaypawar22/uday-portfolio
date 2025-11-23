import { Skill } from "./Skill";

export type SkillCategory = {
  id: string;
  name: string;
  orderIndex: number;
  skills: Skill[];
};
