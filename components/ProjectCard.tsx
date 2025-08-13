interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}
export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="card hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="muted mb-3">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          View Project →
        </a>
      )}
    </div>
  );
}
