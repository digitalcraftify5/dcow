const fs = require('fs');
const path = require('path');

// Helper to create an Ultra-Modern Multi-Column PDF 1.4 Document
function createUltraModernResumePdf() {
  const streamText = [];

  // 1. Left Sidebar Background Panel (Dark Slate Cyber Column: x:0 to x:210, y:0 to y:842)
  streamText.push("0.07 0.10 0.15 rg"); // Deep dark cyan-slate fill
  streamText.push("0 0 210 842 re f");

  // 2. Right Main Panel Background (Clean White: x:210 to x:595)
  streamText.push("0.98 0.99 1.0 rg");
  streamText.push("210 0 385 842 re f");

  // 3. Top Header Accent Banner Bar (Gradient-style Cyan Bar on Right Panel)
  streamText.push("0.0 0.6 0.7 rg"); // Vibrant Cyan Accent
  streamText.push("210 828 385 14 re f");

  // =========================================================================
  // LEFT SIDEBAR CONTENT (x: 20 to 190)
  // =========================================================================

  // Left Sidebar Title: TANVEER HUSSAIN
  streamText.push("BT");
  streamText.push("/F2 18 Tf");
  streamText.push("0.0 0.95 1.0 rg"); // Bright Cyan text
  streamText.push("1 0 0 1 20 805 Tm");
  streamText.push("(TANVEER HUSSAIN) Tj");
  streamText.push("ET");

  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.6 0.85 0.95 rg");
  streamText.push("1 0 0 1 20 788 Tm");
  streamText.push("(FOUNDER & CEO) Tj");
  streamText.push("ET");

  streamText.push("BT");
  streamText.push("/F1 8 Tf");
  streamText.push("0.4 0.65 0.75 rg");
  streamText.push("1 0 0 1 20 776 Tm");
  streamText.push("(DIGITAL CRAFTIFY LTD.) Tj");
  streamText.push("ET");

  // Divider Line Left Sidebar
  streamText.push("0.0 0.5 0.6 RG");
  streamText.push("0.8 w");
  streamText.push("20 765 m 190 765 l S");

  // Left Sidebar Section: CONTACT
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.0 0.9 1.0 rg");
  streamText.push("1 0 0 1 20 748 Tm");
  streamText.push("(CONTACT DIRECT) Tj");
  streamText.push("ET");

  const contactItems = [
    "Phone: +91 91494 55143",
    "WhatsApp: +91 91494 55143",
    "BOTIM: +91 91494 55143",
    "Email: support@digitalcraftify.com",
    "Web: www.digitalcraftify.com",
    "Location: Srinagar, J&K, IN",
    "Postal: 190005"
  ];

  let leftY = 732;
  contactItems.forEach(item => {
    streamText.push("BT");
    streamText.push("/F1 8 Tf");
    streamText.push("0.8 0.9 0.95 rg");
    streamText.push(`1 0 0 1 20 ${leftY} Tm`);
    streamText.push(`(${item.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}) Tj`);
    streamText.push("ET");
    leftY -= 14;
  });

  // Divider Line Left Sidebar
  leftY -= 5;
  streamText.push("0.0 0.5 0.6 RG");
  streamText.push("20 " + leftY + " m 190 " + leftY + " l S");

  // Left Sidebar Section: TECH STACK
  leftY -= 18;
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.0 0.9 1.0 rg");
  streamText.push(`1 0 0 1 20 ${leftY} Tm`);
  streamText.push("(TECH STACK EXPERTISE) Tj");
  streamText.push("ET");

  const techStack = [
    "Next.js 15 & React 19 (95%)",
    "TypeScript & JavaScript (90%)",
    "Node.js & Express (90%)",
    "Tailwind CSS (95%)",
    "UI/UX & Figma (95%)",
    "PostgreSQL & Prisma (85%)",
    "REST & GraphQL APIs (90%)",
    "Docker & DevOps (80%)",
    "Vercel Cloud (90%)",
    "SEO Optimization (90%)"
  ];

  leftY -= 16;
  techStack.forEach(tech => {
    streamText.push("BT");
    streamText.push("/F1 8 Tf");
    streamText.push("0.85 0.92 0.98 rg");
    streamText.push(`1 0 0 1 20 ${leftY} Tm`);
    streamText.push(`(* ${tech}) Tj`);
    streamText.push("ET");
    leftY -= 14;
  });

  // Divider Line Left Sidebar
  leftY -= 5;
  streamText.push("0.0 0.5 0.6 RG");
  streamText.push("20 " + leftY + " m 190 " + leftY + " l S");

  // Left Sidebar Section: KEY METRICS
  leftY -= 18;
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.0 0.9 1.0 rg");
  streamText.push(`1 0 0 1 20 ${leftY} Tm`);
  streamText.push("(KEY PERFORMANCE METRICS) Tj");
  streamText.push("ET");

  const metrics = [
    "5+ Years Experience",
    "250+ Completed Projects",
    "100+ Global Clients",
    "99.8% Client Retention",
    "24/7 Support SLA"
  ];

  leftY -= 16;
  metrics.forEach(m => {
    streamText.push("BT");
    streamText.push("/F2 8 Tf");
    streamText.push("0.0 0.95 0.6 rg"); // Emerald bright
    streamText.push(`1 0 0 1 20 ${leftY} Tm`);
    streamText.push(`([>] ${m}) Tj`);
    streamText.push("ET");
    leftY -= 14;
  });

  // Left Sidebar Socials
  leftY -= 5;
  streamText.push("0.0 0.5 0.6 RG");
  streamText.push("20 " + leftY + " m 190 " + leftY + " l S");

  leftY -= 18;
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.0 0.9 1.0 rg");
  streamText.push(`1 0 0 1 20 ${leftY} Tm`);
  streamText.push("(SOCIAL HANDLES) Tj");
  streamText.push("ET");

  const socials = [
    "GitHub: digitalcraftify5",
    "Discord: digitalcraftify5",
    "Facebook: digitalcraftify5",
    "Instagram: digitalcraftify5",
    "LinkedIn: digitalcraftify5"
  ];

  leftY -= 16;
  socials.forEach(s => {
    streamText.push("BT");
    streamText.push("/F1 8 Tf");
    streamText.push("0.75 0.85 0.95 rg");
    streamText.push(`1 0 0 1 20 ${leftY} Tm`);
    streamText.push(`(${s}) Tj`);
    streamText.push("ET");
    leftY -= 13;
  });


  // =========================================================================
  // RIGHT MAIN PANEL CONTENT (x: 230 to 575)
  // =========================================================================

  let rightY = 800;

  // Header Title
  streamText.push("BT");
  streamText.push("/F2 20 Tf");
  streamText.push("0.05 0.15 0.25 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(TANVEER HUSSAIN) Tj");
  streamText.push("ET");

  rightY -= 18;
  streamText.push("BT");
  streamText.push("/F2 12 Tf");
  streamText.push("0.0 0.5 0.6 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(FOUNDER & CHIEF EXECUTIVE OFFICER | FULL-STACK ARCHITECT) Tj");
  streamText.push("ET");

  rightY -= 12;
  streamText.push("0.8 0.8 0.8 RG");
  streamText.push("0.8 w");
  streamText.push(`230 ${rightY} m 575 ${rightY} l S`);

  // SECTION 1: EXECUTIVE PROFILE
  rightY -= 18;
  streamText.push("BT");
  streamText.push("/F2 12 Tf");
  streamText.push("0.0 0.45 0.55 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(EXECUTIVE PROFILE & SUMMARY) Tj");
  streamText.push("ET");

  const summaryLines = [
    "Visionary Founder, Chief Executive Officer, Lead Full-Stack Architect, and Digital Entrepreneur",
    "with over 5+ years of hands-on experience building high-performance web applications, ultra-premium",
    "UI/UX interfaces, and scalable cloud infrastructures.",
    "Proven track record of empowering 100+ businesses across North America, Europe, and Asia",
    "with modern tech stacks, high-converting digital branding, and 24/7 dedicated execution."
  ];

  rightY -= 16;
  summaryLines.forEach(line => {
    streamText.push("BT");
    streamText.push("/F1 9 Tf");
    streamText.push("0.2 0.2 0.2 rg");
    streamText.push(`1 0 0 1 230 ${rightY} Tm`);
    streamText.push(`(${line}) Tj`);
    streamText.push("ET");
    rightY -= 13;
  });

  // SECTION 2: WORK EXPERIENCE
  rightY -= 8;
  streamText.push("0.8 0.8 0.8 RG");
  streamText.push(`230 ${rightY} m 575 ${rightY} l S`);

  rightY -= 18;
  streamText.push("BT");
  streamText.push("/F2 12 Tf");
  streamText.push("0.0 0.45 0.55 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(PROFESSIONAL LEADERSHIP EXPERIENCE) Tj");
  streamText.push("ET");

  // Job 1: Founder & CEO at Digital Craftify Ltd.
  rightY -= 16;
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.1 0.1 0.1 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(FOUNDER & CHIEF EXECUTIVE OFFICER | Digital Craftify Ltd.) Tj");
  streamText.push("ET");

  streamText.push("BT");
  streamText.push("/F1 8 Tf");
  streamText.push("0.4 0.4 0.4 rg");
  streamText.push(`1 0 0 1 480 ${rightY} Tm`);
  streamText.push("(2021 - PRESENT) Tj");
  streamText.push("ET");

  const job1Bullets = [
    "Founded & scaled Digital Craftify into a premier digital web agency serving global enterprises.",
    "Architected 250+ custom web apps, e-commerce stores, and cloud solutions with 99.8% retention.",
    "Engineered ultra-fast web architectures achieving 100/100 Lighthouse performance scores.",
    "Directed cross-functional design, full-stack development, and SEO optimization strategies."
  ];

  rightY -= 14;
  job1Bullets.forEach(b => {
    streamText.push("BT");
    streamText.push("/F1 9 Tf");
    streamText.push("0.25 0.25 0.25 rg");
    streamText.push(`1 0 0 1 235 ${rightY} Tm`);
    streamText.push(`(• ${b.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}) Tj`);
    streamText.push("ET");
    rightY -= 13;
  });

  // Job 2: Senior Full-Stack Web Architect
  rightY -= 8;
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.1 0.1 0.1 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(SENIOR FULL-STACK ARCHITECT & CONSULTANT | Freelance & Client Projects) Tj");
  streamText.push("ET");

  streamText.push("BT");
  streamText.push("/F1 8 Tf");
  streamText.push("0.4 0.4 0.4 rg");
  streamText.push(`1 0 0 1 480 ${rightY} Tm`);
  streamText.push("(2019 - 2021) Tj");
  streamText.push("ET");

  const job2Bullets = [
    "Built bespoke React and Node.js applications for international clients across e-commerce & SaaS.",
    "Designed scalable REST & GraphQL API endpoints with robust PostgreSQL & MongoDB backends.",
    "Implemented automated CI/CD deployment pipelines on Vercel, AWS, and Docker."
  ];

  rightY -= 14;
  job2Bullets.forEach(b => {
    streamText.push("BT");
    streamText.push("/F1 9 Tf");
    streamText.push("0.25 0.25 0.25 rg");
    streamText.push(`1 0 0 1 235 ${rightY} Tm`);
    streamText.push(`(• ${b.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}) Tj`);
    streamText.push("ET");
    rightY -= 13;
  });

  // SECTION 3: KEY PROJECTS & SOLUTIONS
  rightY -= 8;
  streamText.push("0.8 0.8 0.8 RG");
  streamText.push(`230 ${rightY} m 575 ${rightY} l S`);

  rightY -= 18;
  streamText.push("BT");
  streamText.push("/F2 12 Tf");
  streamText.push("0.0 0.45 0.55 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(NOTABLE ENTERPRISE PROJECTS & ARCHITECTURE) Tj");
  streamText.push("ET");

  const projects = [
    "Digital Craftify Platform: Next.js 15, React 19, TypeScript, 60FPS Particles & Cyber UI.",
    "Pulse Fitness & Health Hub: High-conversion e-commerce portal with real-time analytics.",
    "AI Conversion Engine: Custom AI workflow integration for automated business growth.",
    "Global E-Commerce Suite: Secure payment gateway, inventory management & sub-second response."
  ];

  rightY -= 15;
  projects.forEach(p => {
    streamText.push("BT");
    streamText.push("/F1 9 Tf");
    streamText.push("0.2 0.2 0.2 rg");
    streamText.push(`1 0 0 1 235 ${rightY} Tm`);
    streamText.push(`(-> ${p.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}) Tj`);
    streamText.push("ET");
    rightY -= 13;
  });

  // SECTION 4: OFFICIAL CALLIGRAPHY SIGNATURE
  rightY -= 10;
  streamText.push("0.8 0.8 0.8 RG");
  streamText.push(`230 ${rightY} m 575 ${rightY} l S`);

  rightY -= 18;
  streamText.push("BT");
  streamText.push("/F2 10 Tf");
  streamText.push("0.4 0.4 0.4 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(OFFICIAL EXECUTIVE CALLIGRAPHY SIGNATURE) Tj");
  streamText.push("ET");

  rightY -= 25;
  streamText.push("BT");
  streamText.push("/F2 22 Tf");
  streamText.push("0.0 0.55 0.65 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(Tanveer Hussain) Tj");
  streamText.push("ET");

  rightY -= 14;
  streamText.push("BT");
  streamText.push("/F1 9 Tf");
  streamText.push("0.0 0.6 0.4 rg");
  streamText.push(`1 0 0 1 230 ${rightY} Tm`);
  streamText.push("(Founder & Chief Executive Officer - Digital Craftify [Verified Document]) Tj");
  streamText.push("ET");


  const streamContent = streamText.join('\n');
  const streamLength = Buffer.byteLength(streamContent);

  const pdfStructure = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj

2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj

3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj

4 0 obj
<<
  /Length ${streamLength}
>>
stream
${streamContent}
endstream
endobj

5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj

6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj

xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000268 00000 n 
0000000324 00000 n 
0000000380 00000 n 

trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
440
%%EOF`;

  return Buffer.from(pdfStructure, 'binary');
}

const ultraModernPdf = createUltraModernResumePdf();

const downloadsDir = path.join(__dirname, '../public/downloads');
const publicDir = path.join(__dirname, '../public');

fs.writeFileSync(path.join(downloadsDir, 'Tanveer_Hussain_Resume.pdf'), ultraModernPdf);
fs.writeFileSync(path.join(publicDir, 'Tanveer_Hussain_Resume.pdf'), ultraModernPdf);
fs.writeFileSync(path.join(downloadsDir, 'Digital_Craftify_Profile.pdf'), ultraModernPdf);
fs.writeFileSync(path.join(publicDir, 'Digital_Craftify_Profile.pdf'), ultraModernPdf);

console.log("Ultra-modern ultimate PDF resume created successfully in public/ and public/downloads/!");
