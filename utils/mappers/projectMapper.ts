import { Project } from "@/types/Project";

export function projectMapper(row: any): Project {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    imageUrl: row.image_url,
    linkTo: row.link_to,
    orderIndex: row.order_index,
    bgColor: row.bg_color ?? undefined,
    fgColor: row.fg_color ?? undefined,
  };
}
