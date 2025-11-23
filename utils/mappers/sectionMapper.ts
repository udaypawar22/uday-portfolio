import { Section } from "@/types/Section";

export function sectionMapper(row: any): Section {
  return {
    id: row.id,
    key: row.key,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    orderIndex: row.order_index,
    enabled: row.enabled,
    bgColor: row.bg_color ?? undefined,
    fgColor: row.fg_color ?? undefined,
  };
}
