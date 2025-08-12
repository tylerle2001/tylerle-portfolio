interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export default function ExperienceCard({ role, company, period, details }: ExperienceCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4">
      <h3 className="text-lg font-bold">{role} — {company}</h3>
      <p className="text-gray-500 mb-2">{period}</p>
      <ul className="list-disc ml-6 text-gray-700">
        {details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
