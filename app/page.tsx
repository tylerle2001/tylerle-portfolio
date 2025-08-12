export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Tyler Le</h1>
        <p className="text-lg text-gray-600">Consultant • Sports Enthusiast • Aspiring Developer</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a consultant with a passion for technology, sports analytics, and strategic problem-solving.
          This site showcases my projects, professional experience, and personal interests.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc ml-6">
          <li>Basketball Analytics Dashboard (Python, Streamlit)</li>
          <li>Financial Planner App (React, Tailwind)</li>
          <li>Sports Marketing Case Study (Power BI, Excel)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:tylerle@example.com" className="text-blue-600">tylerle@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tylerle" target="_blank" className="text-blue-600">linkedin.com/in/tylerle</a></p>
      </section>
    </main>
  );
}
