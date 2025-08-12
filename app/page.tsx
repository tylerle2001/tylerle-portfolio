import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Header />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a consultant with a passion for technology, sports analytics, and strategic problem-solving.
          This site showcases my projects, professional experience, and personal interests.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
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

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ExperienceCard
          role="Project Assistant"
          company="Consulting Firm"
          period="July 2023 — Present"
          details={[
            "Led M&A strategy projects for clients in manufacturing and logistics.",
            "Built operational models to identify efficiency improvements.",
            "Collaborated with cross-border teams in the US and Europe."
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:tylerle@example.com" className="text-blue-600">tylerle@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tylerle" target="_blank" className="text-blue-600">linkedin.com/in/tylerle</a></p>
      </section>

      <Footer />
    </main>
  );
}
 


