import { Experience } from "@/types/Experience";

export function experienceMapper(row: any): Experience {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    linkTo: row.link_to ?? undefined,
    year: row.year ?? undefined,
    orderIndex: row.order_index,
  };
}
