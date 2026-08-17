export const site = {
  name: "VM Engineering", // Replace with your company name
  shortName: "VME",
  tagline: "Technology with a clear direction.",
  description: "Software, websites, automation and digital solutions engineered around the way you actually work.",
  email: "hello@yourcompany.co.za",
  phone: "+27 00 000 0000",
  location: "South Africa",
  founder: { name: "Your Name", role: "Founder & Technology Lead", bio: "Add a short founder biography here." },
  social: { github: "https://github.com/", linkedin: "https://linkedin.com/", instagram: "https://instagram.com/" }
};

export const services = [
  ["Software Engineering", "Custom platforms, internal tools, APIs and maintainable systems built around real operations."],
  ["Website Development", "Distinct, fast and accessible websites that make your organisation easy to trust."],
  ["Automation", "Remove repetitive work with connected workflows, notifications and reliable data processing."],
  ["Data & Analytics", "Turn scattered information into useful dashboards, reports and business intelligence."],
  ["AI & Intelligent Systems", "Practical AI integrations, document workflows and assistive tools with human oversight."],
  ["Digital Media", "Live production, content and digital media systems that complement your technology work."]
] as const;

export const projects = [
  { name: "Operations Hub", category: "Business platform", text: "A central workspace for teams to manage requests, tasks and operational visibility.", tags: ["Next.js", "PostgreSQL", "APIs"] },
  { name: "Gather", category: "Registration system", text: "A streamlined registration and data-management experience for events and organisations.", tags: ["React", "Automation", "Data"] },
  { name: "Signal", category: "Analytics dashboard", text: "A clear reporting layer that turns raw business data into decisions people can act on.", tags: ["SQL", "Dashboards", "Python"] },
  { name: "Frame", category: "Digital media platform", text: "A content and media platform connecting audiences, production and digital delivery.", tags: ["Web", "Media", "Cloud"] }
] as const;

