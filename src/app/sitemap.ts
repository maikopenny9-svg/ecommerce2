import type { MetadataRoute } from "next";
const routes=["","/services","/work","/about","/contact"];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(route=>({url:`https://example.com${route}`,lastModified:new Date(),changeFrequency:"monthly",priority:route===""?1:.7}));}

