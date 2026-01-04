// LandingPage.jsx
import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  LightBulbIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import palNaduImage from "../assets/palnadu-foods.svg";
import speakIcon from "../assets/speakicon.svg";
import {
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Understand the Problem",
      desc: "Stakeholder discussions, requirement clarification, and identifying root causes instead of surface issues.",
      icon: LightBulbIcon,
    },
    {
      id: 2,
      title: "Research & Analyze",
      desc: "Market research, competitor analysis, and understanding user needs to inform smarter solutions.",
      icon: MagnifyingGlassIcon,
    },
    {
      id: 3,
      title: "Design Clear Flows",
      desc: "User journeys, process flows, and system thinking before writing a single line of code.",
      icon: Cog6ToothIcon,
    },
    {
      id: 4,
      title: "Build & Iterate",
      desc: "Scalable full-stack solutions using MERN/MEAN, with clean, maintainable architecture.",
      icon: CodeBracketIcon,
    },
    {
      id: 5,
      title: "Validate with Users",
      desc: "Feedback, iterations, and alignment with business goals — not just technical success.",
      icon: UserGroupIcon,
    },
    {
      id: 6,
      title: "Deliver Impact",
      desc: "Ensure solutions solve the real problem, improve business outcomes, and provide measurable value.",
      icon: TrophyIcon,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Shri Palnadu Foods",
      status: "Active",
      logo: palNaduImage,
      desc: "Building a full-stack web application to streamline operations and improve customer experience.",
      isHeroIcon: false, // real logo
    },
    {
      id: 2,
      name: "Upcoming Project",
      status: "Discussion Ongoing",
      logo: speakIcon, // Heroicon
      isHeroIcon: true, // indicates it's an icon, not image
      desc: "Currently in discussion phase: defining requirements and exploring scalable web solutions.",
    },
    {
      id: 3,
      name: "Upcoming Project",
      status: "Discussion Ongoing",
      logo: speakIcon, // Heroicon
      isHeroIcon: true, // indicates it's an icon, not image
      desc: "Currently in discussion phase: defining requirements and exploring scalable web solutions.",
    },
  ];

  const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "pipelinesprojects", label: "Projects in Pipeline" },
    { id: "atsresumemaking", label: "ATS Resume" },
    { id: "contact", label: "Contact" },
  ];

  const atsSteps = [
    {
      id: 1,
      title: "Resume & Role Understanding",
      desc: "Understand your background, target role, experience level, and career goals before optimization.",
      icon: DocumentTextIcon,
    },
    {
      id: 2,
      title: "Job Description Analysis",
      desc: "Analyze target JDs to identify keywords, skills, tools, and role-specific expectations.",
      icon: MagnifyingGlassIcon,
    },
    {
      id: 3,
      title: "ATS Structure Optimization",
      desc: "Restructure resume format, headings, and layout for clean ATS parsing and readability.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      id: 4,
      title: "Content & Keyword Alignment",
      desc: "Rewrite bullet points with measurable impact, role alignment, and ATS-relevant keywords.",
      icon: WrenchScrewdriverIcon,
    },
    {
      id: 5,
      title: "ATS Score & Quality Review",
      desc: "Evaluate resume against ATS benchmarks to ensure strong keyword match and clarity.",
      icon: ChartBarIcon,
    },
    {
      id: 6,
      title: "Final Review & Guidance",
      desc: "Deliver optimized master resume with guidance on adapting it for multiple job applications.",
      icon: CheckBadgeIcon,
    },
  ];

  /* ---------- Scroll Effects ---------- */
  const NAV_HEIGHT = 72;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActive(id); // ✅ IMMEDIATE highlight

    const y = el.offsetTop - NAV_HEIGHT - 10;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= NAV_HEIGHT);
      setShowScrollTop(window.scrollY > 400);

      const sections = [
        "home",
        "about",
        "pipelinesprojects",
        "atsresumemaking",
        "contact",
      ];

      const scrollPos = window.scrollY + NAV_HEIGHT + 20;

      let current = "home";

      for (const id of sections) {
        const sec = document.getElementById(id);
        if (!sec) continue;

        if (scrollPos >= sec.offsetTop) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // ✅ set initial active on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className={`food-page-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="food-page-nav-container">
          {/* Brand */}
          <div
            className="food-page-brand flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <CodeBracketIcon className="w-10 h-10 text-teal-600" />
            <span className="food-page-brand-text font-bold text-xl text-slate-900">
              Connect With Hari
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="food-page-nav-links">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="food-page-nav-actions">
            <a
              href="https://wa.me/919014307255"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn bg-green-600 text-white p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <span className="hidden min-[500px]:inline">
                Let’s Talk Code & Strategy
              </span>
              <svg
                xmlns="www.w3.org"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 min-[500px]:hidden"
              >
                {" "}
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.04L0 24l6.117-1.605a11.79 11.79 0 005.925 1.583h.005c6.632 0 12.028-5.398 12.031-12.035a11.811 11.811 0 00-3.48-8.513z" />{" "}
              </svg>{" "}
            </a>

            <button
              className="food-page-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="food-page-mobile-menu">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => {
                  scrollToSection(id);
                  setMenuOpen(false);
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section
        id="home"
        className="
    mt-6 
    px-4 py-6
    sm:mt-10 sm:px-6 sm:py-8
    md:px-10 md:py-12
    bg-white 
    rounded-2xl 
    shadow-lg 
    max-w-6xl 
    mx-auto
    home-section
  "
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-teal-600 uppercase">
              Technical Analyst • Full-Stack Developer
            </p>

            <h1
              className="
          mt-3 
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-bold 
          text-slate-900 
          leading-snug
        "
            >
              I solve business problems
              <span className="block text-teal-600 sm:inline">
                {" "}
                and build scalable web applications
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              With nearly <strong>4 years of hands-on experience</strong>, I
              work at the intersection of <strong>business analysis</strong> and{" "}
              <strong>full-stack development</strong>, helping startups turn
              unclear ideas into structured, production-ready solutions.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              I focus on understanding the real problem, identifying root
              causes, designing clear flows, and delivering solutions that
              support real business goals.
            </p>

            {/* CTA */}
            <div
              className="
    mt-6
    flex
    flex-col sm:flex-row
    gap-3 sm:gap-4
    justify-center
    items-center
  "
            >
              <a
                href="#pipelinesprojects"
                className="
      w-full sm:w-auto
      flex items-center justify-center
      px-6 py-3
      rounded-xl
      bg-teal-600
      text-white
      font-semibold
      hover:bg-teal-700
      transition
    "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
      w-full sm:w-auto
      flex items-center justify-center
      px-6 py-3
      rounded-xl
      border
      border-slate-300
      text-slate-700
      hover:border-slate-500
      transition
    "
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">
              What I bring
            </h3>

            <ul className="mt-4 space-y-3 text-sm sm:text-base text-slate-600">
              {[
                "Business requirement analysis & stakeholder collaboration",
                "User journeys, process flows & system thinking",
                "Full-stack development (React, Node, MongoDB)",
                "Root cause analysis & problem decomposition",
                "Clean, scalable, maintainable codebases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-teal-600 flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900">
                  4+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900">
                  2+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Live Projects
                </p>
              </div>

              <div className="hidden sm:block">
                <p className="text-xl sm:text-2xl font-bold text-slate-900">
                  End-to-End
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Ownership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mt-10 p-6 sm:p-8 bg-white rounded-[20px] shadow-lg max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-slate-900">How I Work</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          I don’t jump straight into code. I first focus on understanding the
          real business problem, the people involved, and the impact of each
          decision.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              {/* Step Number Circle */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-md">
                {step.id}
              </div>

              <div className="flex flex-col items-center border-2 border-green-500 rounded-2xl p-5 h-full shadow-sm bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <step.icon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-dark-900 mb-2 text-center leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-500 leading-relaxed text-center">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pipelinesprojects"
        className="mt-10 p-6 bg-white rounded-[20px] shadow-lg max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Projects in Pipeline
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={
                project.name === "Shri Palnadu Foods"
                  ? "https://sweet-dragon-9f3794.netlify.app/" // replace with actual URL
                  : "#" // placeholder or future URL for other projects
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border-2 border-orange-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Logo */}
              <img
                src={project.logo}
                alt={`${project.name} Logo`}
                className="w-20 h-20 object-contain mb-4"
              />

              {/* Project Name */}
              <h3 className="font-bold text-lg text-slate-900 mb-2 text-center">
                {project.name}
              </h3>

              {/* Status */}
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } mb-3`}
              >
                {project.status}
              </span>

              {/* Description */}
              <p className="text-sm text-slate-600 text-center leading-relaxed">
                {project.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section
        id="atsresumemaking"
        className="mt-10 p-6 sm:p-8 bg-white rounded-[20px] shadow-lg max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            ATS Resume Optimization
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            I help professionals build a <strong>single master resume</strong>{" "}
            that is ATS-friendly, role-aligned, and adaptable to multiple job
            descriptions — without rewriting the resume every time.
          </p>
        </div>

        {/* Value Points */}
        <ul className="mt-8 max-w-3xl mx-auto space-y-3 text-slate-600 text-sm sm:text-base">
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Resume structured for ATS parsing & keyword relevance
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Role-aligned content (BA, Developer, Product, Analyst)
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            One master resume → optimized for multiple JDs
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            Target score: <strong>75+ ATS compatibility</strong>
          </li>
        </ul>

        {/* Process */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
            My ATS Resume Optimization Process
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {atsSteps.map((step) => (
              <div key={step.id} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-md">
                  {step.id}
                </div>

                <div className="flex flex-col items-center border-2 border-green-500 rounded-2xl p-5 h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <step.icon className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-slate-900 mb-2 text-center leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/919014307255?text=Hey%20Hi%20Hari%2C%20I%E2%80%99m%20sending%20this%20message%20for%20ATS%20resume%20making."
            target="_blank"
            rel="noopener noreferrer"
            className="
    w-full sm:w-auto
    px-6 py-3
    rounded-xl
    bg-green-600
    text-white
    font-semibold
    hover:bg-green-700
    transition
    text-center
  "
          >
            Request ATS Resume Review (WhatsApp)
          </a>

          <a
            href="mailto:haridevworld2022@gmail.com"
            className="
    w-full sm:w-auto
    px-6 py-3
    rounded-xl
    border border-slate-300
    text-slate-700
    hover:border-slate-500
    transition
    text-center
  "
          >
            Request via Email
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="mt-10 p-6 bg-white rounded-[20px] shadow-lg max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
              <p className="text-dark-600">
                Looking for career guidance, ATS resume optimization, or help
                with freelance / product projects? Reach out — I usually respond
                within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start sm:items-center gap-4 group cursor-pointer">
                <div
                  className="p-3 bg-green-100 rounded-full
               group-hover:bg-green-500 transition-colors"
                >
                  <PhoneIcon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <a
                    href="https://wa.me/919014307255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-dark-800 hover:text-green-600"
                  >
                    +91 9014307255
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start sm:items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-600 transition-colors">
                  <EnvelopeIcon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>

                <a
                  href="mailto:haridevworld2022@gmail.com"
                  className="text-lg font-bold text-dark-800 hover:text-indigo-600 break-all sm:break-normal"
                >
                  haridevworld2022@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start sm:items-center gap-4 group cursor-pointer">
                <div
                  className="p-3 bg-blue-100 rounded-full 
                  group-hover:bg-[#0A66C2] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.43a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66h-3.53V9h3.39v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31z" />
                  </svg>
                </div>

                <a
                  href="https://www.linkedin.com/in/haridoradla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-dark-800 hover:text-[#0A66C2]"
                >
                  LinkedIn · Hari Doradla
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-dark-50 p-8 rounded-2xl border border-dark-200">
            <form
              className="space-y-4 text-left"
              onSubmit={(e) => {
                e.preventDefault();

                const name = e.target.name.value;
                const contact = e.target.contact.value;
                const message = e.target.message.value;

                const text = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;
                const encodedText = encodeURIComponent(text);
                const adminNumber = "919014307255";

                window.open(
                  `https://wa.me/${adminNumber}?text=${encodedText}`,
                  "_blank"
                );
                e.target.reset();
              }}
            >
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-dark-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-1">
                  WhatsApp Number / Email
                </label>
                <input
                  type="text"
                  name="contact"
                  placeholder="How should we reach you?"
                  className="w-full px-4 py-3 rounded-lg border border-dark-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your requirement..."
                  className="w-full px-4 py-3 rounded-lg border border-dark-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-lime-700 text-white font-bold py-3 px-6 rounded-lg shadow"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
