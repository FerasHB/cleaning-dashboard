import type { JobStatus } from "@/data/jobs";

type JobCardProps = {
  customerName: string;
  location: string;
  time: string;
  service: string;
  status: JobStatus;
  employee: string;
};

export default function JobCard({
  customerName,
  location,
  time,
  service,
  status,
  employee,
}: JobCardProps) {
  const statusStyles = {
    Offen: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20",
    "In Arbeit": "bg-blue-500/15 text-blue-300 border border-blue-500/20",
    Erledigt: "bg-green-500/15 text-green-300 border border-green-500/20",
  };

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-md">
      <h2 className="font-semibold text-white">{customerName}</h2>

      <p className="mt-1 text-sm text-gray-400">
        {location} • {time}
      </p>

      <p className="mt-2 text-sm text-gray-300">{service}</p>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-400">👷 {employee}</span>

        <span
          className={`rounded-full px-2 py-1 text-xs ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
