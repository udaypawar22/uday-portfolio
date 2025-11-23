import { Extra } from "@/types/Extra";

export function extraMapper(row: any): Extra {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    iconUrl: row.icon_url ?? undefined,
    linkTo: row.link_to ?? undefined,
    year: row.year ?? undefined,
    orderIndex: row.order_index,
  };
}
