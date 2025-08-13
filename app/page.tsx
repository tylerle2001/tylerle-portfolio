import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Header />

      <section className="section card">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">About Me</h2>
        <p className="muted leading-relaxed">
          I&apos;m a consultant with a passion for technology, sports analytics, and strategic problem‑solving.
          This site showcases my projects, professional experience, and personal interests.
        </p>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Projects</h2>
        <div className="grid gap-4">
          <ProjectCard
            title="Basketball Analytics Dashboard"
            description="Interactive NBA data visualizations using Python and Streamlit."
          />
          <ProjectCard
            title="Financial Planner App"
            description="A budgeting and projections tool built with React and Tailwind."
          />
          <ProjectCard
            title="Sports Marketing Case Study"
            description="Data-driven analysis of marketing campaigns using Power BI."
          />
        </div>
      </section>

      <section className="section card">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Experience</h2>
        <div className="space-y-6">
          <ExperienceCard
            role="Consultant"
            company="Vindelici Advisors"
            period="June 2023 — Present"
            details={[
              "Facilitate market entry for domestic and international firms by establishing legal entities, coordinating operations set-up, and fostering strategic partnerships to support growth and competitive positioning.",
              "Support M&A projects by developing presentation materials, organizing outreach to PE/VC groups, and managing due diligence analysis, contributing to a $100M fundraising target across all projects.",
              "Mentor and lead interns by overseeing task assignments and weekly check-ins to ensure alignment with project goals.",
            ]}
          />
          <ExperienceCard
            role="Strategic Consulting Intern"
            company="Vindelici Advisors"
            period="September 2022 — May 2023"
            details={[
              "Consulted for a robotics firm by conducting employee interviews to identify process bottlenecks, refining process maps, and implementing profitability metrics to achieve targeted outcomes.",
              "Generated and aligned PE/VC investor lists with client profiles for M&A outreach.",
            ]}
          />
        </div>
      </section>

      <section id="contact" className="section card">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Contact</h2>
        <div className="space-y-2 text-neutral-200">
          <p>
            Email:{" "}
            <a href="mailto:tyler.le2001@Outlook.com">tyler.le2001@Outlook.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/tylerxle" target="_blank" rel="noreferrer">
              linkedin.com/in/tylerxle
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


