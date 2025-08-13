interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  details: string[];
}
export default function ExperienceCard({ role, company, period, details }: ExperienceCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{role} — {company}</h3>
        <span className="text-xs text-neutral-400">{period}</span>
      </div>
      <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-2">
        {details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </div>
  );
}
