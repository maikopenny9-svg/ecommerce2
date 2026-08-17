"use client";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
const nav = [["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]] as const;
export function Header(){const [open,setOpen]=useState(false);return <><a className="skip" href="#main">Skip to content</a><div className="topline"/><header className={open?"mobile-open":""}><div className="shell nav"><Link className="brand" href="/">{site.name}<span>.</span></Link><nav className="links" aria-label="Main navigation">{nav.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="button" href="/contact">Start a Project <ArrowUpRight size={15}/></Link></nav><button className="menu" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}><Menu/></button></div></header></>}
export function Footer(){return <footer><div className="shell"><div className="footer-grid"><div><Link className="brand" href="/">{site.name}<span>.</span></Link><p>{site.description}</p></div><div><p className="eyebrow">Explore</p><nav className="footer-links">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div><div><p className="eyebrow">Capabilities</p><div className="footer-links"><span>Software Engineering</span><span>Web Development</span><span>Automation & Data</span><span>AI Solutions</span><span>Digital Media</span></div></div></div><div className="copyright">© 2026 {site.name}. All rights reserved.</div></div></footer>}

