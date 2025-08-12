interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-600 hover:underline"
          rel="noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
}
