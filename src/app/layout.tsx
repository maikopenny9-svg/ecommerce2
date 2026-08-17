import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";
import { site } from "@/data/site";
export const metadata:Metadata={title:{default:`${site.name} | Software & Digital Solutions`,template:`%s | ${site.name}`},description:site.description,metadataBase:new URL("https://example.com"),openGraph:{type:"website",title:site.name,description:site.description},twitter:{card:"summary_large_image",title:site.name,description:site.description}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}

