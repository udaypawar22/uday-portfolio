import { Banner } from "@/types/Banner";

export function bannerMapper(row: any): Banner {
  return {
    id: row.id,
    title: row.title,
    name: row.name,
    profileImageUrl: row.profile_image_url,
  };
}
